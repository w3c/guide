(function() {
  // For debugging
  let trace = function () {};

  function _trace(msg) {
	   console.log(msg);
  }

  if (window.location.href.includes("localhost")) {
    trace = _trace;
  }

  function log(msg) {
    let pre = document.getElementById("log");
    let text = pre.textContent;
    if (text !== "") {
      text += "\n";
    }
    pre.textContent = text + msg;
  }

  function clearLog() {
    let pre = document.getElementById("log");
    pre.textContent = "";
  }

  let config = {
    noFPWD: false,
    nowebmaster: false,
    debug: false,
    comments: 0
  }

  function convertDate(dateInput) {
    return moment(dateInput + "T10:00:00-04:00"); // US/Eastern timezone;
  }

  // For publication moratoria
  // this is populated later by fetching the moratoria.json
  let moratoria = [];

  function avoidMoratorium(date) {
    for (var i = 0; i < moratoria.length; i++) {
      let range = moratoria[i];
      if (date.isBetween(range[0], range[1], null, "[]")) {
        return range[2];
      }
    }
    return null;
  }

  // avoid Saturdays and Sundays
  function avoidWeekend(date) {
    let day = date.day();
    return (day !== 0 && day !== 6);
  }

  // Is it a Thuesday or a Thursday?
  function isTuesdayThursday(date) {
    let day = date.day();
    return ((day === 2 || day === 4));
  }

  // only Tuesdays and Thursdays, and avoid moratoria
  function forPublication(item, date) {
    return ((item.id === 'cr' && config.nowebmaster && avoidWeekend(date))
            || (isTuesdayThursday(date) && (avoidMoratorium(date) === null)));
  }

  // is this date related to a publication?
  function isPublication(item) {
    return item.classList.contains("publication");
  }

  // is this date related to a transition?
  function isTransition(item) {
    return item.classList.contains("transition");
  }

  function updateItem(item, date, up) {
      let originalDate = date;
      let publication = isPublication(item);
      let transition = isTransition(item);
      let msg = "";
      while((publication && !forPublication(item, date))
            || (transition && !avoidWeekend(date))) {
        if (publication) {
          msg += " " + date.format("YYYY-MM-DD") + " is ";
          let moratorium = avoidMoratorium(date);
          if (moratorium !== null) {
            msg += "in a publication moratorium (" + moratorium + ")";
          } else if (!avoidWeekend(date)) {
              msg += "in the week end";
          } else if (!isTuesdayThursday(date)) {
            msg += "not a Tuesday or a Thursday";
          } else {
            msg += "isn't good enough somehow. Not sure why... Please report this as a bug."
          }
        } else if (transition) {
          msg += "in the week end";
        }
        msg += "\n";
        date = moment(date).add((up)?1:-1, "days");
      }
      let report = item.querySelector(".u-bg-active");
      if (!originalDate.isSame(date)) {
        msg = originalDate.format("YYYY-MM-DD")
          + " didn't work out. Picked instead "
          + date.format("YYYY-MM-DD") + "\n" + msg;
        if (report) {
          report.textContent = msg;
          report.style.display = "block";
        } else {
          log(msg);
        }
      } else {
        if (report) report.style.display = "none";
      }
      if (publication) {
        item.querySelector("input").value = date.format("YYYY-MM-DD");
        let echidna = item.querySelector(".echidna");
        let transEchidna = document.querySelector("#to-" + item.id + " .echidna");
        if (echidna) {
          if (!isTuesdayThursday(date)) {
            echidna.style.display = "block";
            if (transEchidna) transEchidna.style.display = "block";
          } else {
            echidna.style.display = "none";
            if (transEchidna) transEchidna.style.display = "none";
          }
        }
      }
      item.querySelector("span.date").textContent = date.format("dddd, MMMM D YYYY");
      item.momentDate = date;
  }
  function adjustDate(item, refItem, up) {
      let refItemDate = moment(item.momentDate);
      let diff = item.dataset.day - refItem.dataset.day;
      trace("diff is " + diff);
      updateItem(item, refItemDate.add(diff, "days"), up);
  }

  // clear all dates
  function clearDates() {
    let list = document.querySelectorAll("ul#steps li");
    for (var index = 0; index < list.length; index++) {
      let li = list[index];
      li.momentDate = undefined;
      li.querySelector("span.date").textContent = "";
    }
  }

  // adjust all the dates according to the REC one
  function tuneDates()  {
    trace("Tune all remaining dates to match the REC");

    // update one Item
    function updateLI(li) {
        let refDate = document.getElementById(li.dataset.base).momentDate;
        if (refDate === undefined)
          throw new Error("Can't compute from base " + li.dataset.base);
        let refItemDate = moment(refDate);
        updateItem(li, refItemDate.add(li.dataset.day, "days"), false);
    }
    let list = document.querySelectorAll("ul#steps li");
    // compute all the dates that are using the REC as a base
    for (var index = 0; index < list.length; index++) {
      let li = list[index];
      if (li.momentDate === undefined && li.dataset.base === 'rec'
          && !li.hasAttribute("hidden")) {
        updateLI(li);
      }
    }
    // compute all remaining dates
    for (var index = 0; index < list.length; index++) {
      let li = list[index];
      if (li.momentDate === undefined
          && !li.hasAttribute("hidden")) {
        updateLI(li);
      }
    }

    // adjust reference draft according to transition request for CR
    if (!config.noFPWD) {
      let toCR = moment(document.getElementById("to-cr").momentDate).add(-1, "days");
      let referenceDraft = document.getElementById("reference-draft").momentDate;
      if (referenceDraft.isAfter(toCR)) {
        log("Shifted reference draft last update to be 1 day before CR transition request");
        updateItem(document.getElementById("reference-draft"), toCR, false);
      }
    }
    // adjust transition request for PR according to deadline for comments
    let commentEnd = moment(document.getElementById("comments").momentDate).add(1, "days");
    let toPR = document.getElementById("to-pr").momentDate;
    if (toPR.isBefore(commentEnd)) {
      log("Shifted transition request for PR to be 1 day after deadline for comments");
      updateItem(document.getElementById("to-pr"), commentEnd, false);
    }
    // adjust end of AC review according to call for exclusions
    let acEnd = document.getElementById("ac-review-end").momentDate;
    if (!config.noFPWD) {
      let cfe1 = moment(document.getElementById("first-cfe").momentDate).add(10, "days");
      if (acEnd.isBefore(cfe1)) {
        log("Shifted end of AC review to be 10 days after end of 150 days exclusion opportunity")
        updateItem(document.getElementById("ac-review-end"), cfe1, false);
      }
    }
    let cfe2 = moment(document.getElementById("second-cfe").momentDate).add(10, "days");
    if (acEnd.isBefore(cfe2)) {
      log("Shifted end of AC review to be 10 days after end of 60 days exclusion opportunity")
      updateItem(document.getElementById("ac-review-end"), cfe2, false);
    }
    // adjust transition request for REC according to end of AC review
    acEnd = moment(document.getElementById("ac-review-end").momentDate).add(1, "days");
    let toREC = document.getElementById("to-rec").momentDate;
    if (toREC.isBefore(acEnd)) {
      log("Shifted transition request for REC to be 1 day after end of AC review")
      updateItem(document.getElementById("to-rec"), acEnd, false);
    }
  }
  function removeFPWD() {
    trace("Remove FPWD dates");
    config.noFPWD = true;
    let list = document.querySelectorAll("ul#steps li");
    // compute all the dates that are using the REC as a base
    for (var index = 0; index < list.length; index++) {
      let li = list[index];
      if (li.id === 'to-fpwd' || li.id === "fpwd"
          || li.id === "first-cfe" || li.id === "reference-draft") {
        li.setAttribute("hidden", "hidden");
      }
    }
    clearDates();

    onpushstate();
  }
  function addFPWD() {
    trace("Add FPWD dates");
    config.noFPWD = false;
    let list = document.querySelectorAll("ul#steps li");
    // compute all the dates that are using the REC as a base
    for (var index = 0; index < list.length; index++) {
      let li = list[index];
      if (li.id === 'to-fpwd' || li.id === "fpwd"
          || li.id === "first-cfe" || li.id === "reference-draft") {
        li.removeAttribute("hidden");
      }
    }
    onpushstate();
  }
  function toggleFPWD(e) {
    if (disableChange) return;
    trace("Toggle noFPWD");
    if (e.target.checked && !config.noFPWD) {
      removeFPWD();
    } else if (!e.target.checked && config.noFPWD){
      addFPWD();
    }
  }
  function removenowebmaster() {
    trace("Remove nowebmaster from publication");
    config.nowebmaster = false;
    let input = document.getElementById(config.id);
    if (input !== null)
      changeInput({ target: input.querySelector("input") });
    else
      onpushstate();
  }
  function addnowebmaster() {
    trace("Add nowebmaster for publication");
    config.nowebmaster = true;
    let input = document.getElementById(config.id);
    if (input !== null)
      changeInput({ target: input.querySelector("input") });
    else
      onpushstate();
  }
  function togglenowebmaster(e) {
    if (disableChange) return;
    trace("Toggle nowebmaster");
    if (e.target.checked && !config.nowebmaster) {
      addnowebmaster();
    } else if (!e.target.checked && config.nowebmaster){
      removenowebmaster();
    }
  }
  function modifyBaseDates() {
    function modifyElement(id) {
      let elt = document.getElementById(id);
      if (!elt.comments) elt.comments = 0;
      elt.setAttribute("data-day",
         Number.parseInt(elt.dataset.day)
         + (elt.comments * 7)
         - (config.comments * 7));
         elt.comments = config.comments;
      trace("Adjust base date for " + id + " to be " + elt.dataset.day
         + " days from REC (removing " + config.comments + " weeks)");
    }
    document.getElementById("comment_weeks_wr").textContent = config.comments;
    modifyElement("deadline-wide-review-comments");
    modifyElement("fpwd");
  }
  function adjustCommentWeeks(e) {
    trace("Adjust comment weeks");
    let weeks = Number.parseInt(e.target.value);
    if (weeks < 0 || Number.isNaN(weeks)) weeks = 0;
    trace("Use " + weeks + " weeks to address comments");
    document.querySelector("#comment_weeks").value = weeks;
    config.comments = weeks;
    // take into those weeks:

    onpushstate(); // reinitialize window.location
    modifyBaseDates();
    initialize(); // hard reset
  }
  document.querySelector("#comment_weeks").oninput = adjustCommentWeeks;

  function adjustDates(refInput) {
    trace("Adjust dates");
    let item = refInput;
    while (item.nodeName !== "LI") {
      item = item.parentNode;
      if (item === null) throw new Error("Invalid HTML structure");
    }
    clearLog();

    // adjust the reference input date
    let d;
    if (refInput.value === "") {
        return;
    } else {
      d = convertDate(refInput.value);
      if (!d.isValid()) {
        console.log("*ERROR* Invalid date!");
        return;
      }
    }
    clearLog();
    clearDates();
    updateItem(item, d, true);
    config.id = item.id;
    onpushstate();

    // all dates can be computed from the REC, so compute it
    // (REC uses the fpwd as a base)
    if (item.dataset.base === 'rec') {
      trace("Adjust REC date");
      let itemRec = document.getElementById("rec");
      let refItemDate = moment(item.momentDate);
      updateItem(itemRec, refItemDate.add(Math.abs(item.dataset.day), "days"), true);
    }
    tuneDates();
  }


  let disableChange = false;
  function changeInput(e) {
    if (disableChange) return;
    disableChange = true;
    adjustDates(e.target);
    disableChange = false;
  }

  let nodes = document.querySelectorAll("input[type=date]");
	for (var i = 0; i < nodes.length; i++) {
		nodes[i].onchange=changeInput;
	}

  document.querySelector("#noFPWD").onchange = toggleFPWD;
  document.querySelector("#nowebmaster").onchange = togglenowebmaster;

   // browser history status push
	 function onpushstate() {
     if (inOnPopState) return;
     let item = document.getElementById(config.id);
     let query = "";
     if (item !== null) {
       let date = item.momentDate;
       if (date !== undefined) {
         config.date = date.format("YYYY-MM-DD");
  		   query += item.id + "=" + date.format("YYYY-MM-DD");
       }
     }
     if (config.nowebmaster) {
      if (query.length > 1) query += "&";
      query+= "nowebmaster=true";
     }
     if (config.comments > 0) {
      if (query.length > 1) query += "&";
      query+= "comments="+config.comments;
     }
     if (config.shortname) {
      if (query.length > 1) query += "&";
      query+= "shortname="+config.shortname;
     } else if (config.noFPWD) {
      if (query.length > 1) query += "&";
      query+= "noFPWD=true";
     }
     if (config.debug) {
      if (query.length > 1) query += "&";
      query+= "debug=true";
     }
     if (query.length > 1) {
      query = "?" + query;
     }
     window.history.pushState(config, config.id, query);
	  	 trace("pushed " +window.location.href);
   }

   function updateShortname(shortname) {
    trace("New shortname " + shortname);
    if (shortname) {
       config.shortname = shortname;
       document.querySelector("#noFPWD").checked = false;
       removeFPWD();
     } else {
       config.shortname = undefined;
       document.querySelector("#noFPWD").checked = true;
       addFPWD();
     }
     onpushstate();
   }

   function findShortname(s) {
		if (s && s.length > 2) {
      let stext = document.getElementById("stext");
      fetch("https://api.w3.org/specifications/" + s).then(res => res.json())
			 .then(spec => {
				 if (spec.title === undefined) throw new Error(s + " wasn't found");
				 var latest = spec["_links"]["latest-version"];
				 var first = spec["_links"]["first-version"];
				 if (first === undefined) throw new Error(s + " doesn't have a first version");
				 return first;
			 }).then(first => {
				return fetch(first.href).then(res => res.json());
			}).then(spec => {
        stext.textContent = spec.status;
        updateShortname(s, spec);
      }).catch(err => {
        stext.textContent = err.message;
        updateShortname();
      });
    }
  }

  function shortname(e) {
    findShortname(e.target.value);
  }
  document.querySelector("#shortname").oninput = shortname;

   // browser back and forward buttons
   let inOnPopState = false;
   window.onpopstate = function (e) {
     if (!e.state) return;
     let input = document.getElementById(e.state.id);
     config.noFPWD = e.state.noFPWD;
     config.nowebmaster = e.state.nowebmaster;
     if (input !== null) {
       input = input.querySelector("input");
       input.value = e.state.date;
       inOnPopState = true;
       changeInput({ target: input });
       inOnPopState = false;
     }

    document.querySelector("#noFPWD").checked = config.noFPWD;
    document.querySelector("#nowebmaster").checked = config.nowebmaster;
  	trace("popped " +window.location.href);
   }

   function displayMoratoria() {
    let list = document.getElementById("moratoria-list");
    let today = moment();
    for (var i = 0; i < moratoria.length; i++) {
      let range = moratoria[i];
      if (today.isSameOrBefore(range[1])) {
        let li = document.createElement("li");
        li.textContent = "From " + moment(range[0]).format('MMMM Do, YYYY')
          + " to " + moment(range[1]).format('MMMM Do, YYYY')
          + " : " + range[2];
          list.appendChild(li);
      }
    }
   }

  // initialization

  function initialize() {
     // #lazyweb
	   function getJsonFromUrl() {
       let query = location.search.substr(1);
       let result = {};
       query.split("&").forEach(function(part) {
        let item = part.split("=");
        if (item[1] !== undefined) {
          result[item[0]] = decodeURIComponent(item[1]);
        }
       });
      return result;
    }
    let init  = getJsonFromUrl();

    let needsRefresh = false; // do we need to trigger onpushstate?

    if (init["debug"] !== undefined) {
      trace = _trace;
      config.debug = true;
      needsRefresh = true;
    }

    trace("init")
    if (init["nowebmaster"] === "true") {
      document.querySelector("#nowebmaster").checked = true;
      config.nowebmaster = true;
      needsRefresh = true;
    } else {
      document.querySelector("#nowebmaster").checked = false;
      config.nowebmaster = false;
    }
    if (init["comments"]) {
      let weeks = Number.parseInt(init["comments"]);
      if (weeks < 0 || Number.isNaN(weeks)) weeks = 0;
      document.querySelector("#comment_weeks").value = weeks;
      config.comments = weeks;
      modifyBaseDates();
      needsRefresh = true;
    }
    if (init["shortname"] && init["shortname"].length > 2) {
      document.querySelector("#shortname").value = init["shortname"];
      findShortname(init["shortname"]);
      needsRefresh = true;
    } else if (init["noFPWD"] === "true") {
        document.querySelector("#noFPWD").checked = true;
        removeFPWD();
        needsRefresh = true;
    } else {
      document.querySelector("#noFPWD").checked = false;
    }
    let foundARef = false; // limit to one date in the URL input
    for (var key in init) {
      if (!foundARef) {
	    	var item = document.getElementById(key);
      	if (item !== undefined && item !== null && item.nodeName === "LI") {
          let m = convertDate(init[key]);
          if (m.isValid()) {
            let input = item.querySelector("input");
            input.value = init[key];
            foundARef = true;
            changeInput({ target: input }); // triggers onpushstate
          } else {
            log("Invalid date in query parameters");
          }
        }
      }
    }
    if (!foundARef && needsRefresh) {
      onpushstate();
    }
    displayMoratoria();
  }

  fetch("moratoria.json").then(res => res.json())
    .then(data => { moratoria = data })
    .catch(err => console.log(err))
    .then(r => initialize());
})();

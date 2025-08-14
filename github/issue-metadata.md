---
title: Labels and Other Metadata for Issues and Pull Requests
toc: true
---

This page describes how to use GitHub [labels](#labels), [milestones](#milestones), and [projects](#projects) in a uniform way across W3C specifications.

## Labels {#labels}

[Labels](https://help.github.com/articles/creating-and-editing-labels-for-issues-and-pull-requests/) describe the kind of issue or specific work that's needed to advance an issue.

### Horizontal Reviews {#horizontal-reviews}

Those labels are there to facilitate horizontal reviews.

  <dl id="hr-labels">
    <dt data-label-group='security'>Security</dt>
    <dd>
      <p>
        Affects the <a href='https://www.w3.org/TR/security-privacy-questionnaire/'>degree of resistance</a> to, or protection from, harm of Web technologies.
      </p>
    </dd>
    <dt data-label-group='privacy'>Privacy</dt>
    <dd>
      <p>
        Affects the collection, <a href='https://www.w3.org/TR/fingerprinting-guidance/'>processing</a> and  <a href='https://www.w3.org/TR/security-privacy-questionnaire/'>publication of personal data</a> in Web technologies.
      </p>
    </dd>
    <dt data-label-group='a11y'>Accessibility</dt>
    <dd>
      <p>Affects the design of Web technologies for people with disabilities.</p>
    </dd>
    <dt data-label-group='i18n'>Internationalization</dt>
    <dd>
      <p>Affects the <a href='https://www.w3.org/International/review-request'>adaptation of Web technologies to different languages or regional differences</a>.</p>
    </dd>
    <dt data-label-group='tag'>Architecture</dt>
    <dd>Affects the <a href='https://www.w3.org/TR/design-principles/'>underlying principles</a> that should be adhered to by all Web technologies.</dd>
    <dt>Performance</dt>
    <dd>Affects the download and display speed of Web technologies.</dd>
    <dt>device independence</dt>
    <dd>Affects the ability of Web technologies to function on a wide variety of devices.</dd>
  </dl>

### Testing and Implementations {#testing}

Those labels are meant to track testing and implementation status.

  <dl id='testing-labels' class='labels'>
    <dt data-label="needs tests"></dt>
    <dt data-label="needs implementation"></dt>
    <dt data-label="test:missing-coverage"></dt>
  </dl>

### Specifications {#specifications}

  <dl id='specifications-labels' class='labels'>
    <dt data-label="editorial"></dt>
    <dt data-label="substantive"></dt>
    <dt data-label="bug"></dt>
    <dt data-label="enhancement"></dt>
    <dt data-label="help wanted"></dt>
    <dt data-label="Closed Rejected as Invalid"></dt>
    <dt data-label="Closed as Duplicate"></dt>
    <dt data-label="Closed Rejected as Wontfix"></dt>
    <dt data-label="w3c"></dt>
    <dt data-label="Errata"></dt>
    <dt data-label="ErratumRaised"></dt>
  </dl>

## Milestones {#milestones}

[Milestones](https://help.github.com/articles/tracking-the-progress-of-your-work-with-milestones/) describe the scheduling of bug fixes and changes. Often an issue is labeled with a particular milestone as a way to postpone work on it until after work needed for an earlier milestone.

experiment
: Resolve before experimenting with the new feature on general users.

migrate
: Resolve before [migrating](https://wicg.github.io/admin/intent-to-migrate.html) the spec from the [WICG](https://www.w3.org/community/wicg/) to a Working Group.

FPWD
: Resolve before creating a [First Public Working Draft](https://www.w3.org/policies/process/#first-wd).

CR
: Resolve before advancing the spec to [Candidate Recommendation](https://www.w3.org/policies/process/#candidate-rec).

REC
: Resolve before advancing the spec to [Recommendation](https://www.w3.org/policies/process/#rec-publication).

level-2
: Work on these issues after the level-1 spec is complete.

future-work
: Work on these issues at an unspecified time in the future.

## Wide Review {#wide-review}

1- The WG processes the comment, and provides a resolution.

WR-open
: Comment received, not yet processed by the WG

WR-pending
: Discussed but pending WG resolution

WR-resolved
: WG resolution, (approved by WG)

WR-spec-updated
: WG resolution and spec updated

WR-resolved-partial
: Partial WG resolution (partially approved by WG)

WR-spec-updated-partial
: Partial WG resolution and spec updated

WR-rejected
: Comment Rejected by WG

For each comment, please fill a "type" [with above labels](#type)

2- Once the WG has processed all comments, the next steps are to get approval from the commenter

WR-response-drafted
: Response to commenter drafted by WG

WR-response-sent
: Response send to commenter

WR-commenter-rejected
: Response rejected by commenter

WR-commenter-agreed
: Response agreed by commenter

WR-commenter-agreed-partial
: Response partially agreed by commenter (needs more discussion)

WR-commenter-no-response
: No Response received from commenter within the stated period

For more information please refer to the [TTWG wiki Wide Review page](https://www.w3.org/wiki/TimedText/TTML2_Wide_Review).

Note that groups may work on a level-2 spec concurrently with pushing the level-1 spec through the Recommendation process, so repositories may need milestones like "level-2-CR".

## Projects {#projects}

[Projects](https://help.github.com/articles/tracking-the-progress-of-your-work-with-project-boards/) describe separate features within a larger specification. Usually, prefer to create a new repository to track greenfield feature development, and take it through the [incubation process](https://www.w3.org/blog/2015/wicg/) instead of using a project within an existing spec repository. Even when used, project names are generally not shared between specifications, so we don't list samples here.

<script>
// Expects an RRGGBB hex color without the '#'.
function isDark(rgbColor) {
  const r = parseInt(rgbColor.slice(0,2), 16);
  const g = parseInt(rgbColor.slice(2,4), 16);
  const b = parseInt(rgbColor.slice(4,6), 16);
  // The threshold value is where the contrast against white (luminance 1) is the same as the
  // contrast against black (luminance 0): 1.05/(threshold+.05) == (threshold+.05)/.05.
  return luminance(r,g,b) < 0.18;
}
// From https://www.w3.org/TR/WCAG21/#dfn-relative-luminance.
function linearize(component) {
  const fracComponent = component/255;
  if (fracComponent < 0.04045) return fracComponent/12.92;
  return Math.pow((fracComponent+0.055)/1.055, 2.4);
}
function luminance(r, g, b) {
  return .2126*linearize(r) + .7152*linearize(g) + .0722*linearize(b);
}

// Populate label descriptions.
(async function() {
  /** @type {Array} */
  const labels = await (await fetch("https://w3c.github.io/common-labels.json")).json();

  // Populate simple labels.
  for (const dt of document.querySelectorAll("#testing-labels dt, #specifications-labels dt")) {
    const label = labels.find(l=>l.name === dt.dataset.label);
    if (!label) continue;
    dt.id = dt.dataset.label.replaceAll(/\W+/g, '-').toLowerCase();
    dt.style.backgroundColor = `#${label.color}`;
    dt.classList.add('tag');
    dt.classList.toggle('darkBg', isDark(label.color));
    dt.textContent = label.name;
    const dd = document.createElement('dd');
    if (label.longdesc) {
      dd.innerHTML = label.longdesc;
    } else {
      dd.textContent = label.description;
    }
    dt.insertAdjacentElement('afterend', dd);
  }

  // Populate horizontal reviews.
  for (const dt of document.querySelectorAll("#hr-labels dt")) {
    let labelGroup = dt.dataset.labelGroup;
    if (labelGroup) {
      let dd = dt.nextElementSibling;
      let entries = "<dl class='labels'>";
      labels.forEach(label => {
        if (label.name.indexOf(labelGroup) === 0) {
          let sublabel = label.name.substring(labelGroup.length+1);
          entries+= `<dt id='${label.name}' class='tag' style='background-color: #${label.color}'>
            <a href='https://github.com/${label.repo}/issues/?q=label%3A${sublabel}'>${label.name}</a></dt>
           <dd><p>${label.longdesc}</p><p>Color: <code>#${label.color}</code></p></dd>`;
        }
      })
      let div = document.createElement("div");
      div.innerHTML = entries;
      dd.appendChild(div);
    }
  }
})();
</script>

<style>
  .darkBg { color: white; }
  dl.labels dt {
    border-radius: 1.5rem;
    padding: 0.15rem 0.8rem;
  }
</style>

---
title: Zakim IRC Bot
toc: yes
---

## General Description {#general}

The Zakim IRC "bot" is a Semantic Web agent ("swagent") that helps facilitate meetings using IRC.

It is generally available on W3C's IRC server, under the "Zakim" nickname.

In the following command descriptions, optional words in commands are indicated in square brackets. "`please`" can be abbreviated to "`pls`" if you wish to be polite yet still save keystrokes. ("`please`" is also accepted at the end of all commands.)

## Bringing Zakim into your meeting channel {#invite}

The command:

`/invite Zakim <channel>`

will bring Zakim on to your IRC channel.

```irc
[16:41] <Alan> /invite zakim &test
[16:41] *** Zakim (zakim@irc.w3.org) has joined the channel
```

Some irc clients let you omit the channel name and will fill in the name of current channel. This is a feature of the irc client, not of Zakim.

You might also want [RRSAgent](https://github.com/w3c/rrsagent) in your meeting channel to keep a record of the meeting in W3C Web space. To start logging the channel, invite the RRSAgent bot as follows:

`/invite rrsagent <channel>`

You can find the URL for the log being written by RRSAgent by typing the command:

`rrsagent, bookmark`

## Talking to Zakim {#addressing}

Once Zakim is on your IRC channel, all commands to Zakim begin with

`Zakim,`

Zakim's commands are not case sensitive, but, in general, must be grammatically correct.

Zakim will respond to normal irc lines and to `ACTION` lines (typically entered with the '`/me`' command in many irc clients). The '`/me`' form is especially recommended for avoiding clutter in [RRSAgent](https://github.com/w3c/rrsagent) logs; interactions that serve no useful purpose in the permanent irc record can be prefixed with '`/me`'. This typically includes '`q+`' and '`ack`' commands; e.g., '`q+`' will be logged by RRSAgent whereas '`/me q+`' will not (see [RRSAgent log recording](https://github.com/w3c/rrsagent)). Zakim will generally mimic the same usage in the reply. For the commands such as '`agenda?`' to which Zakim will respond without being directly addressed, Zakim responds directly if he is addressed and in third-person ('`/me`') form if he was not addressed.

## Identifying your particular teleconference {#info}

### Start a meeting {#startmeeting}

- `start [the | this] meeting`
- `prepare [the | this] meeting`

Invite [RRSAgent](https://github.com/w3c/rrsagent) to the current channel, provide the expected access control (visibility) of RRSAgent's records and a title for the meeting. Additional instructions may be pre-stored and entered into the irc log.

The two forms of this command do the same thing; some people set things up in the channel well before the meeting is scheduled to start and the '`prepare`' synonym reduces confusion for others who are already on the channel.

### End a meeting {#endmeeting}

- `end [the | this] meeting`

Displays a final list of those who were recognized as being present during the meeting, requests [RRSAgent](https://github.com/w3c/rrsagent) to create the formatted meeting record, and then departs (see '`bye`').

### Provide a description for the teleconference on the current IRC channel {#description}

- `this [conference] is <description>`

Stores `<description>` for later query.

Teleconference participants appreciate having a simple way to retrieve a reminder of the teleconference coordinates; what number to dial or URL to access, what conference code to use, etc. This command saves such information for later query.

```irc
[16:43] <Alan> zakim, this is WebEx 640 999 321
[16:43] <Zakim> ok, Alan
```

### Request the full name of the conference that is associated with the current IRC channel {#describe}

- `what conference is this?`
- `what is the conference code?`
- `what is the passcode?`
- `what's the conference code?`
- `what's the code?`

Returns the conference description that was previously entered.

### Saving a conference description for future meetings {#savedescription}

`save this conference description`

If the conference description will apply to future teleconferences on this channel you may wish that Zakim save the information more permanently. Zakim does not actually know when your teleconference has started or ended, however. Descriptions previously entered will not be saved when Zakim restarts unless you use this command.

## Attendance reports {#attendance}

### Announcing your presence {#present}

`present+ [<name>]`

Informs Zakim and all others present on the irc channel that you have joined the teleconference. Recommended practice is to enter this after you confirm you hear audio from teleconference or when you enter the meeting room to which the conference is connected.

Zakim previously was able to announce the arrival of new teleconference participants automatically. This is no longer the case; you must now tell Zakim that you have joined the teleconference.

If you omit `<name>` Zakim will use your irc nick.

`present- [<name>]`

Informs Zakim and all others present on the irc channel that you have left the teleconference.

Good practice is to inform others when you leave or drop off the teleconference or leave the meeting room.

### Produce a report of the current participants in your conference {#whoshere}

- `who is here?`
- `who's here?`
- `who is on the phone?`
- `who is on the call?`
- `who's on the phone?`
- `who's on the call?`

```irc
[17:06] <Alan> zakim, who's here?
[17:06] <Zakim> Present: Alan, Dan, gerald
```

### Produce a report of the names of all participants {#listparticipants}

- `list attendees`
- `list participants`

The report will show participants who are currently in your conference or who had been in the conference earlier and have since departed.

### Dismissing Zakim {#dismiss}

- `[please] excuse us`
- `bye`
- `[please] part`
- `[please] leave`

All disconnect the Zakim bot from your IRC channel.

```irc
[17:19] <Alan> zakim, excuse us
[17:19] *** Zakim (zakim@irc.w3.org) has left the channel
```

### Help {#help}

- `[please] help`

Displays an abbreviated list of some major commands. Due to "flood control" in IRC, this may be slow.

- `where is [+]<dialing code>?`

Looks up a telephone number prefix in a North American area code directory or in an international country code directory. The '`+`' may be omitted only if the dialing code is exactly 3 digits; this will be interpreted as a request to lookup a North American area code. Hyphens and periods may be used in the dialing code and will be ignored.

### Floor Control {#speakerqueue}

Zakim will help track a queue of participants wishing to speak. The commands in this set need not be directly addressed to Zakim; they will be recognized when addressed to no one in particular and also when received as third person ('`/me`') messages.

### Add name(s) to the queue of individuals wishing to speak {#handup}

- `queue+ [<name> [, <name> ...]]`
- `q+ [<name>[, <name> ...]]`
- `[<name>] raises hand`
- `sees <name> [, <name>...] raise hand[s]`
- `sees <name>'s [, <name>'s...] hand[s] [up]`

If `<name>` is omitted or specified as '`me`', the irc nick issuing the request is used. The last three forms are intended particularly for '`/me`' messages.

### Add name to the queue of individuals wishing to speak {#qplus}

- `queue+ [<name>] [also] to <note>`
- `q+ [<name>] [also] to <note>`

If `<name>` is omitted or specified as '`me`', the irc nick issuing the request is used. The `<note>` is a comment to indicate why that person wishes to speak; the word '`to`' may also be written as '`:`'. If the same name is added to the queue multiple times there may be multiple notes. The word '`also`' can be given in such cases however it is not necessary.

### Add name to the speaker queue to react to the current speaker {#qqplus}

- `qq+ [<name>] [also] to <note>`

The mnemonic is "quick queue+". This request adds to the front of the speaker queue to react to something the current speaker just said. This should be used with discretion and is therefore considered an experimental feature.

If `<name>` is omitted or specified as '`me`', the irc nick issuing the request is used. The `<note>` is a comment to indicate why that person wishes to speak; the word '`to`' may also be written as '`:`'. If the same name is added to the queue multiple times there may be multiple notes. The word '`also`' can be given in such cases however it is not necessary.

### Remove name(s) from the queue of individuals wishing to speak {#qminus}

- `queue- [<name>[, <name> ...]]`
- `q- [<name>[, <name> ...]]`
- `[<name>] lowers hand`
- `sees <name> [, <name>...] lower hand[s]`
- `sees <name>'s [, <name>'s...] hand[s] down`

If `<name>` is omitted or specified as '`me`', the irc nick issuing the request is used. If a `<name>` is given explicitly and if it matches the start of exactly one entry in the queue then it is interpreted as if that full entry were entered; that is, unambiguous abbreviations are recognized. Abbreviations are not recognized if the name is omitted or '`me`' is used; i.e. when the irc nick issuing the request is assumed. The last three forms are intended particularly for '`/me`' messages.

### Move the speaker to the end of the queue {#qlater}

- `q- later`

Moves the irc nick issuing the request to the end of the speaker queue.

### Add the irc nick issuing the request to the end of the speaker queue as a separate instance {#qpluslater}

- `q+ later [to <note>]`

Use this command if you wish to speak more than once rather than presenting all your comments at one time.

### Place name(s) on the queue of individuals wishing to speak {#queueequals}

- `queue= [<name>[, <name> ...]]`
- `q= <name>[, <name> ...]`

or replacing any names already on the queue. If '`queue`' is spelled out and no names are specified then the queue is cleared.

### Display the queue of individuals wishing to speak {#q}

- `[who is on] queue?`
- `[who's on] queue?`
- `q?`

An ordered list of the names of those waiting to speak is shown.

'`queue`' can also be abbreviated to just '`q`' in the first two forms.

### Display the speaker queue with notes (verbose queue) {#vq}

- `[please show the] full queue`
- `[please show the] verbose queue`
- `vqueue?`
- `vq?`
- `qv?`

'`queue`' can also be abbreviated to just '`q`' in the first two forms.

An ordered list of the names of those waiting to speak is shown along with any notes they have entered about why they have asked to speak.

### Grant <name> permission to speak {#ack}

- `[chair] recognize[s] <name>`
- `[chair] ack[s] <name>`

If `<name>` matches the start of exactly one name on the queue of individuals wishing to speak (see '`queue+`' above) then the corresponding name is removed from the queue. However, `<name>` need not be on the speaker queue, nor is the chair obligated to acknowledge speakers in any particular order.

### Grant the first person on the speaker queue permission to speak {#acknext}

- `[chair] recognize[s] next [speaker]`
- `[chair] ack[s] next [speaker]`

The name will be displayed along with the remaining speaker queue.

### Close the queue {#closequeue}

- `[please] close the queue`

Causes subsequent '`queue+`' requests to leave the speaker queue unchanged.

### Reopen the queue {#openqueue}

- `[please] [re]open the queue`

Causes subsequent '`queue+`' requests to be added to the speaker queue. This is the default state when Zakim is invited to a channel. The speaker queue will also be reopened whenever a new agendum is taken up.

### Giving the Last Word {#lastword}

- `[please] give <name> the last word`
- `[please] <name> has the last word`

Grants `<name>` permission to speak, clears the remainder of the speaker queue, and closes the speaker queue. Subsequent '`queue+`' requests will leave the speaker queue unchanged.

### Timer for speakers {#queuetimer}

- `[please] allow [each speaker] <number> minutes|seconds`
- `[please] allow [speakers] <number> minutes|seconds`
- `[please] time [each speaker] [at] <number> minutes|seconds`
- `[please] time [speakers] [at] <number> minutes|seconds`

Causes the '`ack`' command to start a timer. Zakim will issue reminders as the speaker approaches the end of the alloted speaking time. The keywords '`minutes`' and '`seconds`' can be abbreviated to '`min`', '`m`', '`sec`', or '`s`' respectively. '`give`' may be used as a synonym for '`allow`'.

### Stop timer {#stoptimer}

- `[please] stop timing [speakers]`

Causes Zakim to cease issuing reminders as speaker are acknowledged and approach the end of a previously established speaking time.

### Stop tracking Queue {#stopqueue}

- `[please] ignore [the] queue`

Requests that the Zakim bot stop tracking speaker queue changes. This request must be addressed specifically to Zakim. This is not the same as closing the queue; after Zakim has been told to ignore the queue, it will give no feedback to '`queue+`', '`queue-`', and recognize requests. If the queue is closed Zakim will continue to give feedback unless it has also been told to ignore the queue.

### Start Tracking Queue {#startqueue}

- `[please] track [the] queue`

Requests that the Zakim bot begin tracking speaker queue changes. This is the default state when Zakim is invited to a channel. This request must be addressed specifically to Zakim. Note that the speaker queue may be opened or closed independently of whether Zakim is tracking the queue.

The speaker queue will be cleared at the end of the conference assigned to the irc channel.

## Agenda Tracking {#agenda}

Zakim will help track agenda items requested while a meeting is in progress. Like floor control, the commands in this set need not be directly addressed to Zakim; they will be recognized when addressed to no one in particular and also when received as third person ('`/me`') messages.

### Add an agenda item {#agendaplus}

- `agenda+ <text>`
- `agenda+ <text> '['<proposer>']'`

Adds an item described by `<text>` to the agenda, assigning it the next sequential number. The irc nick of the person who entered the request is recorded. In the second form, the brackets '`[ ]`' are part of the command (the quotes are not) and indicate that the proposer is someone other than the person who entered the request. The word '`agenda`' may also be entered as '`agendum`'.

```irc
[12:10] <RalphS> agenda+ minute-taker
[12:10] * Zakim notes agendum 1 added
[12:11] <RalphS> agenda+ chair for next meeting [Alan]
[12:11] * Zakim notes agendum 2 added
[12:11] <RalphS> zakim, agenda?
[12:11] <Zakim> I see 2 items remaining on the agenda:
[12:11] <Zakim> 1. minute-taker [from RalphS]
[12:11] <Zakim> 2. chair for next meeting [from Alan via RalphS]
```

### Display the agenda {#displayagenda}

- `what is [on] [the] agenda?`
- `what's [on] [the] agenda?`
- `list [the] agenda`
- `show [the] agenda`
- `agenda?`

Displays the agenda.

### Modify an agenda item {#modifyitem}

- `agenda <number> = <newtext>`
- `agendum <number> = <newtext>`
- `item <number> = <newtext>`

Replaces the text of item `<number>` with `<newtext>`.

### Drop an item from the agenda {#dropitem}

- `agenda- <number>`
- `item- <number>`
- `delete agendum <number>`
- `drop agendum <number>`
- `forget agendum <number>`
- `remove agendum <number>`
- `remove item <number>`

Removes item `<number>` from the agenda. *Note the '`-`' (hyphen) between the word '`agenda`' and the number*. In the second form the word '`agendum`' may also be mis-written as '`agenda`'.

### Open the discussion about an agenda item {#takeup}

- `take up agendum <number|pattern>`
- `open agendum <number|pattern>`
- `move to agendum <number|pattern>`

Indicates that agenda item `<number>` is open for discussion. This gives Zakim the information needed to respond to subsequent commands. The word '`agendum`' may be mis-written as '`agenda`' or as '`item`'. A text pattern (regular expression) may be given instead of a number if the pattern matches exactly one agendum.

### Move to the next agenda item {#nextitem}

- `[take up] next agendum`
- `[open] next agendum`
- `move to next agendum`

Indicates that the next non-closed agenda item in the list specified by '`agenda order`' or the lowest-numbered non-closed agenda item is open for discussion. If an agendum is currently open it will be closed unless it has been open for less than a minute. (This reduces confusion if several people simultaneously instruct Zakim-bot to move to the next agendum.) The word '`agendum`' may be mis-written as '`agenda`' or as '`item`'. The third form, '`move to ...`', causes Zakim bot to display the next agendum for the record, whether or not you addressed the bot directly. If the current agendum has been open for less than a minute use '`close this agendum`' explicitly to permit moving to the next agendum.

```irc
[15:57] <RalphS> zakim, what is on the agenda?
[15:57] <Zakim> I see 3 items remaining on the agenda:
[15:57] <Zakim> 1. pick scribe [from RalphS]
[15:57] <Zakim> 2. review previous meeting minutes [from RalphS]
[15:57] <Zakim> 3. schedule next meeting [from RalphS]
[15:57] <RalphS> zakim, take up next agendum
[15:57] <Zakim> agendum 1. "pick scribe" taken up [from RalphS]
[15:57] <RalphS> next agendum
[15:57] * Zakim thinks agendum 1 was just opened
[15:57] <RalphS> close this agendum
[15:57] * Zakim notes agendum 1 closed
[15:57] * Zakim sees 2 items remaining on the agenda; the next one is
[15:57] * Zakim 2. review previous meeting minutes [from RalphS]
[15:57] <RalphS> next agendum
[15:57] * Zakim thinks agendum 2. "review previous meeting minutes" taken up [from RalphS]
[16:10] <RalphS> move to next agendum
[16:10] <Zakim> agendum 3. "schedule next meeting" taken up [from RalphS]
[16:11] <RalphS> zakim, what is on the agenda?
[16:11] <Zakim> I see 1 item remaining on the agenda:
[16:11] <Zakim> 3. schedule next meeting [from RalphS]
```

### Create a reminder {#timeitem}

- `give this [agenda] item <n> minutes`
- `allow this [agenda] item <n> minutes`
- `allow this agendum <n> minutes`

Schedules a reminder for `<n>` minutes in the future. The reminder will be canceled if the current agendum has been closed or a new agendum has been taken up.

### Reorder the agenda {#agendaorder}

- `[the] agenda order [is] a [, b]... [, m-[n]]...`

Indicates the expected order in which the agenda items will be taken up for discussion. Agenda items are specified by number. A list of numbers separated by spaces or commas indicates individual agenda items. Two numbers separated by hyphen indicates a range of items. A single number followed by a hyphen followed by a space or comma indicates a range of items starting with the first number and running through the end of the list. Any items not included in the list will be assumed to be added to the end of the list in numerical order. The items need not actually be discussed in the indicated order.

```irc
[23:19] <RalphS> agenda+ first item
[23:19] * Zakim notes agendum 1 added
[23:19] <RalphS> agenda+ second item
[23:19] * Zakim notes agendum 2 added
[23:19] <RalphS> agenda+ third item
[23:19] * Zakim notes agendum 3 added
[23:19] <RalphS> what's on the agenda?
[23:19] * Zakim sees 3 items remaining on the agenda:
[23:19] * Zakim 1. first item [from RalphS]
[23:19] * Zakim 2. second item [from RalphS]
[23:19] * Zakim 3. third item [from RalphS]
[23:19] <RalphS> agenda order is 3,2
[23:19] * Zakim notes agenda order
[23:19] <RalphS> Zakim, agenda?
[23:19] <Zakim> I see 3 items remaining on the agenda:
[23:19] <Zakim> 3. third item [from RalphS]
[23:19] <Zakim> 2. second item [from RalphS]
[23:19] <Zakim> 1. first item [from RalphS]
[23:20] <RalphS> zakim, next agendum
[23:20] <Zakim> agendum 3. "third item" taken up [from RalphS]
```

### What is the current agenda item? {#currentitem}

- `what agendum [is open]?`
- `what agendum is this?`
- `what agendum are we on?`
- `current agendum?`

Requests feedback about the current open agenda item. The word '`agendum`' may be mis-written as '`agenda`' or as '`item`'. The word '`which`' may be used in place of '`what`'.

### Close an agenda item {#closeitem}

- `close agendum <number>`

Marks item `<number>` as needing no further discussion. The next remaining item (if any) will be displayed. The word '`agendum`' may be mis-written as '`agenda`' or as '`item`'.

- `close this agendum`

Marks the current agenda item as needing no further discussion. The next remaining item (if any) will be displayed. The word '`agendum`' may be mis-written as '`agenda`' or as '`item`'.

```irc
[23:28] <RalphS> zakim, close this agendum
[23:28] <Zakim> agendum 3 closed
[23:28] <Zakim> I see 2 items remaining on the agenda; the next one is
[23:28] <Zakim> 2. second item [from RalphS]
```

If the specified agendum is currently open for discussion and the speaker queue is not empty Zakim will report this fact and decline to close the item. If the meeting facilitator wishes to move on despite this (e.g. perhaps knowing that a speaker is really queued to speak to a later topic), prefix the request with the word '`really`':

- `really close this agendum`
- `really close agendum <number>`

### Defer an item on the agenda {#skipitem}

- `skip agendum <number>`
- `skip item <number>`
- `skip this agendum`
- `skip this item`

Marks item `<number>` or the currently open item as "skipped" and lists it at the end of the agenda after any non-closed items. Items may be skipped even after they have been taken up; e.g. by '`open next agendum`'.

### Clear the agenda {#clearagenda}

- `[please] clear [the] agenda`

Removes all items from the agenda.

### Read agenda from another source {#readagenda}

- `[please] read agenda from <uri>`

Takes `<uri>` as a file of RDF/XML and queries it for agenda items. Any agenda items found will be added to the current agenda. See [description of agenda format](https://www.w3.org/2004/02/agenda) for details on the RDF graph that is expected. Paul Downey wrote a [tool for extracting RDF/XML agendas from text messages](https://blog.whatfettle.com/2006/07/04/rdf-agenda-scraper/); you can append the URI of your text message to Paul's [RDFAgenda](https://whatfettle.com/2006/07/RDFAgenda/) URI to construct a URI for the RDF/XML form of a suitably-formatted text agenda.

### Save agenda to W3C Web site {#saveagenda}

- `[please] save agenda [team-access|member-access|world-access]`

Writes the current agenda to the Web in RDF/XML form as `https://www.w3.org/yyyy/mm/dd-<channel>-agenda` where '`yyyy`' is the current year, '`mm`' is the current month, and '`dd`' is the current day. If an access option is specified, the URI will be given the corresponding visibility. The suffix `'-access`' may also be written as '`-visible`' or may be omitted entirely.

### Program a reminder alarm {#reminder}

- `[please] ping [me|us] in <interval> [minutes|hours]`
- `[please] remind [me|us] in <interval> [minutes|hours] [about|to|that <text>]`

Schedules a notice for `<interval>` minutes or hours in the future. `<text>` will be displayed at that time if it is specified. This request must be addressed specifically to Zakim. The word '`minutes`' may be abbreviated to '`minute`', '`mins`', '`min`', '`m`', or may be omitted. The word '`hours`' may be abbreviated to '`hour`' or '`h`'. There is no significant difference between '`ping`' and '`remind`', between '`me`' and '`us`', or between '`about`', '`to`', and '`that`'.

### Stop tracking agenda changes {#ignoreagenda}

- `[please] ignore [the] agenda`

Requests that the Zakim bot stop tracking agenda changes. This request must be addressed specifically to Zakim.

### Start tracking agenda changes {#trackagenda}

- `[please] track [the] agenda`

Requests that the Zakim bot begin tracking agenda changes. This request must be addressed specifically to Zakim. This is the default state when Zakim is invited to a channel.

The agenda will be cleared at the end of the conference assigned to the irc channel.

### Minute-Taking (Scribe) {#pickscribe}

Zakim will help choose a scribe (minute-taker) from the current participants in the meeting.
{:#pickvictim}

- `[please] propose a scribe`
- `[please] pick a scribe`
- `[please] nominate a scribe`
- `[please] choose a scribe`
- `[please] select a scribe`
- `... other than <names>`
- `... except <names>`

Randomly selects a minute-taker from the current participants. The word '`victim`' may also be used in place of '`scribe`'. You can exclude names from the random selection by adding '`other than`' or '`except`' followed by one or more comma-separated names. This is most useful when there is a short list of participants and repeated requests select an unavailable person.

## Question Tracking {#questions}

Zakim will help track a list of questions requested during a meeting. Like floor control and agenda management, the commands in this set need not be directly addressed to Zakim; they will be recognized when addressed to no one in particular and also when received as third person ('`/me`') messages.

### Add a question {#questionplus}

- `question+ <text>`

Adds a question described by `<text>` to a list of questions, assigning it the next sequential number. Questions may be supported by other participants. It is recommended that questions start with one of who, what, when, where, why, or how. The keyword '`question`' may be abbreviated to '`quest`' or '`ques`'.

```irc
[17:13] <Ralph> question+ When is this needed?
[17:13] * Zakim notes question 1 added
[17:13] <Ralph> question+ How will this work?
[17:13] * Zakim notes question 2 added
```

### Display the list of questions {#listquestions}

- `list [the] questions`
- `show [the] questions`
- `questions?`
- `list all [the] questions`
- `show all [the] questions`

Displays the questions and the number of supporters of each question. The first three forms are equivalent and only display questions that have not been dropped or closed.

```irc
[17:13] <Ralph> list questions
[17:13] * Zakim sees 2 questions remaining:
[17:13] * Zakim Q1: When is this needed? (1 supporter)
[17:13] * Zakim Q2: How will this work? (1 supporter)
```

### Support a question {#supportquestion}

- `question <number>++`
- `question++ <number>`

Indicates that you are interested in the answer to a question. Questions will be ordered by the number of supporters. The keyword '`question`' may be abbreviated to '`quest`' or '`ques`'. A single '`+`' is recognized, though technically imprecise.

```irc
[17:17] <OtherPerson> question 2++
[17:17] * Zakim ok, OtherPerson
[17:17] <OtherPerson> questions?
[17:17] * Zakim sees 2 questions remaining:
[17:17] * Zakim Q2: How will this work? (2 supporters)
[17:17] * Zakim Q1: When is this needed? (1 supporter)
```

### Cancel support of a question {#cancelquestionsupport}

- `question <number>--`
- `question-- <number>`

Indicates that you are no longer interested in the answer to a question. The keyword '`question`' may be abbreviated to '`quest`' or '`ques`'. A single '`-`' is recognized, though technically imprecise.

```irc
[17:18] <OtherPerson> question 2--
[17:18] * Zakim ok, OtherPerson
[17:18] <OtherPerson> questions?
[17:18] * Zakim sees 2 questions remaining:
[17:18] * Zakim Q1: When is this needed? (1 supporter)
[17:18] * Zakim Q2: How will this work? (1 supporter)
```

### Drop or close a question {#dropquestion}

- `drop question <number>`
- `close question <number>`

Drops (removes) a question from the list of questions. The two forms are equivalent. The keyword '`question`' may be abbreviated to '`quest`' or '`ques`'.

```irc
[17:19] <Ralph> drop question 1
[17:19] * Zakim notes question 1, When is this needed?, dropped
[17:19] <Ralph> questions?
[17:19] * Zakim sees 1 question remaining:
[17:19] * Zakim Q2: How will this work? (1 supporter)
[17:20] <Ralph> list all questions
[17:20] * Zakim sees 2 questions:
[17:20] * Zakim Q1: When is this needed? (1 supporter) - dropped
[17:20] * Zakim Q2: How will this work? (1 supporter)
```

### Clear the list of questions {#clearquestions}

- `[please] clear [the] questions`

Clears (erases) all questions from the list of questions.

```irc
[17:50] <Ralph> clear the questions
[17:50] * Zakim notes questions cleared
[17:50] <Ralph> questions?
[17:50] * Zakim sees no questions
```

## Change History {#changes}

### 2021-01

Added question management. Added `other than` support for `pick a scribe`. Fixed the bug that clearing the agenda failed to reset all agenda state.

### 2020-04

`prepare meeting` synonym for `start meeting`, experimental `qq+` added.

### 2019-12

`verbose queue?`, `start meeting`, and `end meeting` added.

### 2015-07

W3C decommissioned the bridge hardware that provided many additional features of Zakim, including automatic announcement of caller arrival and departure, muting and unmuting callers, and teleconference schedule lookup. Many commands associated with control of particants' phone connections have been disabled. There is no longer a direct connection between Zakim and a particular teleconference system.

### 2006-12

`Skip agendum <n>` and `skip this agendum` added. `Delete` and `forget` added as synonyms for `drop` in `drop agendum <n>`.

Decline to close an agendum unless the speaker queue is empty or `really` is part of the close request.

`Take up item <pattern>` had been case sensitive and no longer is.

Zakim bot leaves a channel after a long period of inactivity (nothing for Zakim to do). Previously only a queued reminder would keep Zakim from departing. Non-closed, non-skipped agenda items will now also keep Zakim on the channel indefinitely.

Other improvements and bug fixes that may only be noticed by a few.

## Acknowledgements {#acknowledgements}

The first draft of this tutorial page was written in December 2001 by Alan Kotok with help from Ralph Swick. Yves Lafon gave it a good start with a Unix-style [man page](https://www.w3.org/2001/11/zakim.html). Karl Dubost restyled it to match the W3C participants [Guidebook](../) style in July 2006.

The Zakim IRC bot was written by Ralph Swick.

The development of the Zakim IRC bot was supported in part by funding from US Defense Advanced Research Projects Agency (DARPA) and Air Force Research Laboratory, Air Force Materiel Command, USAF, under agreement number F30602-00-2-0593, "Semantic Web Development".

The Zakim teleconference bridge was a customized [Compunetix](https://www.compunetix.com) Contex Conferencing system. Thanks to Compunetix for providing technical details that enabled the original development of W3C's Zakim tools.

### Why is this called "Zakim"? {#name}

The World Wide Web Consortium ([W3C](https://www.w3.org/)) conducts a lot of its technical design discussions using the Web, e-mail, and teleconferences. We use so much teleconferencing that we have our own in-house teleconference bridges, housed at [MIT](https://web.mit.edu/). When we were choosing names for the systems someone proposed that we adopt the names of the vehicle bridges across the nearby [Charles River](https://www.charlesriverconservancy.org/crb/crb.html). So in 1998 we had our own "Longfellow" and "Tobin" conference bridges. When we made a major upgrade of our teleconference systems in 2001 to a new generation of all-digital bridge of course we were immediately attracted to the name "Zakim", in honor both of human rights advocate [Lenny Zakim](https://en.wikipedia.org/wiki/Leonard_P._Zakim) who gave voice to the people and the [Zakim bridge](https://leonardpzakimbunkerhillbridge.org/) across the Charles. In 2015 when the W3C-owned bridge was decommissioned we retained the name of this bot to not forget the past.

<style>
/**
 * Do not display TOC entries for secondary headings (headings lower than h2)
 */
ul#toc ul {
  display: none;
}
</style>

---
title: RRSAgent IRC Bot
toc: yes
---

## General Description {#general}

RRSAgent is a helpful bot for recording an IRC session. All text sent to the channel by any user is logged except '`/me`' text and text sent with [logging explicitly turned off](#logoff).

In the command descriptions below, optional words in commands are indicated in square brackets. RRSAgent's commands are not case sensitive, but, in general, must be grammatically correct. "`please`" can be abbreviated to "`pls`" if you wish to be polite yet still save keystrokes.

## Inviting and Dismissing RRSAgent {#inviting}

To use RRSAgent, you must first invite it to your IRC session. When you're finished, you must dismiss RRSAgent from the channel.

- `/invite RRSAgent <channel>`

Brings RRSAgent on to your IRC channel. The log will appear in `https://www.w3.org/yyyy/mm/dd-<channel>-irc` where '`yyyy`' is the current year, '`mm`' is the current month, and '`dd`' is the current day. Three variants of the log are written; `.html` contains XHTML, `.rdf` contains RDF, and `.txt` contains plain text. *Do not* edit these logs if you expect RRSAgent to continue to write to them. (Your CVS commit will cause RRSAgent's additions to cease to appear on the Web. If you're very lucky, they may not actually be lost. But they're not trivial to recover.)

Some irc clients let you omit the channel name and will fill in the name of current channel. This is a feature of the irc client, not of RRSAgent.

Any of the following will disconnect the RRSAgent bot from your IRC channel:

- `rrsagent, [please] excuse us`
- `rrsagent, bye`
- `rrsagent, [please] part`
- `rrsagent, [please] leave`

RRSAgent will leave the channel if there has been no activity on the channel for more than 2 hours. Should you not want this behaviour you can request that RRSAgent stay regardless of activity.

Each of the following disables automatic departure from the channel:

- `rrsagent, [please] stay`
- `rrsagent, [please] do not leave`
- `rrsagent, [please] do not depart`

Once automatic departure is disabled, the only way to re-enable it is to manually dismiss RRSAgent from the channel and then re-invite it.

## Talking to RRSAgent {#talking}

RRSAgent also recognizes several commands during its logging session. Most commands begin with '`rrsagent, `', though a few are recognized without this.

### Action Item Tracking {#actions}

RRSAgent will help track action items recorded while a meeting is in progress. Many of the commands in this set need not be directly addressed to RRSAgent; they will be recognized when not addressed to anyone in particular and also when received as third person ('`/me`') messages.

The list of action items may be reviewed and modified during the meeting. Action items will be recorded as they are modified in `https://www.w3.org/yyyy/mm/dd-<channel>-actions` where where '`yyyy`' is the current year, '`mm`' is the current month, and '`dd`' is the current day.

- `[rrsagent,] ACTION: <text>`

  Adds an action item described by `<text>`, assigning it the next sequential number. This command need not be directly addressed to RRSAgent. The keyword '`ACTION`' is not case sensitive. Actions may not be assigned in '`/me`' messages.

- `[rrsagent,] ACTION <number> = <newtext>`

  Replaces the text of action item `<number>` with `<newtext>`. This need not be directly addressed to RRSAgent, but will be ignored in '`/me`' lines. The keyword '`ACTION`' must be in all-caps or all lowercase, '`action`'.

- `[rrsagent,] ACTION- <number>`

  Removes action item `<number>` from the list. This need not be directly addressed to RRSAgent. The keyword '`ACTION`' is not case sensitive.

- `rrsagent, what [are the] action items?`
- `rrsagent, what [are the] actions?`
- `rrsagent, [please] show [the] action items`
- `rrsagent, [please] show [the] actions`
- `rrsagent, [please] list [the] action items`
- `actions?`

  Displays the list of action items. The first several requests must be addressed specifically to RRSAgent, as shown. The last request will also work in '`/me`' (third-person or out-of-band) form.

- `rrsagent, [please] drop action <number>`

  Removes action item `<number>` from the list. This form must be addressed specifically to RRSAgent.

- `rrsagent, [please] ignore action items`
- `rrsagent, [please] ignore actions`

  Requests that RRSAgent stop tracking action items. This request must be addressed specifically to RRSAgent.

- `rrsagent, [please] track action items`
- `rrsagent, [please] track actions`

  Requests that RRSAgent begin tracking action items. This request must be addressed specifically to RRSAgent. This is the default state when RRSAgent is invited to a channel.

### Searching the Log {#search}

- `rrsagent, bookmark`
- `rrsagent, pointer`
- `rrsagent, here`
- `rrsagent, where am I?`

  Returns a URI to the current location in the log.

- `rrsagent, grep [-i] [first-last|max] <text>`
- `rrsagent, search for [-i] [first-last|max] <text>`
- `rrsagent, find [-i] [first-last|max] <text>`
- `rrsagent, <text>?`

  Searches the log for `<text>`. The text is interpreted as a perl regex; e.g., '`.`' matches any character, '`<char>+`' matches one or more consecutive occurrences of `<char>`, and '`<char>*`' matches any number of consecutive occurrences of `<char>`, etc. '`-i`' causes the comparison to be case insensitive. '`first`', '`last`', and '`max`' limit the reported results to the specified (first and last) results or to at most (max) results.

### Pausing and Resuming Log Recording {#logoff}

- `rrsagent, silence`
- `rrsagent, stop`
- `rrsagent, off`
- `rrsagent, nolisten`

  Stops logging channel text to the log.

  Any line beginning with '`[off]`' and any message sent with the '`/me`' IRC command will also not be logged. This permits channel participants to interject single-line remarks.

- `rrsagent, on`
- `rrsagent, hello`
- `rrsagent, log`
- `rrsagent, listen`
- `rrsagent, record`
- `rrsagent, start`
- `rrsagent, begin`

  Resumes logging channel text to the log. This is the default state when RRSAgent is invited to a channel.

- `rrsagent, this meeting spans midnight`
- `rrsagent, do not start a new log [at midnight]`

  By default, when RRSAgent is sitting on an irc channel, a new log for the channel will be started at midnight UTC (not user local midnight!). If the channel is being used for a meeting that continues past midnight UTC, it may be more convenient to keep the meeting record contiguous in a single log. This command will tell RRSAgent to maintain a single log for the current channel if logging continues past midnight UTC. When RRSAgent joins a channel within 75 minutes of midnight UTC, the current log will continue past midnight, just as if this command had been issued.

- `rrsagent, start a new log [at midnight]`

  This restores the default behavior of RRSAgent when logging to a channel and midnight UTC is crossed. When RRSAgent joins a channel within 75 minutes of midnight UTC, the current log will continue past midnight unless this request has been issued.

### Setting Log Access {#access}

- `rrsagent, [please] set [these] logs member-visible|world-visible|ab-visible|team-visible`
- `rrsagent, [please] make [these] logs member-visible|world-visible|team-visible|ab-visible`

  Sets the access control on the logs, recorded action items, and draft minutes (if any). The group '`world`' may also be written as '`public`'. The suffix '`-visible`' may also be written as '`-access`', '`-conf`', '`-confidential`', '`-only`', '`-read`', or '`-readable`', or may be omitted entirely. '`record`' is recognized as a synonym for '`log`'.

### Formatting Minutes {#formatMinutes}

- `rrsagent, [please] create [the] minutes`
- `rrsagent, [please] draft [the] minutes`
- `rrsagent, [please] format [the] minutes`
- `rrsagent, [please] generate [the] minutes`
- `rrsagent, [please] make [the] minutes`
- `rrsagent, [please] publish [the] minutes`

  Runs a [script](https://w3c.github.io/scribe2/scribedoc.html) to reformat the current irc log into HTML-ized minutes. If the access control of the logs has been previously set, the formatted minutes will receive the same access. These formatted minutes should subsequently be edited by hand to improve them as a permanent meeting record. This command may be repeated, with RRSAgent over-writing the previously generated minutes. Repeating the request is useful if the diagnostics produced at the bottom of the formatted minutes suggest additional formatting commands that could usefully be added to the log.

  The [script](https://w3c.github.io/scribe2/scribedoc.html) recognizes instructions found in the irc log, including the following:

  - `Meeting: <name>`

    Specifies the name (title) of the meeting.

  - `Chair: <name>`

    Specifies the chairperson's name.

  - `Agenda: <URI>`

    Specifies the Web address of the agenda.

  - `Scribe: <name>`

    Specifies the scribe's name.

  - `ScribeNick: <nick>`

    Specifies the irc nick of the scribe.

  Refer to the scribe [Quick Start Guide](https://w3c.github.io/scribe2/scribedoc.html) for additional details. See also [Making minutes without RRSAgent](https://w3c.github.io/scribe2/rescue) for suggestions on what to do if you wish to generate minutes when RRSAgent was not logging the channel.

  An [older version of the script](https://w3c.github.io/scribe/scribedoc.htm) can also be invoked by adding '`v1`' to the formatting request; as below:

  - `rrsagent, [please] create [the] minutes v1`

### Help {#help}

- `rrsagent, [please] help`

  Displays an abbreviated list of commands. Due to "flood control" in IRC, this may be slow.

## Related Tools {#related}

- [scribe.perl](https://w3c.github.io/scribe2/scribedoc.html) by Bert Bos (after version 1 created by David Booth) generates nicely formatted HTML from irc logs, well-tuned for the logs produced by RRSAgent. This is the tool invoked by '[`please draft the minutes`](#formatMinutes)'.

- [Zakim](zakim.md) is a Semantic Web agent ("swagent") that helps facilitate meetings using IRC.

- [Meeting minutes browser](https://www.w3.org/services/meeting-minutes/) provides HTML and JSON summaries of meeting minutes published on W3C's site.

## Change History {#changes}

### 2022-10

Include scribe.perl in [Related Tools](#related), add mention of [Making minutes without RRSAgent](https://w3c.github.io/scribe2/rescue).

### 2021-01

Default minutes style changed from v1 to v2.

### 2019-08

New (v2) minutes style supported.

### 2014-08

'`Please stay`' supported.

## Acknowledgements {#acknowledgements}

The RRSAgent IRC bot was written by Dave Beckett then of ILRT Bristol (Dave calls it 'logger') and Ralph Swick of W3C. The name comes from earlier variants on the same theme by Ralph. David Booth of Hewlett-Packard wrote the v1 log reformatting script that generates formatted draft minutes. Bert Bos of W3C rewrote the formatting script and added more features; that is version 2.

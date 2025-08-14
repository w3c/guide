---
title: Predicting milestones
toc: true
---

## Introduction  {#intro}

### Aims and Scope  {#aims}

This document is intended to help in predicting milestones for work on the W3C Standards track. Realistic milestones are important for resource allocation at the start of new work, and to monitor progress when rechartering or extending existing work. At the same time, the very nature of the work means that progress is somewhat unpredictable; *delays can and will occur* relative to the predicted schedule.

Delays are not necessarily a bad thing. For example, delays due to an unexpectedly large volume of last call comments may improve the specification or may indicate that what was previously considered a simple problem is actually more complex. Delays due to incomplete implementations may indicate that implementers disagree on the meaning of the specification, or that priorities have shifted away to other work. So these delays may indicate where the work needs to be improved. Delay, and a better specification, is usually preferable to a rapidly produced but poor quality specification that needs to be revised, substantially reworked, or abandoned and replaced because it was unsuitable.

If eventual timescales to Recommendation are unpredictable, should milestones be abandoned altogether? No. Some indication is needed to judge the likely scope of the work. What *can* be done is to produce *realistic* initial schedules, based on past experience, and to clearly communicate the reasons for delays and the lessons learned from them when adjusting milestones as the work progresses.

### Reading this document  {#this}

While the technical work undertaken by W3C is very diverse and hard to generalize, non-technical aspects such as required review periods mandated by the Process Document \[[PROCESS](https://www.w3.org/policies/process/)] or the W3C Patent Policy \[[W3CPP](https://www.w3.org/policies/patent-policy/)] are common to all work. The main focus of this document is therefore on the required periods of time needed for the non-technical work. Understanding these avoids producing initial milestones which are unreasonably short and thus, inevitably destined to 'fail'. Alongside each of these time periods, tips are given on how to minimize delays.

This document aims to collect together some of that experience so that new Chairs, Staff Contacts, and Advisory Committee representatives can:

- Produce charters with realistic initial milestones
- Understand how to minimize avoidable delays
- Cope with and draw lessons from unpredicted delays
- Clearly communicate why and by how much an initial timeline has been revised as work proceeds.

Throughout the document, minimum **time durations** are documented, 
> styled like this
{:.time}

and supported by **hints and tips** on avoiding needless delay,
> styled like this.
{:.tip}

This document is an informal guide to predicting the likely duration of Recommendation-track work. It is not a normative definition of the various time periods; for that, follow the links to the Process Document and the Patent Policy.

## Preparatory work  {#prep}

The first set of milestones are drawn up before work starts, and put in an initial charter. In this phase, an idea is firmed up from "hey we could do this" to a fully fledged, chartered Working Group. If the work is entirely new, or would take an existing group in a radical new direction, the Process Document [requires](https://www.w3.org/policies/process/#WGCharterDevelopment) that Advance Notice be sent to the AC. Often, an initial draft charter is sent along with this notice (but this is not required). The aim here is to avoid surprises, to quickly gather brainstorming-type feedback, and to get buy-in on the proposed direction from likely members of the eventual Working Group.

> Time: Advance Notice
: There is no set period for Advance Notice, but four weeks is a typical minimum period.
{:.time}

> Tips: Advance Notice
: When developing materials for an advance notice, try to strike a balance between fast (but overly sketchy and vague) and thorough (but slow, maybe over-detailed or over-constraining).
>
  If work has been prepared beforehand in a Community group, or formalizes existing, industry standard practices, then an Advance Notice might be skipped.
{:.tip}

The results from Advance Notice may indicate broad consensus on the proposed direction (if so, proceed rapidly to a formal charter review). Or they may indicate disagreement on the best direction forward (in which case, iterate). Some commentors may want a fast development of an initial version, while others may want a fully fledged solution.

> Tips: Advance Notice Feedback
: If feedback indicates disagreement on scope, consider proposing both a fast initial version *and* a requirements gathering and drafting item for a full-featured second version. This can help avoid delays due to disagreements on scope.
{:.tip}

Once broad agreement is reached, a draft charter is created (or updated, if one was sent with the Advance Notice) and reviewed by W3M before being sent to the AC.

> Time: W3M review
: There is no set period for W3M review, but two reviewers are needed and two weeks is a typical minimum period.
{:.time}

> Tips: W3M review
: One of the reviewers can be the Domain leader, who should already be familiar with the proposed work from Team discussions. This can lead to faster and more thorough review.
>
  The draft charter must indicate a proposed chair. Save time by identifying likely chairs during the Advance Notice period.
>
  If one or two likely implementors have been identified during Advance Notice, communicate this to W3M so that they can see that the proposed work has developer backing.
>
  Clearly distinguish in the charter between Groups with a formal dependency, and other related groups. This distinction will be important during Candidate Recommendation.
{:.tip}

Once review comments from W3M have been incorporated into the charter, it is [sent to the AC for review](https://www.w3.org/policies/process/#CharterReview).

> Time: AC review
: There is no set period for AC review, but four weeks is a typical minimum period followed by two to four weeks to incorporate feedback and to make the decision to charter the proposed Working Group.
{:.time}

>Tips: AC review
: Respond to each review comment as it arrives, rather than waiting for the review period to end. Others may have similar concerns, so addressing them early avoids needless repeat comments.
>
  Keep the proposed charter unchanged (so the AC has a stable document to review) but make a copy at a different location and incorporate comments (so commenters can see the resolution of their issues in-place).
>
  Talk to likely implementers during AC review and try to gauge the level of interest.
{:.tip}

## Starting the Group  {#wg-startup}

Once the decision to start the Working Group has been communicated to the AC, participants can join. This may take some time, particularly if participants need to perform a legal review of the work items (for example, to review their patent portfolio in light of the [W3C Royalty-Free commitment](https://www.w3.org/policies/patent-policy/#sec-Requirements)). In the case of a new group, some or all of the participants may be unfamiliar with W3C processes and tools (such as IRC, phone conferencing, issue tracking, version control). The Chair and Staff Contact take a lead role in getting a new group up to productive speed.

> Time: WG startup
:  There is no set period after which a Group becomes productive. Experienced participants with a capable Chair and Staff Contact, working on a new version of an existing specification, can be productive immediately. A new group with participants new to W3C, working in a new area which is rife with intellectual property concerns, may take several months to become productive.
{:.time}

> Tips: WG startup
: Make a diff document of the final charter, compared to the one sent for AC review. Legal review can focus on just what has changed.
>
  As soon as the decision is made to charter the group, set up the usual infrastructure (public web page, archived mailing lists(s), wiki, issue and action tracker) so that participants are not kept waiting and so that they become used to the way of working.
>
  Establish a day and time for a first telephone call (based on the geographic location of the participants) to get people introduced and up to speed. Do not expect to accomplish any technical work at first.
>
  Identify likely editors early.
>
  Ensure that participants are familiar with the action tracking as soon as possible.
>
  Establish a system for recording and tracking actionable comments on the specification. That system might be:
>
  - an open mechanism, such as the [the W3C GitHub](https://github.com/w3c) (which would enable commenters to submit comments on the specification directly into the tracking system directly themselves)
  - a moderated mechanism, such as GitHub issues (which would enable the working-group to control which comments actually get entered into the system as issues for the group)
  - some combination of open and moderated mechanisms; for example, using the W3C Bugzilla service for first-level comment tracking, with the editor responsible for resolving comments, and using the W3C Tracker tool for comments that have been “escalated” for resolution by the working group as a whole.
>
  Use the tracking system at all phases of the life cycle of the specification. An advantage of setting up such a tracking system early and using it as part of the working group’s normal operating procedures is that the same system can later also be used during Candidate Recommendation, for tracking Candidate Recommendation comments. So it can help the working group to proceed through Candidate Recommendation more quickly—because by the time the specification reaches Candidate Recommendation, the working group will already have long experience and familiarity with using a system for recording and tracking comments, and will save the start-up time they would otherwise need to spend during Candidate Recommendation to get accustomed to using a new and unfamiliar comment-tracking system for the first time.
{:.tip}

A face to face meeting can be a helpful way to build social bonds and to start off new work. For a newly chartered group, there is a minimum notice period for a first meeting.

> Time: First f2f meeting
: There is a set minimum period of [eight weeks](https://www.w3.org/policies/process/#GeneralMeetings) for announcement of a face to face meeting.
{:.time}

> Tips: First f2f meeting
: Propose a date and location of the first meeting, in the materials sent for AC review. This gives more notice, and allows the mandatory notice period to overlap with the AC review period.
>
  Allow sufficient time for group members to organize travel and obtain legal review before the first f2f meeting.
{:.tip}

## First Public Working Draft  {#fpwd}

The First Public Working Draft is an important milestone. It makes concrete the proposed work. It is an opportunity to publicize the work of the Group. This is also a legal milestone; FPWD triggers a patent exclusion period for all features that are in that document. Features *added afterwards* are not covered until the work progresses to a Last Call. There is therefore a balance to be struck between speed and feature completeness (at least an outline of the features; details of syntax and specification for a given feature can be altered later).

> Time: Exclusion period for FPWD
: Announcement of an open exclusion period, immediately after publication of FPWD, triggers an [exlusion period of 150 days](https://www.w3.org/policies/patent-policy/#sec-exclusion-with).
{:.time}

> Tips: Exclusion period for FPWD
: You don't have to wait for an exclusion period to end before moving to the next stage in the Rec track. Exclusion periods can overlap.
{:.tip}

## Test suites  {#test}

The W3C Process does not require tests to be available until exiting Candidate Recommendation. Leaving testing until it is the only thing left holding you back from Recommendation is, however, unwise. Tests give implementers something to work with, and provide examples for those reviewing the specification. Tests help make concrete the sometimes abstract language of a specification. Tests can show where reasonable interpretations of the same specification text could lead to divergent and non-interoperable implementations.

> Tips: Early testing
: Start writing tests when you start writing the specification.
>
  Just as you have one or more specification editors, consider having one or more test suite editors to drive testing
>
  Generate implementation reports early, even if they are very incomplete. Sections of the specification that everyone is avoiding become clear (and you can examine why this is so). Also, peer pressure to outperform competing implementations is a wonderful thing.
{:.tip}

## Getting to Candidate Recommendation  {#getting-to-lc}

Once all open issues are closed (or deferred to the next version) and the group believes the document is stable enough for wide review, a Working Draft can be published for wide review. Other Groups, expecially those with formal dependencies, are invired to review. External Groups with whom the Working group has an ongoing liaison should also be invited to review.

> Time: Wide Review Duration
: The minimum duration for the Wide Review comment period should be 4 weeks.
{:.time}

> Tips: Wide Review Duration
: 'Horizontal' groups that review many specifications (for example, WAI P&amp;F and I18n Core) may, because of their workload, need longer than the minimum period.
>
  Discuss Candidate Recommendation duration with the Chairs and Team contacts of groups that you expect to provide comments, *before* Candidate Recommendation is announced.
>
  Bear in mind that external groups invited to review will have different processes to W3C. For example, they may only meet periodically. Be aware of their schedule before going to Candidate Recommendation.
>
  Bear in mind the impact of vacation periods on Last Call duration. People won't comment if they are on vacation and will complain if they were unable to comment.
>
  Explain why your document is relevant to each Group invited to review. If a particular section is especially relevant, call it out explicitly and give an explanation. Groups which do not understand why they are asked to review a document may be slow to respond.
>
  There can be more than one wide review draft. If the document has changed substantially, in particular, if new features have been added, a new wide review will be needed.
{:.tip}

If your specification defines one or more new Internet Media Types (previously called "MIME types"), put a draft registration of these types in an appendix, and send (the plain text of) this for ietf-types review at wide review

## Processing Wide Review  {#processing-lc}

Each Candidate Recommendation review comment must be documented, the changes made (if any) and rationale for the change documented, and the agreement or disagreement of the reviewer to the change also documented.

> Time: Processing Wide Review comments
: There is no minimum duration for responding to wide review comments.
{:.time}

> Tips: Processing Wide Review comments
: Deal with comments as they come in, rather than waiting until the end of the wide review period. Besides saving time, this can also avoid duplicate comments.
>
  Maintain a draft Disposition of Comments. This allows commentors to see that their comment has been received and what the status of the response is. It also allows the Working Group to track the overall progress of the review. The Disposition of Comments will be needed during transition to CR.
>
  Keep an Editors Draft up-to-date with changes made as a result of wide review comments, so that commentors can see the changes in place. This speeds sign-off on the changes.
>
  If a Group is expected to comment and has not done so, ask if they need more time. This encourages them to either make their comments on time, or ask for an extension of known duration. Also ask that, if they have no comments, they send an explicit 'no comments' message. This helps 'show wide review' in the following Transition call, and differentiates groups whose review is complete from groups which are late.
>
  If review comments are vague, ask for clarification or for concrete specification text which would satisfy the comment.
>
  If review comments are overly ambitious and would exceed the planned scope of the current specification, ask if they can be deferred to the next version.
>
  If a reviewer and the Working Group cannot reach agreement on a proposed change, give the reviewer a choice of accepting the change anyway ('can live with it') or filing a formal objection.
>
  If changes are made in response to a comment and the reviewer does not react to repeated requests for confirmation that the changes are acceptable, send a final reminder stating that failure to respond by a given date will be taken as a sign that the changes are acceptable. Document the number of reminders sent and their dates, then move on.
{:.tip}

## Transition to CR  {#transition-cr}

Once the Disposition of Comments shows that all wide review comments have been handled, your Group can request a transition to Candidate Recommendation. At that meeting, besides checking the responses and looking for outstanding disagreement, you will be asked which [features are at risk](https://www.w3.org/policies/process/#candidate-rec), what the CR exit criteria are, and to give a [mimimum time for CR](https://www.w3.org/policies/process/#candidate-rec). The purpose of that minimum time is to allow other implementers, perhaps unknown to the group, to contribute their implementation feedback.

Although having a Test Suite and an Implementation report at this stage is not required, it is highly recommended. Firstly, if the report shows implementation of each feature by at least two independent implementations, it is possible to exit CR quickly (a Call for Exclusion might delay a bit). Secondly, an early Implementation report helps to identify features which are currently not well implemented so that the Group can discuss whether these features need to be marked as 'at risk'.

This section assumes that the earlier tips were followed and you have a test suite.

> Time: CR Duration
: There is a minimum duration of 28 days for comments for CR. Two months is a more typical figure. For follow-on CR publications, two weeks is a realistic minimum.
{:.time}

> Tips: CR Duration
: Historically, the time taken to exit CR varied from zero (rare) to many years, largely due to the absence of test suites sufficiently early in the process.
>
  By the time a Group is ready to enter CR, it should be possible to estimate with more confidence the likely duration, provided there is an existing Test Suite and draft implementation Report, and provided the Group is able to gauge the momentum of implementers.
>
  If there is no test suite when entering CR, the likely duration cannot be accurately estimated.
{:.tip}

Publication of a Candidate Recommendation triggers an Exclusion period on all features which were not in the preceding First Public Working Draft (or previous Candidate Recommendation, if there was one).

> Time: Exclusion period for Candidate Recommendation
: Announcement of an open exclusion period, immediately after publication of Candidate Recommendation, triggers an exclusion period of [60 days](https://www.w3.org/policies/patent-policy/#sec-exclusion-with).
{:.time}

> Tips: Exclusion period for Candidate Recommendation
: Exclusion periods can overlap. Check whether the exclusion period for FPWD is still open.
{:.tip}

## Leaving CR  {#leaving-cr}

Exiting the Candidate Recommendation phase can be triggered by:

1. meeting the CR exit criteria (which leads to Recommendation), or
2. dropping features which were not marked as 'at risk', or adding new features as a result of implementer feedback (either of which leads to another Candidate Recommendation).

> Time: Post-CR Candidate Recommendation Duration
: The minimum duration for the Candidate Recommendation comment period is 28 days.
>
  Announcement of an open exclusion period, immediately after publication of Candidate Recommendation, triggers an exclusion period of 60 days.
{:.time}

> Tips: Avoiding or minimizing repeating CR publications
: Identify likely 'at risk' features by looking at implementation reports before entering CR.
>
  If in doubt, leave a feature in the spec and mark it 'at risk'. You can drop it without having another CR. Adding it back in afterwards, however, or dropping it without having identified it as 'at risk', triggers another Candidate Recommendation.
>
  If a new CR is needed, limit the scope of comments to the removed or added features. State that, due to the maturity of existing implementations, all new feature requests will be deferred to the next version.
>
  In practice, it is common to get no comments in such a late CR, because the implementers already agreed to drop/add whatever feature triggered the new CR. However, other implementers or dependent groups may have other ideas on the changes.
{:.tip}

## Recommendation  {#rec}

Following a successful transition call where the CR exit criteria were demonstrated to have been met, the next stage is to propose to move to Recommendation. This review period is intended for the W3C Advisory Committee.

> Time: Duration
: The minimum duration for the review period is [four weeks](https://www.w3.org/policies/process/#initiating-rec-review), followed by two weeks for a W3C decision. If the review period spans the July/August or December holiday periods, more time is typically added.
{:.time}

> Tips: Minimising delay during AC Review
: Personally contact the AC representative for each organization on the group (CCing the Group member) to remind them of the review.
>
  Prepare an Editors Draft Recommendation, taking a copy of the CR document, and incorporate any changes (assumed editorial, such as out-of-date references, grammatical errors, and rewording of ambiguous paragraphs) that happen as a result of AC review.
>
  If the group decides to produce a Press release to accompany the Recommendation, start work on this at the REC transition (or earlier). This allows time for testimonials to be approved and for the release itself to be translated into other languages.
>
  Schedule the anticipated publication date of the final Recommendation with the Comm Team (especially if there will be press activity) and the webmaster.
{:.tip}

## After the Advisory Committee  {#rec-after}

Congratulations. Now start collecting [errata](https://www.w3.org/policies/process/#errata) for the Recommendation, and working on v.next.

## Dealing with the calendar  {#calendar}

The calendar and publication moratorium may get in the way of predicting precise milestones. Use our [milestones calculator](https://w3c.github.io/spec-releases/milestones/) to help with dates.

<style type="text/css" media="screen">
blockquote.time::before {
    background-color: #EE9 !important;
    width: 0.3rem !important;
	height: 90% !important; 
	left: -0.5rem !important; }

blockquote.tip::before {
    background-color: #BEB !important;
	width: 0.3rem !important;
	height: 97% !important;
	left: -0.5rem !important; }
</style>
 

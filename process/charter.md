---
title: How to create a Working Group or Interest Group
toc: yes
---

The W3C Process describes the [lifecycle of chartered groups](https://www.w3.org/policies/process/#group-lifecyle). At a high level, W3C approves a new Working Group or Interest Group charter after a series of reviews intended to improve the quality of the charter and generate interest in the work. The reviews typically happen in this order:

- Early socialization (e.g., by the Team or in a Community Group)
- Review by the W3C Strategy Team
- More socialization within the community
- W3C "Horizontal" Group review
- Advisory Committee review
- In the case of [Formal Objections](../council/council.md), W3C Council review

In this document we describe the operational aspects of these reviews.

*Timing:* Please note that these reviews take time, and people working on charters should expect the entire process to take multiple months.

**Note:** [Group closures](closing-wg.md) are addressed in other documentation.

## 1. New groups  {#new-charters}

Discussions for new work happen in a variety of venues, including Member discussions, Workshops, Working / Interest / Community Groups, and the Team.

Within the Team, the *Strategy Team* manages the charter development process, including allocation of staff resources. The Strategy Team tracks charters through the process via the [Strategy Team's Incubation Pipeline (Funnel)](https://github.com/orgs/w3c/projects/97) tool.
{:#pipeline}

### 1.1. Charter preparation {#charter-prep}

These are the recommended steps for any party preparing a charter for a new Working Group or Interest Group:

Check readiness
: For a Working Group charter, review: [W3C Recommendation Track Readiness Best Practices](../standards-track/), [Tips for Getting to Recommendation Faster](../standards-track/rec-tips.md), and [How to transition work from a Community Group to a Working Group](cg-transition.md).

Draft charter
: Use the [charter template](https://w3c.github.io/charter-drafts/charter-template.html) to create a draft charter, ideally on GitHub. This is where substantive discussion of the charter should take place, including issues and pull requests. **Note:** There are ongoing discussions about making it easier for people to find draft charters, e.g., by using a single GitHub repo for all draft charters.

Inform Strategy Team
: When ready (e.g., after sufficient discussion among stakeholders has taken place), inform the Strategy Team by [creating a new charter issue](https://github.com/w3c/strategy/issues/new?assignees=&labels=Evaluation%3A%20untriaged&template=04-Chartering.md&title=) in their [pipeline](#pipeline). The Strategy Team will use this issue to provide updates on the charter's progress through the process. Discussions of the charter's content should continue to take place in the charter's own repo.

### 1.2. Strategy Team role  {#strategy-team-role}

When a new charter issue has been raised, the Strategy Team Lead assigns a staff member to shepherd the charter through the remainder of the process, the charter shepherd is the “assignee” of the issue in the pipeline. The Strategy Team typically discusses proposed charters at its regular meeting or on its mailing list. **Note:** If the Strategy Team Lead cannot identify a staff member, there may be delays in advancing the charter through subsequent reviews.
{:#charter-shepherd}

The [charter shepherd](#charter-shepherd) (on behalf of the Strategy Team) roles include:

Evaluate readiness
: Let the proponents know if the charter is not well-formed (per the template and per Process section "[content of a charter](https://www.w3.org/policies/process/#WGCharter)"); if it is perceived to be harmful to the Web; or if it is not a priority at the current time.

Request advance notice to AC
: If and when satisfied with the charter, raise awareness by
requesting that the W3C Communications Team send an [advance notice to the W3C Advisory Committee](https://www.w3.org/policies/process/#WGCharterDevelopment);
for details see [how to send advance notice of work to the Advisory Committee](adv-notice.md). Record in the [pipeline](#pipeline) issue
that advance notice has been sent.  
*Timing:* The exact timing of the advance notice may vary from charter to charter. In practice, if the advance notice would precede the formal call for review by only a short delay, we skip the advance notice.

{:#horizontal-review}
Request horizontal review
: Soon after, or in parallel, initiate [horizontal review](../documentreview/#how-to-get-horizontal-review). This is done by adding the "[Horizontal review requested](https://github.com/w3c/strategy/labels/Horizontal%20review%20requested)" label to the issue in the [pipeline](#pipeline).  
*Timing:* Horizontal reviewers will usually respond within two weeks, though it is wise to allow for additional time. The charter shepherd may use the team-horizontal list to reach all the horizontal reviewers.  
Horizontal reviews are not required for Groups that do not hold technical discussions, such as the Patents and Standards Interest Group.

Prepare for TiLT Review
:
- *Charter changes*: Horizontal and other reviews may result in changes to the charter, or to objections. The charter shepherd should note in the [request to TiLT](tilt/#request) the horizontal review status (including completed reviews and any timeouts).
- *Chairs:* Per the [W3C Process](https://www.w3.org/policies/process/#ReqsAllGroups) the W3C Team appoints Working and Interest Group Chairs. It is the responsibility of the charter shepherd to propose one or more Chairs in the request for TiLT approval.

Request approval from TiLT
: When the charter shepherd is satisfied that as much progress as possible has been made, they [request approval from TiLT](tilt/#request). Record in the [pipeline](#pipeline) issue that a TiLT decision has been requested. TiLT informs the charter shepherd of their decision in the [pipeline](#pipeline) issue.  
*Timing:* Allow approximately 2 weeks, but see [Timing of responses from TiLT](tilt/#timing) for details.

If approved, the charter shepherd works towards Advisory Committee Review.

### 1.3. Advisory Committee Review  {#ac-review}

In this part of the process, the charter shepherd (on behalf of the Strategy Team) roles are:

Prepare for AC Review
: Work with the W3C Communications Team to organize Advisory Committee review of a charter (see [implementation details for the review](#cfr)).

Monitor AC Review
: Once the AC Review is underway, monitor responses and [manage any Formal Objections](../council/council.md). Ensure that the charter receives [sufficient support from the Membership](#baseline-support).  
*Timing:*

- [Per the W3C Process](https://www.w3.org/policies/process/#CharterReview), the review period is at least 28 days.
- Any Advisory Committee representative may request an extended review period of any new or substantively modified Working Group charter as part of their response to the Call for Review. In this case the existing charter may need to be extended (see [extension template](https://www.w3.org/new-doc-from-template?location=%2FTeam%2Ftemplates&template=%2Fafs%2Fw3.org%2Fpub%2FWWW%2FTeam%2FTemplates%2Fcharter-extension.html&submit=Continue...)). In case of extended review period, the Team must ensure that the Call for Participation for the work group occurs at least 60 days after the Call for Review of its charter.
- The handling of Formal Objections to a charter adds more time.

Manage changes resulting from review
: As a result of review, make any requested very minor changes (in place) to the charter. If substantive changes are proposed, then initiate review of those proposed changes. In either case, the Team follows a process for [managing changes to charters after review](#manage-changes).

Request approval from TiLT
: Once the review has ended and [Formal Objections are addressed](../council/council.md), the charter shepherd [requests approval from TiLT](tilt/#request). Record in the [pipeline](#pipeline) issue that a TiLT decision has been requested. TiLT informs the charter shepherd of their decision.  
*Timing:* Allow approximately 2 weeks, but see [Timing of responses from TiLT](tilt/#timing) for details.

If approved, the charter shepherd then works with the W3C Communications Team to [announce the decision](#announce-decision).

## 2. Existing groups  {#existing-groups}

Here we describe the operational aspects of extending or modifying the charter of an existing group.

In these processes, a group's [Team Contact](../teamcontact/role.md) typically plays the role of the [charter shepherd](#charter-shepherd).

### 2.1. Request for short-term extension  {#extension-request}

The W3C Process describes the [charter extensions](https://www.w3.org/policies/process/#charter-extension) and when they may occur. No Advisory Committee review is required for short-term extensions.

The Team expects a charter extension to be no more than 6 months. Otherwise the Group must [recharter](#recharter-request) or justification must be provided to explain the delay.

Short-term extensions cannot exceed a total of one year from the original charter end date.

For a short-term extension, the charter shepherd roles are:

Request approval from TiLT
: The charter shepherd [requests approval of the short extension by TiLT](tilt/#request).  
*Timing:* Allow approximately 2 weeks, but see [Timing of responses from TiLT](tilt/#timing) for details.

Request extension notice
: If the decision is positive, request that the W3C Communications Team [announce an extension](#announce-extension).

Let the group know
: The W3C Communications Team inform the group that its charter has been extended.

### 2.2. Request for rechartering  {#recharter-request}

A group recharters when it wishes to change its charter or needs long-term extension.

In these processes, the roles of the charter shepherd are:

Record group decision
: The group should discuss and record a formal decision to request extension or to recharter.

Follow process for creating a charter
: The handling of rechartering is almost the same as for [new charters](#new-charters). Note that, in addition to any content changes, the charter may need to be updated if the [charter template](https://w3c.github.io/charter-drafts/charter-template.html) has changed. Furthermore, the template tool will prompt for the inclusion of Patent Policy language and otherwise help you meet the [list of charter requirements in the Process](https://www.w3.org/policies/process/#WGCharter). For existing groups, the [charter assistant](https://www.w3.org/groups/wg/css/deliverables/) helps in producing the list of exclusion drafts.

## 3. Implementation details  {#implementation-details}

The following sections are mostly intended as instructions to the Team and are included here for transparency.

### 3.1. Sufficient Member support for a charter  {#baseline-support}

Generally, the Team will expect to receive reviews for Charter
 proposals from at least 5% of the [Membership](https://www.w3.org/membership/list/). If
 the 5% threshold is not met, the Charter may still be approved, but
 additional scrutiny is warranted, and resource allocation may be
 limited. Additionally, the Team will continue to consider the number
 of declarations of intent to participate or implement the output of
 the work group.
 {:#review_threshold}

Given the diversity of work underway in the Consortium, including [groups that focus on horizontal reviews](horizontal-groups.md) (e.g., accessibility, security, and internationalization), as well as technologies that are initially focused on by some segment of the Web's stakeholders, there are times where exceptions to this practice may be considered. In those cases, the Team will document reasons why the exception is made.

### 3.2. Tips to speed up the process  {#speed-tips}

Parallelize where possible:

- Work with the W3C Communications Team to send [advance notice to the AC](adv-notice.md) as soon as you have something to point to, and update the [pipeline](#pipeline).
- Start the horizontal reviews of the charter as soon as the scope, deliverables, and dependencies parts of the charter are stable enough. Ping the horizontal reviewers on a weekly basis.
- Start working on resolving Formal Objections to a charter as soon as those are received. Don't wait till the end of the AC review period.
- Prepare a draft of the W3C Decision announcement before getting the approval from TiLT.

### 3.3. Organizing the Call for Review  {#cfr}

**Note:** Team Contacts should ensure that their work group participants are aware there is a review in progress.

The Team Contact:

- Reuses an existing Team-only mailing list (e.g., [w3t-archive@w3.org](https://lists.w3.org/Archives/Team/w3t-archive/)) for the Advisory Committee review (or [creates a new Team-only mailing list](https://www.w3.org/Systems/Mail/Request/).)
  
  - If new, the mailing list should be named team-xxx-review@w3.org (in accordance with the [list name policy](https://www.w3.org/Systems/Mail/Request/#doc-listname)).
  - The mailing list must be Team-only.
  - The mailing list must be archived.
  - The mailing list must have at least one subscriber to monitor traffic: the Team Contact.
  - The mailing list must accept posts from the address [noreply+wbs@w3.org](mailto:noreply+wbs@w3.org) to receive questionnaire responses. After the list is created, use the [list administration tool](https://lists.w3.org/admin/manage) to add this address to the accept2 file.
- Sends a request to the W3C Communications Team ([w3t-comm@w3.org](mailto:w3t-comm@w3.org)) asking that a Call for Review be sent to the AC. The request should be sent **at least three business days before** the anticipated start date of the review. The request must include:
  
  1. A w3.org URI to the proposed charter (not a github.io URI). This charter is public, and must not be altered, during the AC review.
  2. The list of significant changes to a revised charter (per ["Advisory Committee Review of a Working Group or Interest Group Charter"](https://www.w3.org/policies/process/#CharterReview) of the Process Document). It is useful to include a diff between the current and proposed charters (you may wish to use the [HTML diff tool](https://services.w3.org/htmldiff)).
  3. In case of renewal of an existing charter, whether the group scope has changed. I.e., are there any new deliverables with licensing obligations under the W3C Patent Policy? The current group participants would need to re-join the group once the revised charter is approved.
  4. A recommended review start date and duration (at least 28 days according to [the Process Document](https://www.w3.org/policies/process/#CharterReview))
  5. A URI to the review of the proposed charter in the [Strategy GitHub repository](https://github.com/w3c/strategy/issues).
  6. The name of the Team-only mailing list for comments.

The W3C Communications Team encourages the charter shepherd to include as part of the request, a draft Call for Review, created by using this [template](https://www.w3.org/new-doc-from-template?location=%2FTeam%2FTemplates&template=%2Fafs%2Fw3.org%2Fpub%2FWWW%2FTeam%2FTemplates%2Fcfr.html&submit=Continue...) (even if the URI to the questionnaire may not yet exist).

The W3C Communications Team (or the motivated Team Contact) builds a [Call for Review questionnaire](https://www.w3.org/2002/09/wbs/33280/apCFRFactory). The URI for the questionnaire is added to the Call for Review announcement to members. In case of renewal of an existing charter, it is also useful to include a diff (you may wish to use the [HTML diff tool](https://services.w3.org/htmldiff)) between current and proposed charters in the Call for Review questionnaire.

Once the Head of W3C Communications (or delegate) has approved the Call for Review and the questionnaire, the W3C Communications Team:

1. Sends the Call for Review to w3c-ac-members@w3.org.
2. Sends a version of the announcement to public-new-work@w3.org ([archive](https://lists.w3.org/Archives/Public/public-new-work/)). Use this [template](https://www.w3.org/new-doc-from-template?location=%2FTeam%2FTemplates&template=%2Fafs%2Fw3.org%2Fpub%2FWWW%2FTeam%2FTemplates%2Fpublic-charter.html&submit=Continue...) (and see the [example](https://lists.w3.org/Archives/Public/public-new-work/2007Jan/0001.html)). The announcement must include:

   - The URI of the (public) charter.
   - The end date of the Member review.
   - That W3C invites public feedback on public-review-comments@w3.org ([archive](https://lists.w3.org/Archives/Public/public-review-comments/)).
   - That we make no guarantees of replying to public comments.
   - That people who work for a Member organization should coordinate their comments through their Advisory Committee Representative.
3. Send the same email to [new-work@ietf.org](https://www.ietf.org/mailman/listinfo/new-work). **Note:** public-new-work@w3.org used to cc new-work@ietf.org but due to mailing list configuration issues, we stopped that practice.

### 3.4. Managing changes to charters after review  {#manage-changes}

If there are only very minor changes to a charter resulting from the review, the (future) decision includes the original charter URI and an explanation of the changes and their rationale.

If substantive changes are proposed in response to charter review, the Team Contact must request a review of the proposed changes to the individuals and organizations who responded to the Call for Review, copying the [member-charters-review@w3.org](https://lists.w3.org/Archives/Member/member-charters-review/) member-archived mailing list. The request must contain:

1. an explanation of the changes and their rationale
2. a deadline for response (minimum of one week) if reviewers have concerns or if the changes would alter their reviews
3. the URI for the questionnaire open to the AC

If the work continues or derives from an existing group or community effort, the Team Contact should also send the [HTML diff](https://services.w3.org/htmldiff) and a public rationale to that group or community.

These communications should note that W3C has not yet approved the charter.

> ***Suggested wording:*** *Please let us know by \[date+1 week] if you have concerns or if this change would alter
your review*.

If anyone expresses new concern in response to the re-review, the Team may attempt to resolve the concern (with re-review), formally open a new AC review, or the [W3C Council](../council/council.md) may treat it as an objection and overrule it.

If there are substantive changes, before any announcement, the Team Contact:

1. Mints a new URI for the version of the charter that includes the changes. In the "Charter history" section of the charter, please link to the original (reviewed) charter.
2. Modifies the original charter in place with the following status sentence at the top:

  ```html
      <p class='todo>This charter has been replaced by <a href="@@@">a newer version</a>.</p>
      
  ```

### 3.5. Announcement of W3C Decision, Call for Participation  {#announce-decision}

#### 3.5.1. Preparation by the charter shepherd

The charter shepherd ensures that the following are done and the following documentation is available **before** asking the W3C Communications Team to announce a group:

1. TiLT has approved the group, whether or not preceded by an AC Review.
2. The group exists in the [Groups DB](https://www.w3.org/admin/dashboard).

   - If the group does not exist:

     Contact the W3C Communications Team to [create the group](https://www.w3.org/admin/dashboard) by sending a mail to [w3t-comm@w3.org](mailto:w3t-comm@w3.org). Note that this requires:

     - group name
     - group shortname
     - charter URI
     - homepage URI *(only if you want to use a page different that the automatically generated [group pages](https://www.w3.org/groups/))*

     Creating the group will list the group in the drop-down for db-backed groups in the mailing list creation form.
   - If the group already exists:

     - For WGs and IGs that are more than mailing lists:

       Simply reuse the existing join form; all join pages are available from the [list of groups](https://www.w3.org/groups/).
     - If the group is an IG that is just a mailing list:

       Document on the group's home page that to join the group people simply subscribe to the list.
3. All relevant mailing lists exist. If not, the Team Contact may [create the mailing list(s)](https://www.w3.org/Systems/Mail/Request/).
4. The main mailing list is associated with the group via the [Group Service Management](https://www.w3.org/2011/04/dbwg/group-services) interface.
5. Make sure the charter is public (since 2007, charters are public during AC review) and any final edits (e.g., addition of link to page for joining the group) have been made. If the group already exists, the new charter and the old charter should have two different URLs.
6. Customize the ["onboarding" message](https://github.com/w3c/onboarding) that will be sent to participants as they join the group.

All Working Groups and Interest Groups appear in their respective [group list](https://www.w3.org/groups/) and have a public list of participants (except for Interest Groups that are not managed under the W3C Patent Policy).

The W3C Communications Team should try to minimize the number of messages sent to the Advisory Committee, while ensuring that each message is clear. In general, the W3C Communications Team sends one email combining the group approval (W3C Decision) and the Call for Participation.

*Timing:* this takes a week at most.

#### 3.5.2. Organizing the W3C Decision, Call for Participation

The charter shepherd sends a draft announcement (combining W3C Decision and Call for Participation) to the W3C Communications Team ([w3t-comm@w3.org](mailto:w3t-comm@w3.org)) (using the [template](https://www.w3.org/new-doc-from-template?location=%2FTeam%2FTemplates&template=%2Fafs%2Fw3.org%2Fpub%2FWWW%2FTeam%2FTemplates%2Fcfp.html&submit=Continue...) as a starting point, or [sample announcement](https://www.w3.org/Search/Mail/Member/search?keywords=&hdr-1-name=subject&hdr-1-query=call%20for%20participation&index-grp=Member__FULL%20Public__FULL&index-type=t&type-index=w3c-ac-members)). The announcement must indicate:

- Whether the group is approved and its charter end date.
- The URI of the final charter.
- Any substantive changes from the charter that was reviewed. Note: In case of charter renewal, it is useful to include a [HTML diff](https://services.w3.org/htmldiff) between the approved and previous charters.
- A link to the group's public home page.
- A link to a page with information about the mechanism used to join the group (e.g., a URI to the "join" page for a group under the W3C Patent Policy).
- Name and contact information for the Team Contact(s).
- AC review results of the proposed charter.
- If applicable, the rationale for approving the group despite objections, or despite the fact it did not receive reviews [from at least 5% of the Membership](#review_threshold).

In case a charter has new deliverables in-scope, it is useful to include a notice that a 45-day grace period is granted to existing participants of the group under the previous charter, who will then need to re-join the group.

In case the new charter doesn't have new deliverables involving new patent commitment, it is useful to clarify that existing participants under the previous charter will not be required to leave/re-join the group.

Note: Per the [2021-01-13 W3M resolution](https://www.w3.org/2021/01/13-w3m-minutes#t08) (team-only), the calls for participation should include guidance to consider diversity (available from the [template](https://www.w3.org/new-doc-from-template?location=%2FTeam%2FTemplates&template=%2Fafs%2Fw3.org%2Fpub%2FWWW%2FTeam%2FTemplates%2Fcfp.html&submit=Continue...)):

 {% include quote.html content="Please consider diversity when proposing people to participate in W3C groups. Representation from a wider group of people, especially people from under-represented groups, is vital for creating web standards that meet the needs of the wider web community." %}

The announcement must also indicate when applicable:

- For a newly created group, information about the dates of the first face-to-face meeting.

The Head of W3C Communications (or delegate) must approve the W3C Decision and Call for Participation draft announcement before the W3C Communications Team sends it to [w3c-ac-members@w3.org](mailto:w3c-ac-members@w3.org).  
*Timing:* The W3C Communications Team SHOULD announce the W3C Decision within two weeks after the end of the AC review (or send an email setting new expectations). An announcement is sent whether the proposal is approved *or* rejected.

**If the group is *approved***, it is a good practice that the W3C Communications Team also:

- forwards the Call for Participation to the work group's primarily public mailing list (to notify the group, including Invited Experts). The Results of the Call for Review and any member-only information should be elided. See [example](https://lists.w3.org/Archives/Public/public-webassembly/2017Aug/0001.html).
- follows-up on the Advance Notice in public-new-work with a pointer to that announcement. See [example](https://lists.w3.org/Archives/Public/public-new-work/2017Aug/0001.html).

**If the group is *rejected***, it is a good practice that the W3C Communications Team follows-up on the Advance Notice in public-new-work to close the loop for the public record.

#### 3.5.3. After sending the W3C Decision, Call for Participation

After sending the W3C Decision and Call for Participation:

- Make sure that the Groups DB has the latest charter link (the W3C Communications Team [searches](https://www.w3.org/admin/dashboard) the group and edits information to add a new charter).
  
  - [2021-07-12 update](https://lists.w3.org/Archives/Team/w3t-comm/2021Jul/0084.html): associate with a charter the 'W3C document license', the 'W3C software and document license' or both. Which license to be selected is found in the section ‘Licensing’ of the charter. (Rationale: we need to record that bit in the charter admin interface to expose it in our API, in order to check that a document produced by a WG/IG is using the right document license.)
  - 2022-07-19 update: For recharters, deactivate the previous charter when a new charter is valid:

    1. add a note to the previous charter indicating:
    > This charter has been replaced by [a newer version](@@@).
    2. if the previous charter hasn't expired when a new charter is installed, deactivate the previous charter by changing its end date via the [Groups DB](https://www.w3.org/admin/dashboard) interface.
- For groups managed under the W3C Patent Policy (formerly IPP), the W3C Communications Team uses the [Groups DB](https://www.w3.org/admin/dashboard) interface to record that a Call for Participation was sent (so that all links via the Groups DB, including the charter one on the join page, are actually live).
- If the group was "staged", the W3C Communications Team unstages it.
- The public [list of groups](https://www.w3.org/groups/) is automatically updated from the Groups DB, including a 1-paragraph description.
- Team Contact marks the chair(s) as such in the Group's admin view (this automatically adds the chair(s) to the [Chairs' group](https://www.w3.org/admin/othergroups/31972/show) which subscribes them to the chairs@w3.org mailing list).
- Function Lead or Team Contact(s) update the Team's [effort tables](https://www.w3.org/2005/09/manage/).
- For existing groups, Team Contact(s) ensures that Invited Expert statuses are being [reviewed in coordination with the group chair(s)](https://www.w3.org/invited-experts/#review). Team Contacts with questions about how an Invited Expert joins a group should consult the [Team Policy for Invited Experts](https://www.w3.org/2004/02/invited_expert).

Team contacts should look at [how to setup a new group](../tools/new-group.md) once the call for participation is out.

**Note:** When we recharter a work group and the charter scope has changed, we enter the CFP into the Group DB, which triggers messages to the group participants that they must rejoin. If the new charter doesn't have new deliverables involving new patent commitment, do not register the new CFP.

### 3.6. Announcement of extension  {#announce-extension}

When requesting that the W3C Communications Team announce a charter extension, use the [charter extension template](https://www.w3.org/new-doc-from-template?location=%2FTeam%2Ftemplates&template=%2Fafs%2Fw3.org%2Fpub%2FWWW%2FTeam%2FTemplates%2Fcharter-extension.html&submit=Continue...). If the group is developing a new charter, link to the GitHub repo where a new charter is being developed and to the issues link to raise comments.

The W3C Communications Team then:

- Sends extension announcements to w3c-ac-members@w3.org
- ... and later forwards the announcements as FYI to chairs@w3.org
- It is a good practice to forward the extension announcement to the public list of the group, and to follow-up on public-new-work.
- updates the [list of groups](https://www.w3.org/groups/) accordingly.

The Communications Team modifies (or asks the Team Contact) the Charter in place as follows:

- The "End Date" in the table at the top.
- Any update to the Chair(s) (e.g., a Chair resigns or their affiliation changed), Team Contact(s) (e.g., names, FTEs), etc.
- The changes including extension history are documented in the "About this charter" section at the bottom and lists each extension dates and the pairs of from/until dates. (Note: If the group is developing a new charter, link to the GitHub repo of where the new charter is being developed).
- The text "Note: The group will document significant changes from this initial schedule on the group home page." is updated with a link to the group's updated milestones (e.g., on the group's site) to say something like "Note: See changes from this initial schedule on the group home page."
- Fix broken links.

When a group **Chair** is (re)appointed or resigns, shortly before/after the announcement to w3c-ac-members@w3.org \[then forwarded to chairs@w3.org] (sample emails \[[1](https://www.w3.org/Search/Mail/Member/search?keywords=&hdr-1-name=subject&hdr-1-query=appointed&index-grp=Member__FULL%20Public__FULL&index-type=t&type-index=w3c-ac-members)]\[[2](https://www.w3.org/Search/Mail/Member/search?keywords=&hdr-1-name=subject&hdr-1-query=steps%20down&index-grp=Member__FULL%20Public__FULL&index-type=t&type-index=w3c-ac-members)]), The W3C Communications Team (or the Team Contact) modifies the charter, including:

- Update the "Chair" in the table at the top.
- Document changes in "About this charter" section at the bottom.

## 4. Revision history  {#revision-history}

- **2024-01**: Public comments and Formal Objections (including from Members) are now to be sent to public-review-comments@w3.org; various editorial changes.
- **2023-10**: Updated following Process 2023 and reorganized to separate high-level processes from implementation.
- **2012-08**: Added section 3.4 Horizontal Review following [discussion at May 2012 AC meeting on better integration of horizontal working groups](https://www.w3.org/2012/05/15-ac-minutes#item14) and discussion within the Team and Advisory Board.
- **2015-05**: Added pointer to Policy on W3C Group Charter End Dates in "Charter Extension" section.
- **2015-09**: Updates to Process Document section numbers and titles. Removed "Activities" and "Coordination Groups" which are no longer referenced in the [2015 Process Document](https://www.w3.org/2015/Process-20150901/).
- **2016-02**: Updated mostly to reflect that the Groups DB interfaces with IPP and that systeam creates new WGs/IGs; pointed to most recent sample announcement for Director's Decision and Call for Participation; updated workflows to match current practice; further removed or clarified that "Activities" are no longer in Process..
- **2018-01**: Took latest process into account

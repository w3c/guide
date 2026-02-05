---
title: Document Review
toc: true
---
## How to do Wide Review

Getting *early* and *wide* review of a document is very important, yet in practice it can be challenging.  This document provides some best practices for getting document review; it does not define explicit mandatory steps.

See also the [Wide Review](https://www.w3.org/policies/process/#wide-review) section in the W3C Process document.

## When should wide review be requested?

A document is available for review from the moment it is first [published](https://www.w3.org/policies/process/#publishing). Working Groups should [formally address](https://www.w3.org/policies/process/#formally-addressed) any substantive review comment about a technical report in a timely manner.

Wide review should or must be requested:
* After a [First Public Working Draft](https://www.w3.org/policies/process/#first-wd) is published (for most documents).
  
  Working Groups are often reluctant to make substantive changes to a mature
  document, so reviewers should get a chance to send substantive technical
  reviews as early as possible. This is especially important for [horizontal reviews](#how-to-get-horizontal-review).
* Before a document gets advanced to [Candidate Recommendation](https://www.w3.org/policies/process/#transition-cr), gets updated as a [Candidate Recommendation Snapshot](https://www.w3.org/policies/process/#update-requests) or gets updated as a [Recommendation](https://www.w3.org/policies/process/#change-review).
  
  For those, the [W3C Process](https://www.w3.org/policies/process/) requires a Group to show that the specification has received wide review.
* When a document is both reasonably stable and still flexible enough to allow changes where issues are identified.
* When new features are added after a document has already received wide review (perhaps requesting a review limited to the new features).

## Who to ask for wide review?

The objective is to ensure that the entire set of stakeholders of the Web community, including the general public, have  adequate notice of the progress of the Working Group and are genuinely able to perform reviews of and provide comments on the specification. When considering [requests to advance the maturity level of the document](../transitions/), the Team will consider who has been explicitly offered a reasonable opportunity to review the document.

You **must** publish an updated technical report, with the Status of the Document indicating clearly that you're looking for *wide review*, before inviting review from other stakeholders. Our [tooling](https://github.com/w3c/transition-notifier/blob/main/notify.js) monitors publications and propagates notifications to [public-review-announce@w3.org](mailto:public-review-announce@w3.org) automatically (for example, [Candidate Recommendation Snapshot: Payment Request API (Call for Wide Review)](https://lists.w3.org/Archives/Public/public-review-announce/2021Jun/0008.html)).

You should then inform, and request reviews from:

* the groups listed in the WG's charter, especially those who manage
dependencies.
* the groups jointly responsible for a particular document (if any).
* the [horizontal groups](../process/horizontal-groups.md) using the [method described below](#how-to-get-horizontal-review). *Note that sending an email to the public-review-announce list alone is not sufficient to trigger horizontal reviews. You will still need to formally request review from the Horizontal Groups, as described below*
* the general public,  including Web developers, technology providers and implementers, application developers, etc. Consider:
  * sending a dedicated announcement to [public-review-announce@w3.org](mailto:public-review-announce@w3.org) if needed (in case the default notice sent to that list is not enough).
  * using blog posts, social media, or other ways of alerting the public to your document and requesting feedback.
* other groups, at your discretion, even if not in the WG charter, such as other W3C groups, external organizations and SSOs  working on related areas, etc.

**Tip:** consider tracking your wide review progress using a GitHub issue, such as [issue #299 of the Sensors API](https://github.com/w3c/sensors/issues/299). You can then simply point the Team to the issue.

<details id="githubissue" hidden>
  <summary>Generate a meta-issue to track wide review steps in a GitHub repository</summary>
  <p>You may find it useful to create an issue in the GitHub repository of your spec to track your progress. Add the name of your GitHub repository to the field below and hit the "Create GitHub issue" button. This opens the "new issue" form in your repository, and pre-fills the body with review steps as a list of checkboxes.</p>
  <p>
    <form>
    <div class="field">
      <label for="repository">
        <span class="field-label">GitHub repository where issue should be created <span class="required">(Required)</span></span>
      </label>
      <div class="field-hint" id="hint-repository">Repository name format: <code>owner/repo</code> e.g. <code>w3c/foobar</code></div>
      <input type="text" name="repository" id="repository" aria-describedby="hint-repository">
    </div>
    <div><button>Create GitHub issue</button></div>
    </form>
  </p>
  <p><em>Note: You will be able to edit the issue's title and body before it gets created.</em></p>
</details>

The reviews provided by the [horizontal groups](../process/horizontal-groups.md), a subset of a full wide review, do receive special attention and much of the rest of this document focuses on how and when to conduct horizontal reviews.

<span id="how_to_get_horizontal_review"><!-- legacy fragment id --></span>
## How to get horizontal review
When you have published a First Public Working Draft, you should work through available "self-review" materials and request review of your results in at least the following areas.

*Long enough* before you request a transition to CR, you should do the same again, identifying substantive specification changes since the first review. During the [Last Call for Review of Proposed Amendment](https://www.w3.org/policies/process/#change-review), you should also do the same.

The meaning of "Long enough" depends on how many changes there are, how clearly you have explained them, and how much discussion is needed to resolve issues. Pointing to 14 concise points for a small spec means a short time if they are simple fixes, pointing to 900 diffs from commits and hoping people understand them in a 300 page spec means it will take a **long** time to get review, and potentially a long time to also discuss and agree on how to solve the issues. If you have effectively identified issues for review during development and received feedback on them, the review time will probably be shorter. Horizontal review groups sometimes get bogged down; planning in advance is useful.

<dl>
<dt data-type='a11y'>Accessibility</dt>
<dd>
  <span data-step>Work through the <a href="https://w3c.github.io/fast/checklist.html">FAST Checklist</a></span> then
  <span data-step><a href="https://github.com/w3c/a11y-request/issues/new/choose">request a review via GitHub</a> from <a href="https://www.w3.org/WAI/about/groups/apawg/">APA</a></span>
<details>
<summary>Show useful links</summary>
<ul><li> groups
<ul><li> <a href="https://www.w3.org/WAI/about/groups/apawg/">Accessible Platform Architectures Working Group</a>; <a href="https://lists.w3.org/Archives/Public/public-apa/">public-apa</a>; <a href="https://www.w3.org/WAI/APA/wiki/Spec_Review">APA Spec Review tracking</a></li>
<li> <a href="https://www.w3.org/WAI/about/groups/waiig/">Web Accessibility Interest Group</a>; <a href="https://lists.w3.org/Archives/Public/w3c-wai-ig/">w3c-wai-ig</a></li></ul></li>
<li> links
<ul><li> <a href="https://w3c.github.io/apa/fast/checklist.html">Framework for Accessibility in the Specification of Technologies Checklist; APA WG</a></li>
<li> <a href="https://www.w3.org/TR/media-accessibility-reqs/">Media Accessibility User Requirements; PFWG</a></li></ul></li></ul>
</details></dd>

<dt data-type='tag'>Architecture</dt>
<dd>
  <span data-step>Work through <a href="https://tag.w3.org/workmode/">Specification Design Reviews</a></span> then
  <span data-step><a href="https://github.com/w3ctag/design-reviews/issues/new/choose">request a review via GitHub</a> from the <a href="https://www.w3.org/2001/tag/">TAG</a></span>
  <span data-step>If you are developing javascript APIs you may also want to ask <a href="mailto:public-script-coord@w3.org">public-script-coord@w3.org</a>, a technical discussion list shared by W3C and ECMA's TC 39</span>.
<details>
<summary>Show useful links</summary>
<ul><li>groups
<ul><li><a href="https://www.w3.org/2001/tag/">Technical Architecture Group (TAG)</a>; <a href="https://lists.w3.org/Archives/Public/www-tag/">www-tag</a></li></ul></li>
<li>links
<ul><li><a href="https://www.w3.org/2001/tag/doc/webcomponents-design-guidelines/">Guidelines for creating web platform compatible components</a></li>
<li><a href="https://www.w3.org/2001/tag/doc/promises-guide">Writing Promise-Using Specifications</a></li>
<li><a href="https://www.w3.org/TR/design-principles/">Client-side API Design Principles</a></li>
<li><a href="https://www.w3.org/2001/tag/doc/capability-urls/">Good Practices for Capability URLs</a></li>
<li><a href="https://github.com/w3ctag/design-reviews">TAG Repository for reviews</a></li></ul></li></ul>
</details></dd>

<dt data-type='i18n'>Internationalization</dt>
<dd>
  <span data-step>Read the <a href="https://www.w3.org/International/review-request">Request a review</a> page</span>, then
  <span data-step>work through the <a href="https://www.w3.org/International/i18n-drafts/techniques/shortchecklist">Short Checklist</a></span>, then
  <span data-step><a href="https://github.com/w3c/i18n-request/issues/new/choose">request a review via GitHub</a></span>.
<details>
<summary>Show useful links</summary>
<ul><li>groups
<ul><li><a href="https://www.w3.org/International/">Internationalization Working Group</a>; <a href="https://lists.w3.org/Archives/Public/www-international/">www-international</a> Reviews by Internationalization generally also involve the <a href="https://www.w3.org/International/i18n-activity/i18n-ig/">Interest Group</a>, but are arranged through the WG.</li></ul></li>
<li>links
<ul><li><a href="https://www.w3.org/International/review-request">Request a review</a></li>
<li><a href="https://www.w3.org/International/i18n-drafts/techniques/shortchecklist">Self-Review Questionnaire</a>.</li>
<li><a href="https://www.w3.org/TR/international-specs/">Internationalization Best Practices for Spec Developers</a></li>
<li><a href="https://www.w3.org/International/reviews/projReview.html">A brief overview of the review process</a> (with pictures)</li>
<li>The <a href="https://github.com/orgs/w3c/projects/91">I18N Horizontal Review Radar</a> shows the status of open reviews.</li></ul></li></ul>
</details>
</dd>

<dt data-type='privacy'>Privacy</dt>
<dd>
  <span data-step>Write a "Privacy Considerations" section for your document, taking into account the <a href="https://www.w3.org/TR/security-privacy-questionnaire/">Self-Review Questionnaire: Security and Privacy</a>, <a href="https://www.w3.org/TR/fingerprinting-guidance/">Mitigating Browser Fingerprinting in Web Specifications</a>, and <a href="https://www.rfc-editor.org/rfc/rfc6973.html">RFC6973</a></span> then
  <span data-step><a href="https://github.com/w3cping/privacy-request/issues/new/choose">request a review via GitHub</a> from the <a href="https://www.w3.org/groups/wg/privacy/">Privacy Working Group</a></span>.
<details>
<summary>Show useful links</summary>
<ul>
<li>groups
<ul><li> <a href="https://www.w3.org/groups/wg/privacy/">Privacy Working Group</a>; <a href="https://lists.w3.org/Archives/Public/public-privacy/">public-privacy</a></li></ul></li>
<li>links
<ul>
<li><a href="https://www.w3.org/TR/security-privacy-questionnaire/"><cite>Self-Review Questionnaire: Security and Privacy</cite>, published by the TAG and PING</a></li>
<li><a href="https://www.w3.org/TR/fingerprinting-guidance/">Mitigating Browser Fingerprinting in Web Specifications</a></li>
<li><a href="https://www.rfc-editor.org/rfc/rfc6973.html">Privacy Considerations for Internet Protocols (RFC6973)</a>, particularly <a href="https://www.rfc-editor.org/rfc/rfc6973.html#section-7">Section 7</a></li>
<li><a href="https://www.rfc-editor.org/rfc/rfc3552.html">Guidelines for Writing RFC Text on Security Considerations (RFC3552)</a>, particularly <a href="https://www.rfc-editor.org/rfc/rfc3552.html#section-5">Section 5</a></li>
</ul></li></ul>
</details>
</dd>

<dt data-type='security'>Security</dt>
<dd>
  <span data-step>Write a "Security Considerations" section for your document, taking into account the <a href="https://www.w3.org/TR/security-privacy-questionnaire/">Self-Review Questionnaire: Security and Privacy</a></span>, then
  <span data-step><a href="https://github.com/w3c/security-request/issues/new/choose">request a review via GitHub</a></span>
<details>
<summary>Show useful links</summary>
<ul><li>groups
<ul><li><a href="https://www.w3.org/groups/ig/security/">Security Interest Group</a>; <a href="https://lists.w3.org/Archives/Public/public-security/">public-security</a></li></ul></li>
<li>links
<ul><li> <a href="https://www.w3.org/TR/security-privacy-questionnaire/"><cite>Self-Review Questionnaire: Security and Privacy</cite>, published by the TAG and PING</a></li>
<li><a href="https://www.w3.org/TR/fingerprinting-guidance/">Mitigating Browser Fingerprinting in Web Specifications</a></li>
<li><a href="https://www.rfc-editor.org/rfc/rfc3552.html">Guidelines for Writing RFC Text on Security Considerations (RFC3552)</a>, particularly <a href="https://www.rfc-editor.org/rfc/rfc3552.html#section-5">Section 5</a></li></ul></li></ul>
</details>
</dd>
</dl>

You should familiarize yourself with the rest of this document. This section is just a quick reminder for when you are in the middle of doing the work.

Recognize that horizontal review groups may be resource limited and may only be able to do one review or may have difficulty scheduling your review quickly.  Give them as much time as you can, consistent with asking for review while it is still reasonable to change the technology to accommodate the issues they find.

## Working with Horizontal Review labels

Applying these labels doesn't replace the need to schedule a review of your spec at an appropriate time. (See [How to Get Horizontal Review](#how-to-get-horizontal-review) above.) Horizontal groups participants can find [detailed process information here](https://w3c.github.io/horizontal-issue-tracker/HOWTO).

### Day-to-day use of labels

Apply the <span class="tag">\*-tracker</span> label in your own repository to draw a horizontal review group’s attention to an issue in one of your own repositories. Horizontal review groups may also apply the label if they are interested in tracking a particular issue.  Tooling will automatically notify the horizontal group that you attached the label.

If you want some specific advice from the horizontal group, describe that request in the issue thread.

Horizontal review groups may apply the <span class="tag">\*-needs-resolution</span> label to issues they expect to be resolved before the specification moves to a new maturity level. Working Groups must not remove or add this label (not even when you close your issue).

If the [horizontal group](../process/horizontal-groups.md) believes that an issue with a <span class="githublabel">\*-tracker</span> label needs to be resolved before a transition, they may apply a <span class="githublabel">\*-needs-resolution</span> label to the issue. Automatic tooling will later remove the <span class="githublabel">\*-tracker</span> label.
 
If you close an issue with a <span class="tag">\*-tracker</span> or <span class="tag">\*-needs-resolution</span> label attached, do not remove the label.  Keeping the label maintains the tracking if the issue is reopened, but also provides potentially useful information about what was tracked. (Closed issues in your repository have no effect on tools that check for unresolved issues.)
 
At the end of a review, and before attempting to transition the spec, you should clarify that a resolution is described for all of the issues with a <span class="tag">\*-needs-resolution</span> label, and check that the horizontal group is aware of those resolutions. You don't have to do this for issues with the <span class="tag">\*-tracker</span> label. (The horizontal group was only tracking those issues, not expecting a particular resolution.)
 
Note that the label may be applied by setting it directly on the issue if you have proper rights, or by appending it preceded with a PLUS sign (`+`) in the issue description, `+*-tracker` or `+*-needs-resolution`.

### What happens with `*-needs-resolution` issues at transition?

When a Working Group requests a new Maturity level, the transition **will not be approved** if a horizontal group has an open `*-needs-resolution` issue showing on the [tracker boards](https://www.w3.org/PM/horizontal/). Note that the tracker monitors the horizontal group's *copy* of the issue. Before requesting a new Maturity level, the Working Group is advised to review the tracker and contact the horizontal group to close any lingering issues.

### What happens to unresolved issues marked `*-needs-resolution`?

As lead technical architect, the W3C Council is tasked (among many things) to assess consensus within W3C for architectural issues and to decide on the outcome of [Formal Objections](https://www.w3.org/policies/process/#FormalObjection). When a horizontal issue gets flagged as `*-needs-resolution` and a Group chooses to request a new Maturity level despite the lack of consensus with the horizontal group, it is the task of the W3C Team to assess the issue and the outcome of the request. A horizontal group MAY choose to elevate an horizontal issue as a Formal Objection to elevate further the importance of an issue per the W3C Process.

In the case where an horizontal issue hasn’t been addressed and the document was allowed to move forward, it is recommended that the issue remains open in the horizontal group repository (it MAY get closed in the specification repository unless the W3C Team requests otherwise). Some issues may take years to get resolved, but that doesn’t mean those should be forgotten.

## Issue trackers

The horizontal groups maintain repositories containing issues that track those raised in the WG repos. You can see a list of tracked issues on the [tracker boards](https://w3c.github.io/horizontal-issue-tracker/index), one per horizontal area.

Horizontal groups participants can find [detailed process information here](https://w3c.github.io/horizontal-issue-tracker/HOWTO).

## FAQ

Is *security* and/or *privacy* review mandatory before a *First Public Working Draft* is published?
: It is **strongly encouraged** but not required. Resolving security and privacy issues can require significant changes in specs, so it helps to identify them early.

Does a group need to prove its documents have had wide review before proceeding to CR?
: Yes, since Process-2019.

How does a group prove its documents have had wide review before proceeding to CR?
: Requests to the horizontal review groups will appear in Github, as above.

  Keep a Disposition of Comments (DoC) Document showing comments received and a summary of their resolution.

Is there such a thing as too many reviews?
: Not really

Is it possible to make too many requests for review?
: Yes. To help the review groups, only request updated reviews when substantive changes have been made, and clearly identify the changes since the last review.

  This is also the reason that the Process clearly suggests there should be [<abbr title="Technical report">TR</abbr>](https://www.w3.org/TR/) Working Drafts published when there are "significant changes that would benefit from review beyond the Working Group", rather than every day or only twice in the life of a spec…

  TR Working Drafts are also useful for reviews since they provide a dated snapshot which can be recovered when the review comments are being discussed. Trying to discuss review comments against a document which has changed out of all recognition can be a frustrating and inefficient experience.

## Common mistakes when making a transition request

1. If you make substantive changes, you'll need to do a wide review for those  before you move forward to the [next maturity stage](../documentreview/#who-to-ask-for-wide-review).
1. Never ever exclude some [horizontal groups](../process/horizontal-groups.md) from your review requests because you concluded it was irrelevant for them or they haven't responded to your last request.
   
   Let them make the decision that something is irrelevant to their field of expertise instead. You're welcome to time out if you don't hear back, and request to move forward anyway.
1. Publish a Working Draft or a Candidate Recommendation Draft when asking for reviews.
   It's better for a Group to miss the fact that you fixed an issue in your editor's draft than the Team missing the fact you made an unreviewed substantive change in your editor's draft.
1. Don't flag your issues with one of those <span class="tag">\*-needs-resolution</span> labels, and don't remove one which has been applied (you *can* close the issue though, if it is resolved).

   Those are intended solely to be used by [horizontal groups](../process/horizontal-groups.md) to [bring special attention](../documentreview/#what-happens-to-unresolved-issues-marked--needs-resolution).
1. Don't assume that the horizontal group will be able to schedule and complete a review within 2 weeks so that you can proceed to CR.
   
   They may not even be able to find someone with availability to do the review in that time, and then they need a week or two to discuss their response after the review, and then they'll send you comments that may require you to make substantive changes.

## Enhancement Requests

See the [Document Review Dashboard](https://www.w3.org/wiki/Dashboard#Document_Review_Dashboard) document for information about creating a dashboard type service to facilitate document reviews.

<style>
#githubissue {
  width: 70%;
  margin: auto;
  border-bottom: 3px solid #005A9C;
  padding: 1em 1em;
  background: #e2edfe;
}
</style>
<script src="create-github-issue.js" type="module"></script>

---
title: W3C Recommendation Track Readiness Best Practices
toc: true
---

## Status {#status}

October 2023: Document updated to account for [changes in Process 2023](https://www.w3.org/2023/Process-20230612/#changes-2021), in particular the Director-free changes.

August 2016: This document was developed by a task force of the [W3C Advisory Board](https://www.w3.org/2002/ab/), socialised to the W3C Advisory Committee and W3C Team.

This [document lives in Github](https://github.com/w3c/standards-track/blob/master/index.html), where changes can be tracked and pull requests are welcome. Feedback and comments are welcome. Please use [Github issues](https://github.com/w3c/standards-track/issues).

## Problem Statement {#problem}

The practices proposed in this document are intended to address some specific problems:

W3C wastes resources, and at worst tarnishes its credibility, when it invests in standardization efforts that end up going nowhere

## Overview of the Proposed Solution {#solution}

W3C should more tightly focus its formal standardization effors on specifications that are most likely to get consensus within the consortium and be used on the real Web. This document proposes to do that by offering a short list of criteria to consider when evaluating proposals to move specification work to the Recommendation track. That includes drafting the Deliverables section of a WG charter, but especially when publishing a FPWD.

These are offered as guidelines, not a checklist of required items in every proposal. Meeting all the guidelines will not guarantee the [W3C decision](https://www.w3.org/policies/process/#def-w3c-decision) for [approval of the charter](https://www.w3.org/policies/process/#cfp), or [advancement to FPWD](https://www.w3.org/policies/process/#maturity-stages), nor will failing to meet some block approval. *The goal of this effort is to add more structure and predictability to Rec track decisions while allowing plenty of room for innovtion by WGs and determination of W3C Decisions.*

The target audience for this document includes:

- The Team and Advisory Committee, when evaluating proposals to create new Working Groups or rechartering existing Working Groups to put new work in scope (e.g. how specs reach maturation before FPWD), and in reviewing Candidate Recommendations;
- Working Group Chairs, when determining whether to publish First Public Working Drafts of specs that are in a group's chartered scope,

This document attempts to strike a balance between two classes of criteria:

- "aspirational" considerations such as whether the spec addresses an un-met need or expands the potential of the Web
- "empirical" considerations such as whether drafts of the spec have momentum with implementers and early adopters

Discussion at the [October 2015 Advisory Committee meeting](https://www.w3.org/2015/10/27-ac-minutes.html#item02) indicated disparate opinions about whether to insist that proposed work should meet empirical criteria before being put on the Recommendation track.

Arguments raised in favor of mandatory incubation included:

- The "aspirational" approach often assumes that whatever a WG produces will be implemented, but WGs without a reality check from implementers tend to create specs that don't get used in the real world.
- Recommendation track documents that don't get implemented or widely used do not advance W3C's mission or enhance its reputation
- The industry overall is moving toward more data-driven decision making
- It's useful to identify *what* criteria are prerequisites for a Recommendation Track effort, but not to prescribe *how* those criteria are to be met. So incubation in a CG is just one way to meet the criteria, not the only way.
  
  - The Working Groups Process is not well suited to innovation of new ideas; the formal consensus process is most effective at "polishing" solid proposals to make them more clear, specific, and useful across users with different languages, cultures, and abilities.
  - The REC track sometimes confers unwarranted legitimacy to proposals that do not have buy-in from the stakeholders needed get it to Recommendation and deployed on the real Web.

Arguments against focused on mandating using W3C Community Groups to incubate proposals until they met empirical criteria included:

- Incubation isn't a silver bullet to be applied to every situation
- If a CG incubates a spec that gets implemented in the browsers, it's hard to motivate proponents to take it to a WG for broad review
- Requiring external incubation in a venue that doesn't require broad consensus could lead to key technical decisions being made in forums dominated by a few, with "level playing field" discussion beginning only when implementation momentum makes change difficult.
- There may be gaps in the patent commitment if all spec contributors to the incubation don't join the WG
- It may be valuable for W3C team to help develop one or more proposals in the incubation stage

The readiness criteria below outline best practices for finding an appropriate balance among these perspectives. They encourage all involved in advancing work to the Recommendation track to gather more evidence to drive the decision and to think carefully about how to interpret it. They do not mandate any one mode of gathering that evidence or an algorithm to assess it.

## Readiness Criteria {#criteria}

The criteria here are used to evaluate whether a technical specification development effort is ready for the W3C Recommendation Track. No single factor is decisive, and this document avoids [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) "MUST" and "SHOULD" terminology, and should not be a taken as a checklist of necessary or sufficient criteria. Nevertheless, some criteria are noted as "strongly recommended", and, if not met, an explanation of why they don't apply in a particular situation would facilitate the [W3C decision](https://www.w3.org/policies/process/#decision-types). Different cases will involve different combinations of these factors. In determining whether to approve moving work to the Recommendation track, the Team may consider other factors not listed in this document as well.

Assessing whether proposed work is likely to fulfull the W3C mission to [lead the web to its full potential](https://www.w3.org/mission/) is the traditional criterion the Team and Advisory Committee use to evaluate whether to start a working group or advance a specification. While this is "aspirational", it requires judgment that balances the future potential of the Web alongside the need for real developers to make the Web work in practice. This document seeks to make the factors that go into this judgment more explicit and generally applicable.

The "empirical" criteria are inspired largely by the experience of some open source browser projects that use an [intent to implement](https://docs.google.com/document/d/1vlTlsQKThwaX0-lj_iZbVTzyqY7LioqERU8DK3u3XjI/edit) process to build the case for shipping a new feature. This document refines this approach to apply to Recommendation Track transition decisions. The [Web Platform Incubator Community Group](https://www.w3.org/community/wicg/) has adopted something similar to [determine when a spec under incubation is ready to propose to a Working Group](https://wicg.github.io/admin/intent-to-migrate.html).

### Is there a clear problem statement?

*Strongly Recommended*: The proposal identifies the real-world problem this work would address, and why existing solutions are inadequate.  
What are web developers forced to do without this feature being available in a standardized way? What fraction of web sites, hybrid applications, data publishers, etc. are using a similar capability in a non-standardized way? How would users benefit from this feature if standardized?

### Are success criteria explicit?

*Strongly Recommended*: The proposal enumerates the types of products (browsers, servers, frameworks, applications...) would need to support the spec for it to be successful, and indicate what degree of critical mass would be needed.  
Is this spec serving a specialized community and only that community needs to implement and adopt it for it to be successful? Or are there critical ecosystem dependencies, e.g. the spec must be deployed on both the cloud/server and browser/client, or must be supported both in products for producers and consumers of web content, to be really useful?

### Is there a well-socialized proposal to address the problem?

*Strongly Recommended*: An initial draft of the technical specification has been written down and socialized in a community where potential users, web site / app developer, framework/took developer, and core technology implementers are represented. The state of community consensus around the initial draft should be documented: Did potential users and key implementers actively participate in the discussion? Are there any indications that social or economic pressure was applied to suppress dissent? Did the discussion generate sustained expressions of opposition or unwillingness to implement / use / make patent commitments from key stakeholders? If there are indications that consensus in a WG will be difficult to achieve, proposers are well advised to make a persuasive case for how the proposed Recommendation Track work can be successful.

### Has the proposed spec been incubated to reasonable maturity?

*Strongly Recommended*: Charters do not list specs as deliverables, and WGs do not publish FWPDs, until there is rough consensus across stakeholders that the spec solves a real problem, is likely to be implemented, and is likely to be used on the Web. This consensus could emerge from an incubation phase in WICG or another CG, or in a WG that has an established culture of taking and vetting suggestions from its public mailing list.

The language in the [Web Platform WG charter](https://w3c.github.io/charter-html/group-charter.html#deliverables) describes a one community's practice:

{% include quote.html content="The Working Group will not adopt new proposals until they have matured through the Web Platform Incubator Community Group or another similar incubation phase." %}

If work is incubated in a CG, it is important to assess the degree of consensus behind a spec as well as its maturity. While CG's are not required to work by consensus, those proposing work for the Recommendation track should favor proposals that did get strong and broad consensus during the incubation phase, and make W3C staff aware of points of contention, rival proposals, etc. An optional [W3C Community Group Charter Template](https://github.com/w3c/cg-charter/blob/gh-pages/CGCharter.html) contains provisions designed to promote fairness in CGs. CGs are encouraged to consider using the template as a starting point.

The key word is "matured", and the key milestone is First Public Working Draft (FPWD). It may be inefficient to charter WGs that start with a "blank sheet of paper" or multiple proposals with different use cases, but it hurts W3C's credibility to publish a formal Technical Report that specifies a technology that does NOT meet clear user needs in a way that has a good chance to be implemented in products, tools, websites, and web applications. However the incubation phase is done, and whichever of these criteria are applied before proposing standardization or developing a charter,this document strongly recommends that only "mature" specs be published as FPWDs.

### Is it clear the proposers are not seeking a rubber stamp from W3C?

*Strongly Recommended*: Proposers of Recommendation-track work should be prepared for the Working Group to make substantive changes to the initial draft in response to feedback. A W3C Recommendation signifies that a specification has broad consensus across the membership of W3C. It is particularly important to ensure that a spec both serves a real mainstream need *and* is inclusive of a diverse, worldwide community using different languages, with various levels of ability, and who interact with various levels of trust. Likewise, proposed Recommendation-track work should not promote

### Are there appropriate expressions of interest?

The proposal points to statements of support from key stakeholders about the value proposition for the feature it describes. Is there strong demand from potential users? Is there a critical mass of implementers tentatively interested in shipping this feature if standardized? Are there prototype / polyfill implementations that are used in experimental apps / sites that the target audience already finds useful?

### Is there actual evidence to back up the answers?

The proposal describes what implementation and user experience is there to back up the points above. What fraction of websites are implementing a similar feature in a non-standardized way? How many users would potentially benefit from this feature if standardized? Hard data is preferred, but estimates backed up by detailed explanations are acceptable.

### Risks?

The proposal considers whether standardizing the spec could create more problems than it solves. What are the potential downsides of having this feature standardized ...could it undermine security, privacy, accessibility, etc. if broadly deployed? Are there scenarios under which we would regret standardizing this feature?

### Is the timing right?

The optimal timing for a transition to the Recommendation Track can be described as:

- NO SOONER than the bulk of the criteria above are met.
- NO LATER THAN a point where the spec is still fluid, and not frozen into shipping code used on many websites.

If the answer “the ship has sailed”, proposers should explain how they propose to mitigate the situation without turning back the clock, and what a Recommendation Track document could do to improve the situation. For example, clearly documenting what already interoperates, and getting broader patent commitments on the interoperable behavior arguably has value.

### Clear RF licensing commitments?

W3C seeks to issue Recommendations that can be implemented and used on a [Royalty-Free](https://www.w3.org/policies/patent-policy/#sec-Requirements) basis.

1. Are the technologies in the initial available under terms that are compatible with the [W3C Royalty-Free licensing requirements](https://www.w3.org/policies/patent-policy/#sec-Requirements)?
2. Have those who seem most likely to have relevant patents made commitments to license them on royalty-free terms?
3. Is the provenance of substantive contributions to the draft reasonably clear?

### Team Engagement?

It is advisable for groups considering Recommendation Track work to consult with the W3C Team early enough in the process for them to advise about potential problems and workarounds, and help draft a formal proposal.

Working Groups and Interest Groups have Staff Contacts they can use for this purpose. Community Groups generally do not (see [Team support for CGs](https://www.w3.org/2016/04/cg-support/)), but CG participants are encouraged to reach out to the [W3C staff](https://www.w3.org/staff/) well in advance of proposing a transition to the Recommendation Track.

## Process Considerations {#process}

Discussion about these guidelines has generated a number of questions about how they relate to the W3C process and the Team's existing practices.  
They are out of scope for this document, but they are listed for reference:

### Granularity

Should the considerations above be applied at at the specification level or the feature level?

### Charter Scopes and Deliverables

When chartering a new WG, is it appropriate to put in scope a number of features that are mostly "aspirational" and put in the deliverables section only those that meet most of the criteria above?

When an incubator spec is ready to move to a WG, does it wait (possibly a couple of years) to get into a WG Charter or are is the expectation that WGs would re-charter to take on incubated spec proposals?

Or is the best practice to make the *scope* of charters broad enough to encompass work that may be incubated during the charter's lifetime, and the WG would only take up an actual deliverable once it is incubated?

### Community Groups and the W3C Process

How can we ensure that concerns raised at the TPAC 2015 AC meeting and the AC Forum thread on Mandatory Incubation are addressed in the process or practice of W3C?

Should the Process Document describe a role for CGs in getting specifications ready to be standardized? Should the Community and Business Group Process say more about the importance of working by consensus, at least for specifications that are to be proposed for the Recommendation Track?

### What to do when there is interest from users but not implementers?

Raised in the [AC discussions](https://lists.w3.org/Archives/Member/w3c-ac-forum/2016JanMar/0013.html).  
Should the Process Document do more to describe a role for Interest Groups in developing use cases for new Recommendations, and perhaps working in tandem with one or more Community Groups to develop credible technical proposals to address those use cases?

## Conclusion {#conclusion}

The criteria above suggest that Recommendation Track work begin when there are satisfactory answers to 3 basic questions:

- Does the work address a real un-met need or missed opportunity for the Web?
- Does the work start from a concrete proposal that has been socialized with key stakeholders but doesn't discriminate against others?
- Does standardizing the proposed spec have clear support from those who would need to implement and use the spec for it to be successful?

---
title: Normative References
toc: true
---

## 1. Purpose {#Purpose}

Normative references between specifications are typically references to established standards previously published by recognized groups or to work in parallel in W3C. As a W3C specification progresses toward Recommendation such normative references rarely raise concern provided the referenced specification is stable and has licensing terms that are consistent with royalty-free implementation of W3C Recommendations, or the parallel W3C work is proceeding on a similar schedule. Borderline cases arise when a specification contains a normative reference to another specification that is not yet an established standard or that has licensing restrictions that may interfere with the intended use of a W3C Recommendation.

This document explains considerations the Team take into account when evaluating normative references from W3C documents at transitions on the [W3C Recommendation track](https://www.w3.org/policies/process/#Reports). These considerations may be used by the Working Group while evaluating the risk associated with specific design choices during the group’s deliberations. The Team may refer to this document when a transition request is being decided.

At a high level, when a W3C specification has normative references to other documents the Team considers 4 factors: stability, schedule, licensing and availability. Any of the factors described in this document are fodder for Team consideration. No single factor is decisive. Different cases will involve different combinations of these factors. The Team may consider other factors not listed in this document as well; e.g. the likelihood that W3C may wish to submit the Recommendation to ISO and the PAS criteria for normative references.

## 2. Stability {#stability}

The Team considers the stability of the referenced documents by evaluating the probability that the referenced documents will change and in which timeframe. In the event that the referenced document will change in a way that is not backward compatible, the risks to deployed resources(deployed markup, other standards, documents, code, products, applications, …) will be considered as well as associated recovery strategies.

There are several factors that the Team needs to consider as part of a stability assessment.

### 2.1 External organizations {#orgs}

Who produced the document?

1. Is it produced by a group that the Team believes follows the [OpenStand principles](https://open-stand.org/about-us/principles/)?
1. Is the normative version of the referenced document available in English? If not, is there an English translation?
1. Is the referenced document available on the Web at no cost and without limitation?

### 2.2 Stability of the referenced document {#whole}

What is the stability of the referenced document as a whole?

1. What stability claims do the organization and group who published the referenced document make about that document?
   
   **For example**, *in the case of a reference to a W3C document, is that document not yet a Recommendation?*
   
   **For example**, *does the document have an explicit and clear stability statement readily apparent to its readers and near to the start of the document?*

1. Is the referenced document subject to change, how often, and to what degree? Are there specific dated and/or versioned references?
   
   **For example**, *in the case of a document that has both stable and unstable sections, is each section clearly labeled as "stable" vs. "in progress" vs "proposal"*.

1. What is the change control policy for the referenced document?

### 2.3 Stability of the referenced part(s) {#parts}

What is the stability of the referenced part(s)?

1. How specific is the reference? Finer grained precise references are easier to evaluate.
   
   **For example**, *in the case of a document that has clearly identified stable and unstable sections, do the stable sections have fragment identifiers such that a normative reference could choose to refer only to those stable sections?*

1. Was the referenced part previously published in a W3C Recommendation or other standard?
   
   **For example**, *the name of the `Document` interface in DOM4 is also in the DOM Level 3 Core Recommendation.

1. Have the organization and group who published the referenced document reviewed and approved the way the referenced part is used and referenced?*

### 2.4 Nature of the dependency {#nature}

What is the nature of the dependency on the referenced part(s)?

1. How is the referenced part used?
   
   Is the reference to the name of an interface or to a definition without relying on details? (so that any changes would have no impact on the source of the reference)

1. Who is impacted by the referenced part?
   
   Is the reference to something that is normative to implementors of the specification or normative to users of implementations of the specification?
      
   **For example**, *if the referenced document changes:*
      
   - *Will implementers of the W3C specification need to change an implementation of an algorithm specified in the referenced document? Users may be affected as a result of changes in the implementation. (eg an encryption algorithm)*
   - *Will the text of the W3C specification need to be revised to follow a new grammar from a referenced document? Implementers and users may be affected if the grammar is exposed (eg change in lexical representations of XML Schema datatypes).*
   - *How will implementors and users be impacted if a term used in a W3C specification is defined in a referenced document and the definition changes? The W3C specification may be independent of the details of the definition; however, implementers and users may be impacted by the change. (eg URL, well-formed XML)*

1. If a change impacts deployed resources, what will be the recovery strategy?

### 2.5 Status of implementations {#impls}

What is the status of the implementation of the referenced part(s)?

1. What is the deployment of the referenced part(s)?
1. Are there tests and test results for the referenced part(s)?

## 3. Schedule {#schedule}

What are the agreed milestones for the W3C specification?

1. What opportunities will be missed if the transition must be postponed due to questions about a normative reference?
1. What would be the costs of delaying the transition?

## 4. Licensing {#licensing}

W3C seeks to issue Recommendations that can be implemented on a [Royalty-Free](https://www.w3.org/policies/patent-policy/#sec-Requirements) basis.

What are the licensing terms of the referenced documents?

1. Are the technologies in the referenced parts available under terms that are compatible with the [W3C Royalty-Free licensing requirements](https://www.w3.org/policies/patent-policy/#sec-Requirements)?
1. What are the risks that the referenced part(s) may be encumbered by patent(s)?
1. What are the policies identifying the rights and obligations of implementors of the referenced document that apply to implementors of the W3C specification?
1. Does the reference conform to the normative referencing policy of the organization who published the referenced document?
1. What normative references are made by the referenced document and are the licensing terms of those technologies compatible with 1‒3 above?
1. In the case of W3C documents, is there an open exclusion opportunity on the referenced document?

**Note:** The experimental [normative references checker](https://labs.w3.org/normative-references/) can be used to identify which references are or should be normative in your document.

## 5. Availability {#availability}

When a W3C specification depends normatively on a specification that is not freely readable, that dependency can make the resulting W3C work harder to review, harder to implement, and less "accessible to all."
Specifications which are only available to members of some organization, only available by signing a legal agreement, or only available by paying a fee, are not considered **freely available**.

### 5.1 Requirements

In general, and consistent with the Modern Paradigm for Standards ([OpenStand principles](https://open-stand.org/about-us/principles/)), W3C does not allow standards-track specifications to make normative references to specifications which are not **freely available**.

If a specification is not freely available, but another specification is technically aligned with it (such that implementing one is equivalent to implementing the other) then the freely available specification should be the normative reference. The non-freely available specification should be added as an informative reference, and the specification should note that they are technically equivalent.
.
### 5.2 Exceptions

In exceptional circumstances, which must be clearly documented on a case by case basis, W3C _may_ allow a specification to normatively reference a specification which is not freely available, if the cost of excluding it it is considered to outweigh the cost of referencing it.

Any exception must be justified on a case-by-case basis and should be limited to situations where the referenced specification contributes critical functionality to the W3C specification that cannot reasonably be achieved by referencing a freely accessible alternative.

   **For example**, if an external specification is already central to existing deployment, or broad interoperability requirements

For each axceptional normative reference, the group producing the specification must document (for example, in the transition request)

1. why the referenced specification is necessary;

2. whether a freely accessible alternative exists;

3. what functionality would be lost if the reference were removed;

4. who would be unable to review or implement the W3C specification because of the reference;

5. what mitigation steps are available, including informative summaries, liaison work, requests for public availability, or narrower references to only the required portions of the external specification.

   **For example**, liaison requests from W3C to some other standards organization, asking that a specific specification be made freely available so that it may be normatively referenced by W3C, have several times resulted in the specification becoming freely available.


## Appendix I : Stability Evaluation of HTML and DOM Living Standards {#AppendixI}

The guidelines in [section 2](#stability) are evaluated for references from W3C specifications to the WHATWG HTML and DOM Living Standards as follows:

- The factors listed in sections 2.1 and 2.2 are deemed to have been met.
- The factors in sections 2.3, 2.4, and 2.5 will be deemed to have been met for specific features when implementation experience has been demonstrated per [W3C Process section 6.2.4](https://www.w3.org/policies/process/#implementation-experience) for each referenced feature.

For HTML Recommendations produced jointly by WHATWG and W3C, the DOM Living Standard is normatively referenceable.

For DOM Recommendations produced jointly by WHATWG and W3C, the HTML Living Standard is normatively referenceable.

## Change History

- **2026-07-24**: Add free availability as a requirement for normative references.
- **2023-10-23**: Move document to GitHub. Update to current, 2023 Process.
- **2020-10-30**: Update W3C Recommendation track citation to the current W3C Process. Update Patent Policy reference to the current version and correct a fragment id. Clarify the intent regarding backwards compatibility in the Stability section introduction.
- **2019-06-14**: Correct a mailto: reference. Update W3C Recommendation track citation to the 2019 version. Add Appendix I.
- **2018-04-17**: Update W3C Recommendation track citation to the 2018 version, note that the checker is experimental.
- **2018-02-07**: Added a note about the normative reference checker.
- **2014-09-11**: Update W3C Recommendation track citation to the 2014 version.
- **2015-04-06**: Added a second example in 2.2.1, and an example in 2.2.2 and in 2.3.1.
- **2013-10-18**: Distributed to the W3C Advisory Committee and Chairs for comment on 18 October 2013.

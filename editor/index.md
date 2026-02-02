---
title: W3C Editors' Home Page
toc: true
---

> Every Technical Report published as part of the Technical Report development process is edited by one or more editors appointed by a [Group Chair](../chair/). It is the responsibility of these editors to ensure that the decisions of the Group are correctly reflected in subsequent drafts of the technical report. ([Publication of Technical Reports, W3C Process](https://www.w3.org/policies/process/#publication))

## Introduction {#intro}

One of the main accomplishments at W3C is to write specifications and create standards out of them. While the Working Groups at large are responsible for building consensus on the technical decisions, the editors have the heavy responsibility of transforming these decisions into actual specifications.

This page tries to gather resources that can help editors do their job: documentation, tools, tutorials, etc. If you know other resources that would benefit editors by being listed here, please inform the W3C Communication Team at [w3t-comm@w3.org](mailto:w3t-comm@w3.org).

## Where to start? {#start}

If you are a newly appointed editor in your Working Group, here is some advice that should be useful to get you started.

- Get an [idea of the role of an editor](role.md) at W3C
- Check the most popular editing tools: [Bikeshed](https://speced.github.io/bikeshed/), [respec](https://respec.org/docs/)
- When using Github, check [Using GitHub for Spec Work](../github/specs.md) and [Workflow for editors and other contributors](../github/workflow.md)
- [How to Organize a Recommendation Track Transition](../transitions/) explains the process to get a document published as a technical report. The [step finder](../transitions/nextstep.md) will help you finding which transition to do next and what the requirements are.
- [Pubrules](https://www.w3.org/pubrules/) ([publication requirements](https://www.w3.org/pubrules/doc)) and links to related policies (e.g., [namespaces](namespaces.md), [media type registration](mediatypes.md), [version management](versioning.md), and [in-place modifications](standards-track/republishing.md)). See also [Pubrules issue management](https://github.com/w3c/specberus/issues)
- Publications can only happen on Tuesdays and Thursdays ([Member-only archive of announcement](https://lists.w3.org/Archives/Member/chairs/2009JanMar/0192.html)), unless you use the [automated publication system](https://github.com/w3c/echidna/wiki)
- Review [WCAG](https://www.w3.org/TR/WCAG/)
- All W3C editors are invited to join the [publicly archived mailing list &lt;spec-prod@w3.org&gt;](https://lists.w3.org/Archives/Public/spec-prod/) to share and discuss the techniques and tools used to produce W3C specifications.

## Guidelines on W3C specifications editing {#quality}

W3C has developed a set of resources giving advices and guidelines on editing W3C specifications in varous domains:

- The [W3C Manual of Style](../manual-of-style/) is a collection of rules you're invited to follow to make your document clearer and adapted to the common style at W3C.
- Begun in 1992 and only a little out of date, the [Style Guide for online hypertext](https://www.w3.org/Provider/Style/) by Tim Berners-Lee is a good start on writing for the Web; see also Jakob Nielsen's [How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/)
- The [QA Framework: Specification Guidelines](https://www.w3.org/TR/qaframe-spec/) from the W3C Quality Assurance Activity are a work in progress that became a Candidate Recommendation in November 2003.
- The Team has guidelines for a [style for group-internal drafts](editors-draft.md) to avoid confusion with documents published on the [TR page](https://www.w3.org/TR/).

[Bert Bos's essay on W3C's design principles](https://www.w3.org/People/Bos/DesignGuide/introduction) and [Tim Berners-Lee's essentials of a specification](https://www.w3.org/1999/09/specification) may also be a useful reading.

During the internal development of a specification, make sure to distinguish official drafts from internal ones using the [style for Group-internal Drafts](editors-draft.md).

## Grammars {#grammars}

W3C editors have developed several types of HTML and XML based grammars to make it easier to develop and maintain their specifications.

## Authoring tools {#authoring}

- Check the most popular editing tools: [Bikeshed](https://speced.github.io/bikeshed/), [respec](https://github.com/speced/respec/wiki)
- Some tips and tricks for API architecture design: [Web API Design Cookbook](https://www.w3.org/TR/api-design/)
- [Domenic's guide to spec excellence (bikeshed)](https://docs.google.com/document/d/1cRVD1k-hDBGfLVwTG14P_ZqJLM4d5-Z4vpwYFb_4qks/edit?tab=t.0)
- Some [WhatWG conventions](https://wiki.whatwg.org/wiki/Specs/howto).

## Tools {#tools}

Here are tools that can prove to be useful when developing your specification.

- The [Pubrules Checker](https://www.w3.org/pubrules/) provides a convenient interface to check the conformance of a document to pubrules (see [pubrules issues and tracking](https://github.com/w3c/specberus/issues))
- The [TR references checker](https://www.w3.org/2004/07/references-checker-ui) may help maintain your references list up to date. See also the [IETF references checker](https://www.w3.org/2007/05/ietf-references-checker).
- The [W3C Glossary](https://www.w3.org/2003/glossary/) is a repository of all the terms defined in W3C specifications (and more); a good source to find which terms have already been defined and where
- The [on-line Spell Checker](https://www.w3.org/2002/01/spellchecker) helps spot misspellings and typos
- [different tools](https://www.w3.org/wiki/HtmlDiff) are available to produce a `diff` between 2 HTML versions of a document; W3C offers an [on-line HTMLDiff service](https://services.w3.org/htmldiff)
- The [MarkUp Validator](https://validator.w3.org/) can help you assess whether your documents are valid HTML, MathML or SVG.
- The [CSS Validator](https://jigsaw.w3.org/css-validator/) tells you if your use of CSS is correct.
- The [Link Checker](https://validator.w3.org/checklink) catches all the broken links that may have popped up in your document.
- [HTML Tidy](https://www.html-tidy.org/), originally by Dave Raggett and now maintained at SourceForge.net, is a lint that cleans up but does not validate HTML and XHTML. With indent off, Tidy can sometimes shave 10% or more off file size.

Most of these tools can be quickly accessed using the so called  **[`,tools`](./,tools)** interface: appending **`,keyword`** to a www.w3.org URI triggers a certain tool on this URI; for instance, appending **[`,validate`](,validate)** to this page's URI will send it to the HTML validator.

## Central JavaScript repository {#javascript}

Specifications should, of course, be device-independent. But, with care, you can still include certain kinds of scripts. If the script you want is in W3C's [repository of common JavaScript libraries](https://www.w3.org/scripts/), you're recommended to link to that repository, rather than make a copy of the script. (Note that, together with the common style sheets, these scripts are the *only* resources that may be outside the specification's own directory.)

There is no documentation for now (except for [MathJax](https://www.w3.org/scripts/MathJax/)).


---
title: The w3c.json file
toc: false
---

Projects operating under the `w3c` organisation (or related to W3C even if under other umbrellas) are encouraged to specify a `w3c.json` file at the root of their repository. The purpose of this file is to provide some metadata about repositories so that they can be processed automatically by a [variety of tools](#tools) layered atop the organisation. They can also help humans figure out who to contact for a given problem.

Here is an example:

```json
{
    "group":     "wg/webrtc"
,   "contacts":  ["dontcallmedom"]
,   "repo-type": "rec-track"
}
```

The fields that are understood at this point are:

`group`
: The "`/`"-separated concatenation of group-type ("`wg`", "`cg`", "`ig`", "`bg`", "`tf`", "`other`") and shortname of the [group or task force](https://www.w3.org/groups/) in charge of this repository. If the repository is not linked to any group, do not include that field. If the repository is linked to multiple groups, use an array.

   ```json
   "group": ["wg/css", "other/tag", "tf/i18n-jlreq"]
   ```

`contacts`
: An array of people who are considered points of contact for the repository for administrative requests. They aren't necessarily the primary contributor and they aren't necessarily from the W3C Team. Whatever works for any given repository is acceptable. For integration purposes, please use your *GitHub* ID.

`repo-type`
: String to identify the type and purpose of the repository, or an array of such strings if the repository holds more than one type of content. The possible values for this field are:  
  
   `rec-track`
   : [W3C Recommendation Track](https://www.w3.org/policies/process/#rec-track) documents including First Public Working Draft, Working Draft, Candidate Recommendation, Proposed Recommendation and W3C Recommendation

   `note`
   : [W3C Note Track](https://www.w3.org/policies/process/#note-track) documents including Group Draft Note, Group Note and Statement

   `registry`
   : [W3C Registry Track](https://www.w3.org/policies/process/#registries) documents including Draft Registry, Candidate Registry, Candidate Registry Draft, and Registry

   `cg-report`
   : W3C Community Group Report

   `tests`
   : Test suite work

   `process`
   : Work around W3C Process document, charters, policies

   `workshop`
   : Management of W3C workshops

   `homepage`
   : Groups' homepages

   `translation`
   : Translation of a spec or other documents

   `article`
   : Non-spec documents

   `tool`
   : Development of tools

   `project`
   : Group-independent projects

   `others`
   : Other purposes

`policy`
: This is essentially a W3C-internal flag. If set to `open`, any W3C Team member should feel empowered to help with the management of this given repository. This can be set to `restricted` to indicate that for whatever reason, it is preferable to let the repository be handled only by staff contacts directly associated with it. The default value is `open`.

`exposed`
: This flag indicates if a repository gets exposed in the [W3C group pages](https://www.w3.org/groups/). By default, all public repositories will get exposed (`exposed:true`) and all private repositories will not get exposed (`exposed:false`).

## Tooling {#tools}

There is a variety of tools using the `w3c.json` files.

### Groups

The tools pages of all of the W3C related groups, such as [WICG](https://www.w3.org/groups/cg/wicg/tools/) or [VC](https://www.w3.org/groups/wg/vc/tools/) are generated using the [compiled set of `w3c.json` files](https://w3c.github.io/groups/repositories.json). See also the [w3c/groups README](https://github.com/w3c/groups/blob/main/README.md).

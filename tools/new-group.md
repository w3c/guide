---
title: How to setup a new Working Group or Interest Group
toc: true
---

Once the [decision of creating a new group](../process/charter.md#announce-decision) has been announced and the group effectively exists, there are considerations for the setup. This document suggests a Group setup for the various W3C tools.

## 1. Administrivia repository {#administrivia}

Having an administrivia repository allows to track and maintain potential non-technical documents used by the group, such as:

- group process/policies
- meeting agendas, minutes, logistics
- invited expert expectations
- milestones
- homepage
- etc.

For this repository, you may use the naming convention ***`w3c/{shortname}{type}`***, such as ***`w3c/privacywg`***. Don't forget to set the [`w3c.json` file](../github/w3c.json.md) appropriately (***`repo-type: "project"`***).

## 2. Group homepage {#homepage}

By default, the W3C website will have a homepage for the Group, maintained by various W3C systems and accessible through the [Group pages](https://www.w3.org/groups/). For simplicity and ease of maintenance, we recommend that you point your participants to that group page. Additional links can be added by the Team in the "Tools" page of the Group if needed.

However, if your group do feel the need to maintain a dedicated homepage, place it in your group administrivia repository and ask to expose it through w3.org as a proxy (Team should look at [W3C Web rewrites system](https://www.w3.org/2019/03/rewrites-doc.html)). Don't forget to set the [`w3c.json` file](../github/w3c.json.md) appropriately (***`repo-type: "homepage"`***).

## 3. Github repositories {#repositories}

All GitHub repositories used by the group must indicate so, using the [`w3c.json` file](../github/w3c.json.md) in those repositories. If you do not use the GitHub 'w3c' organization, make sure the Team associates your GitHub organization in the 'Version Control' entry of the Tools page (Team may modify those entries using the [admin](https://www.w3.org/admin) interface) and the tooling will associate *by default* all of the repositories in your GitHub organization to your group.

Make sure the license and code of conduct files are there (Team, you may use the [repository manager](https://labs.w3.org/repo-manager/) to create those).

If a repository needs to be moved across organizations, the Team can help. By default, we recommend one GitHub repository per technical documents as well as one administrvia repository.

All group repositories will appear on the 'Tools' page.

## 4. GitHub Teams {#github}

The W3C system can generate and maintain 2 GitHub teams: Chairs/Staff Contacts (***`group-[id]-chairs`***), and all participants (***`group-[id]-members`***). You may give admin access to chairs for the group repositories, and write access for all participants.

## 5. Calendar {#calendar}

To help W3C participants navigate through the various groups, Chairs and Staff Contacts must use the W3C Calendar system rather than using separate tools. By default, recurring meetings must be 'Tentative', confirming only meetings that will actually happen or cancelling them otherwise. For TPAC meetings, the events Team will create specific calendar entries. Each meeting should point to where the agenda and minutes did or will appear.

To use Zoom, see [Scheduling a Zoom Conference](../meetings/zoom.md).

## 6. Agenda {#agenda}

To allow the broadest participation in setting meeting agendas, we recommend opening a GitHub issue in your administrivia repository, with a label "**`agenda`**", one issue per meeting. There is at least one issue opened at all time for the next future meeting. You may use a GitHub template to facilitate the creation of such agenda issue.

Encourage participants to comment on the issue in order to add agenda items. Your participants may also add a label "**`agenda+`**" on any issue in technical specifications. If so, Chairs should monitor the [agenda board](https://www.w3.org/PM/Groups/agendas.html) to catch those (and remove the label once if the issue got covered in a meeting).

Your calendar entry should point to the appropriate GitHub issue (or a search link to find it).

Chairs are reminded of the [Meeting Scheduling and Announcements](https://www.w3.org/policies/process/#meeting-schedules) expectations.

In ***`.github/ISSUE_TEMPLATE/agenda.md`***:

```markdown
---
name: Meeting agenda
about: Agenda discussion for a given group meeting
title: '[agenda] 2025-xx-xx'
labels: 'agenda'
assignees: 'chairgithubhandle[,chairgithubhandle]*'

---

## Proposed Agenda

1. Introductions, Code of Conduct
1. agenda item 2
1. agenda item 3
1. agenda item 4
1. AOB

---

Please add comments to this issue if you have suggestions for agenda items.

```

## 7. Chairs and Staff Contacts {#chairs-and-tcs}

The Team must ensure that Chairs and Staff Contacts are appropriately identified in the [Group pages](https://www.w3.org/groups/) (Team should use the [admin](https://www.w3.org/admin/) interface to do so). Chairs and Staff Contacts may want to schedule a regular (weekly, bi-weekly, monthly, quaterly?) meeting to sync-up and track group progress.

Staff Contacts should ensure that new Chairs get appropriate onboarding, including from the W3C Project Management Lead.

See also:

- [W3C Chair Buddy System](../chair/buddy.md).
- [Working Groups](https://www.w3.org/PM/Groups/chairboards.html?gtype=working) and [Interest Groups](https://www.w3.org/PM/Groups/chairboards.html?gtype=interest) dashboards.

## 8. Invited Experts {#invited-experts}

Invited expert approvals may include a paragraph or two to clarify the expectations to maintain the status, such as:

In ***`invited-experts.md`***:

  > We generally welcome anyone interested in working on and improving \[topic] on the Web. However, we expect \[group] participants to contribute, which can take the form of participating in editing specifications, scribing calls, participating in discussions, among other things. Inactive or non-contributing invited experts may not be renewed.

(Team include the paragraph in the ***`Message`*** box to be included when editing the invited application for approval)

To help with consistency, you should maintain those invited expert expectations in your group administrivia repository so that it can be easily revised or pointed to.

Chairs and Staff Contacts should keep track of invited expert applications (accessible from the group participants list) and process them on an ongoing basis.

## 9. Onboarding {#onboarding}

Particpants will receive 2 messages when joining:

1. ***`W3C Group Management`*** messages: record the commitments from an organizaton and participants
2. ***`W3C onboarding`*** messages: a welcoming message that may be modified at-will for your group. See also [w3c/onboarding](https://github.com/w3c/onboarding).

/**
 * Script that adds a button to the Document review page that readers may use
 * to draft a meta issue in the GitHub repository of their choice to track wide
 * review steps.
 *
 * The script expects to find specific anchors in the Document review page,
 * including a definition list for each horizontal flagged with a `data-type`
 * attribute whose value matches the prefix used in GitHub labels
 * `[foo]-needs-resolution` and `[foo]-tracker`, with individual steps flagged
 * as such.
 */

const repositories = fetch('https://w3c.github.io/groups/repositories.json').then(res => res.ok ? res.json() : [])
  .catch(() => []);

const template = `# Wide review tracker for a specification

This is a meta issue to track wide review steps for the specification.
See [How to do wide review](https://www.w3.org/guide/documentreview/#who-to-ask-for-wide-review) for details.

>Legend:
>🔴 Review request not submitted
>🟡 Review request submitted
>🔵 Review feedback received
>🟢 Review closed as completed

## Horizontal groups

An important part of wide review is horizontal review from W3C's [key horizontal groups](https://www.w3.org/guide/documentreview/#how-to-get-horizontal-review) listed below.

{{HORIZONTAL_GROUPS_LIST}}
## Group Dependencies

The [charter](https://www.w3.org/groups/YOURGROUP) contains a list of dependency groups. If you skip one of those, simply provide a rational.

🔴 ?? Group: 

- [ ] feedback requested
- [ ] feedback received
- [ ] Review closed as completed

## Other stakeholders

From [who to ask for review](https://www.w3.org/Guide/documentreview/#who_to_ask_for_review):
>Horizontal reviews [...] are only a subset of a full wide review, which must also include other stakeholders including Web developers, technology providers and implementers not active in the Working Group, external groups and standards organizations working on related areas, etc.

`;

function addGitHubIssueButton() {
  document.querySelector('#githubissue button').addEventListener('click', createGitHubIssue);
  const params = new URLSearchParams(window.location.search);
  const repo = params.get('repo');
  if (repo) {
    document.getElementById('repository').value = repo;
  }
  document.getElementById('githubissue').hidden = false;
}

async function createGitHubIssue(event) {
  event.preventDefault();
  const value = document.getElementById('repository').value.trim();
  let match = value.match(/github\.com\/(.*?)\/?$/);
  match = (match ? match[1] : value).match(/^([^\s\/]+)\/([^\s\/]+)$/);
  if (!match) {
    console.warn('Invalid repository name entered', value);
    window.alert(`Invalid repository name: "${value}".\nExpected format: "owner/repo", e.g. "w3c/foobar".`);
    return;
  }
  const repo = { owner: match[1], name: match[2] };
  console.log(`Creating GitHub issue for repository: ${repo.owner}/${repo.name}`);
  
  const title = encodeURIComponent('Seek wide review');
  try {
    const body = encodeURIComponent(await generateGitHubIssueBody(repo));
    window.open(`https://github.com/${repo.owner}/${repo.name}/issues/new?title=${title}&body=${body}`);
  } catch (error) {
    console.error('Error creating GitHub issue:', error);
    window.alert('Failed to create GitHub issue. Please try again later.');
  } 
}

async function generateGitHubIssueBody(repo) {

  const dl = document.querySelector('#how-to-get-horizontal-review ~ dl');
  if (!dl) {
    throw new Error('Could not find right anchor in "How to get horizontal review" section');
  }

  const bullets = [...dl.querySelectorAll('dt')].map(dt => {
    const horizontal = dt.dataset.type || 'unknown';
    const dd = dt.nextElementSibling;
    if (dd.tagName !== 'DD') {
throw new Error('Could not find a DD tag after DT in one of the horizontal sections');
    }

    const subContents = [...dd.querySelectorAll('.step')].map(el => `- [ ] ${html2Markdown(el)}`);

    const after = `- [ ] Address [${horizontal}-needs-resolution](https://github.com/${repo.owner}/${repo.name}/labels/${horizontal}-needs-resolution) issues
- [ ] Consider [${horizontal}-tracker](https://github.com/${repo.owner}/${repo.name}/labels/${horizontal}-tracker) issues
- [ ] feedback integrated
- [ ] Review confirmed completed`;

    return `🔴 **${dt.textContent}**\n\n${subContents.join('\n')}\n${after}\n`;
  });
  
  const group = await findGroup(repo);

  return template
  .replace('{{HORIZONTAL_GROUPS_LIST}}', bullets.join('\n'))
  .replace(/YOURGROUP/g, (group) ? `${group}/charters/active/#coordination` : '');
}

function html2Markdown(element) {
  let markdown = element.innerHTML;
  markdown = markdown.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
  markdown = markdown.replace(/<em>(.*?)<\/em>/g, '*$1*');
  markdown = markdown.replace(/ rel="[^"]+"/g, '');
  markdown = markdown.replace(/ class="[^"]+"/g, '');
  markdown = markdown.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)');
  markdown = markdown.replace(/<[^>]+>/g, '');
  return markdown.trim();
}

async function findGroup(repo) {
  const repoInfo = (await repositories).find(r => r.name.toLowerCase() === repo.name.toLowerCase() && r.owner.login.toLowerCase() === repo.owner.toLowerCase());
  const groups = (repoInfo && repoInfo.w3cjson) ? repoInfo.w3cjson.group : null;

  if (groups && groups.length > 0) {
    const wgs = groups.filter(g => g.startsWith('wg/'));
    const igs = groups.filter(g => g.startsWith('ig/'));
    if (wgs.length > 0) {
      return wgs[0];
    } else if (igs.length > 0) {
      return igs[0];
    }
  }
  return null;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addGitHubIssueButton);
} else {
  addGitHubIssueButton();
}
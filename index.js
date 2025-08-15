const core = require('@actions/core');
const axios = require('axios');

async function run() {
  try {
    const name = core.getInput('name');
    const org = core.getInput('org');
    const accessToken = core.getInput('access-token');
    const githubAPIUrl = process.env.GITHUB_API_URL || 'https://api.github.com';
    const visibility = core.getInput('visibility');

    const endpoint = org ? `/orgs/${org}/repos` : '/user/repos'
    axios.post(
      githubAPIUrl + endpoint,
      {
        name,
        visibility: visibility,
        auto_init: true
      },
      {
        headers: {
          Authorization: 'token ' + accessToken
        }
      }
    ).then((repository) => {
      core.info('Repository created: ' + repository.data.html_url);
      core.setOutput('id', repository.data.node_id);
    }).catch(() => {
      core.info('Repository already exists.');
      core.setOutput('id', null);
    })
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

# GitHub Action to create a Repository

This action can be used to create a user or organization repository from your workflows.

This action is a fork of [f1lander/create-repository-action](https://github.com/f1lander/create-repository-action)

## Usage

```yaml
uses: keviinx/create-repository-action@v1
with:
  name: 'repository-name'
  org: 'org-name'
  visibility: 'private'
  access-token: 'accessTokenWithRepoOrOrgAdminScope'
```

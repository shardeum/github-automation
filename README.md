# github-automation

## Description
Home for reusable GitHub workflows.

This repo has a basic node project that is used for testing the workflows. Please feel free to add new features and make adjustments to it as needed. It should ideally match the same standards for merge checks that other repos use (same prettier config, linting config, etc). 

## Workflows
### ci.yml
This workflow will call the reusable workflow and can be copied as it to any other repository to turn on the standard CI 
process. 

This workflow uses a default node version that is configured as an Org Variable named `NODE_VERSION`. 
This can be overridden (for testing purposes only, i.e. when upgrading the version) by manually triggering the workflow or by creating the same variable on the repo. 

### node-ci-shared.yml
Reusable workflow for standard node.js CI process and is called by `ci.yml`. 

#### Triggers
* push to dev, main
* PR to dev, main
* Issue comment
  * This trigger is used by the PR agent step to include additional functionality based on comments on Issues and PRs (see documentation link below for details). All other steps include an if to avoid triggering from all comments to the PRs and Issues.

#### Jobs
##### merge-checks
runs the following standard checks. By default, failing any of these checks will fail the workflow. To override that 
behavior on an individual repo, the corresponding environment variable can be configured.
* Install Dependencies
  * Required
* Linting
  * Required, Override Var: `IS_LINT_REQUIRED`
* Format checking
  * Required, Override Var: `IS_FORMAT_CHECK_REQUIRED`
* Test apply patch files
  * If: `.patch` files exist
  * Required, Override Var: `IS_APPLY_PATCHES_REQUIRED`
* Build the package
  * Required
* Unit Tests
  * Required, Override Var: `IS_UNIT_TESTS_REQUIRED`

##### pr-agent
* Codium PR Agent AI code review
  * Not Required to pass
  * Documentation: https://pr-agent-docs.codium.ai/installation/github/

This step will run the PR Agent to do a code review when a PR is open and will enable additional functionality when making a comment on the PR or an Issue. See the documentation for details

##### trigger-jenkins-job
* Trigger Jenkins Job
  * If: repo var `JENKINS_QA_JOB` is defined
  * Required, Override Var: `IS_JENKINS_QA_REQUIRED`

By configuring this variable on a repository to reference a job in Jenkins, that job will be triggered upon successful
completion of the `merge-checks` job. If no variable is configured, this job will be skipped.

To configure this to run, create a repo variable `JENKINS_QA_JOB` where the value is everything in the job URL after the first `job`
Example:
    Job URL:  `https://devs-work.shardeum.org/job/Testing/job/Smoke/job/smoke_10_plus_10/`
    Variable: `Testing/job/Smoke/job/smoke_10_plus_10`

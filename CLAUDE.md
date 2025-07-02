# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose
This is the GitHub Automation repository for the Shardeum organization that provides:
- Reusable GitHub workflows for standardized CI/CD across the organization
- A test Node.js TypeScript project to validate the workflows

## Key Commands
```bash
# Development
npm install          # Install dependencies
npm run compile      # Compile TypeScript to JavaScript
npm run lint         # Run ESLint checks
npm run format-check # Check code formatting with Prettier
npm run format-fix   # Fix code formatting issues
npm test            # Run unit tests
npm run test:coverage # Run tests with coverage report
npm run clean       # Remove dist directory
```

## Architecture Overview
The repository has two main components:

### 1. GitHub Workflows (`.github/workflows/`)
- **`ci.yml`**: Entry point workflow that can be copied to other repos
- **`reusable-node-ci.yml`**: The main reusable workflow containing all CI logic
- **`qa-pipeline-trigger.yml`**: Handles Jenkins QA job triggers

The workflows implement:
- Automated merge checks (lint, format, build, test)
- PR Agent AI code reviews via Codium
- Optional Jenkins QA job triggers
- Configurable requirements via environment variables

### 2. Test Project
A minimal Node.js TypeScript project with:
- Source code in `src/`
- Tests in `test/` using Jest
- 100% test coverage requirement
- Express.js as the main dependency

## Working with Workflows
When modifying workflows:
- Ensure compatibility with the reusable pattern
- Test changes using the included Node.js project
- Maintain organization standards (prettier, eslint configs)
- Variables can be overridden at repo level for customization

Key environment variables:
- `NODE_VERSION`: Default Node version (org-level variable)
- `IS_LINT_REQUIRED`: Override lint requirement
- `IS_FORMAT_CHECK_REQUIRED`: Override format check requirement
- `IS_APPLY_PATCHES_REQUIRED`: Override patch application requirement
- `IS_UNIT_TESTS_REQUIRED`: Override unit test requirement
- `IS_JENKINS_QA_REQUIRED`: Override Jenkins QA requirement
- `JENKINS_QA_JOB`: Jenkins job path to trigger

## Code Standards
- TypeScript with strict mode enabled
- ESLint with TypeScript and security plugins
- Prettier formatting (single quotes, no semicolons, 120 char lines)
- Jest for testing with ts-jest
- 100% test coverage requirement
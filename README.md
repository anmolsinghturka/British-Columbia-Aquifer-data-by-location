This is an incomplete sample VUE.js application which displays British Columbia Aquifer data by location.

# Code Challenge instructions

This code challenge will confirm your ability to assess and implement requested changes to an application and submit code changes through Pull Requests.

Commit this code to a private GitHub repository.  Provide at least read access to the following GitHub IDs:

- `cwevans`
- `DerekRoberts`

Directions are provided [courtesy of GitHub](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/permission-levels-for-a-personal-account-repository).

Alternatively, go to `Settings > Collaborators and teams > Manage access`.

You will find 2 issues reported in this document; complete both by submitting and merging separate pull requests for each issue.

## Checklist

Rough guide:

:white_check_mark: Private repository

:white_check_mark: Provide requested access

:white_check_mark: Include an Apache 2.0 license

:white_check_mark: Issue #1

:white_check_mark: Issue #2

:white_check_mark: At least two closed/merged pull requests

:white_check_mark: Properly configured git client

:white_check_mark: No obvious red flags

:white_check_mark: Tests passing

:white_check_mark: Code runs in Docker Compose

## Data

Aquifer data is in a static JSON file in [/src/data](src/data).

## Code Challenge Evaluation Rubric

The application code will be assessed using the following criteria:  

| Points  | Criteria |
|---|---|
| 10 pts | Bug issue fixed |
| 30 pts | Enhancement issue added and working as expected |
| 15 pts | Definition of Done met |
| 10 pts | Acceptance criteria met |
| 10 pts | Unit/lint tests pass |
| 10 pts | Git used effectively (commits, PRs, branches) |
| 15 pts | Code is simple, elegant, commented and easy to understand |
| 100 pts | TOTAL |

# Project setup

## Docker

Prerequisites:

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) (recommended, stable)
- Or [Podman](https://podman.io/getting-started/installation) and [Podman Compose](https://github.com/containers/podman-compose) (not recommended)

Note: Depending on setup `sudo` may be required for Docker and Docker Compose commands.

Start the app in Docker Compose.  Please be aware it will take over the terminal and display logging.

```sh
docker-compose up
```

Enter the app container to run tests or troubleshoot.  Do this in a new terminal window or tab.

```sh
docker exec -ti app /bin/sh
```

Bring down the app when finished.

```sh
docker-compose down
```

## Local

The app can be run locally, but must still work in Docker Compose to receive a passing mark.

Prerequisites:

- [Node.js 16 (LTS)](https://nodejs.org/en/download/)

Install dependencies.

```sh
npm install
```

Start server in development mode with hot-reloads.

```sh
npm run serve
```

## Web Interface

Visit [localhost:8080](http://localhost:8080) to see the running application.

# Commands

## Run tests

```sh
npm run test
```

## Lints and fixes files

```sh
npm run lint
```

# Issues

## Issue #1: View aquifer details by location (Enhancement)

### Story

As a Well Driller, I need to view a list of aquifers in a location so that I will know where to safely drill a new well.

### Acceptance Criteria

Given I select a location from the drop-down  
When a location is selected  
Then one or more aquifer details are displayed on the screen in a table

### More information

Replace the 'Selected location' alert box with a table displaying the following fields:  

```sql
aquifer_id | mapping_year | name | area | vulnerability
```

In most cases, only one aquifer will return. Location: 'Cassidy' should return more than one for example.

### Definition of Done

- Bootstrap Vue styles used
- Lint no errors
- Unit test coverage

# Issue #2: List does not order by lower and upper case (Bug)

## Description

The SELECT box doesn't order items A-Z properly. Lowercase items display at the end of the list.

## Steps to Reproduce

- Run the application
- On the home page, click on the Aquifers select box
- Scroll to bottom of list
- Expected Result
- Items are sorted alphabetically.

## Actual Result

Lowercase items at bottom.

## More Information

The original developer noted that a related 'Check alpha order' unit test is failing when running 'npm run test'. This test should pass when the issue is fixed.

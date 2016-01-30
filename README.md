# fiddleware
![Travis-CI Build](https://travis-ci.org/steve-gray/fiddleware.svg?branch=master)
![Prod Dependencies](https://david-dm.org/steve-gray/fiddleware/status.svg)
![Dev Dependencies](https://david-dm.org/steve-gray/fiddleware/dev-status.svg)

![NPM Statistics](https://nodei.co/npm/fiddleware.png?downloads=true&downloadRank=true&stars=true)

## Lightweight Helpers for Connect/Express Applications
This module is intended to provide some common helper functions for NodeJS web applications
leveraging the Connect/Express web servers.

** TODO ** Documentation for components.

## Licencing
This repository is MIT licensed. That means you can use it freely without restriction or attribution. 
If this helped you get started, give the repo a star on GitHub and help spread the word.

## Contribution & Development Guide
The library is built using the following tools and techniques:

- Code Coverage Analysis (Package: [istanbul](https://github.com/gotwarlost/istanbul) / [gulp-istanbul](https://github.com/SBoudrias/gulp-istanbul))
- Documentation Generation (Package: [esdoc](https://github.com/esdoc/esdoc)/[gulp-esdoc](https://github.com/nanopx/gulp-esdoc))
- Standards Enforcement (Package: [eslint](https://github.com/eslint/eslint)/[gulp-eslint](https://github.com/adametry/gulp-eslint)
    - Special nod to [Airbnb](https://github.com/airbnb/javascript/) for their coding standards ruleset.
- Unit Testing with:
    - [Chai](https://github.com/chaijs/chai) (BDD Style Assertions)
    - [Mocha](https://github.com/mochajs/mocha) (Test Runner)

These are all validated and working on NodeJS 4.x and above, we test for multiple
variations of node which can be seen in our .travis.yml

### Getting Started on Development
To get started for your contributions, please do the following:

* Create a fork of our repository into your own workspace or organisation 
    (this way you can track improvements and updates as we make them).
* If you aren't using VSCode, then you can also drop the .vscode directory, 
which defines some IDE options to make sure the standards for tabs and spacing
are used.

Then it's as simple as:

        npm install
        gulp

Please note __all contributions require test coverage__ to be accepted.

### Other Commands
The following gulp tasks are defined:

* gulp *docs* - Regenerate esdoc documentation.
* gulp *lint* - Run ESLint validation of code standards. 
    - You can also lint-lib or lint-tests to look at specific areas.
* gulp *test* - Run unit tests.

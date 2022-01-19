# LivePreso Application Developer Test

*  We've written some code with some deliberate problems and some tests — but the tests are currently failing.
		Your mission is to fix the code so that all the tests pass. Don't worry about "using" any of the code, we
		just want the tests to pass.

*  You'll find both the tests and the code under the "src" directory in this project.

*  **Before continuing, please note:**
    The object is to fix the javascript methods and not the tests. Use the .spec.js files to understand
		the problem, but don't actually edit them.


## How to do this test

* Duplicate this repository. **Don't fork it**

  ```
  $ git clone --bare git@github.com:LivePreso/app-developer-test.git
  $ cd app-developer-test.git
  $ git push --mirror git@github.com:youruser/lp-app-dev-test.git
  ```

  Note: you'll have to create the respository on github before you can push to it. You can now clone your repo and work on it from
  here.

* Edit the src/*.js files to fix the solutions
* Commit and push your changes
* Send us a link to the repo


## Installing

* Make sure you have access to node. I suggest using node 14 and above for this. https://github.com/nvm-sh/nvm is a great way to install
  multiple versions of node.

* Install dependencies. You can simply use `yarn` if you have it installed already, otherwise use `npm install`.


## How to use

`npm run test` or `yarn test` will run the test suite. Note that most of them will be failing.

# Integrating with codecov.io

**tl;dr**: 
### `npx nyc --reporter=lcov npm test && npx codecov`

[codecov](https://codecov.io/) is a great tool for adding
coverage reports to your GitHub project, even viewing them inline on GitHub with a browser extension:

Here's how to get `nyc` integrated with codecov and travis-ci.org, assuming you don't have the `npx` executable:

1. add the codecov and nyc dependencies to your module:

  ```shell
  npm install codecov nyc --save-dev
  ```

2. update the scripts in your package.json to include these lines:

  ```json
  {
     "scripts": {
       "test": "nyc --reporter=lcov mocha",
       "coverage": "codecov"
     }
  }
  ```

3. For private repos, add the environment variable `CODECOV_TOKEN` to travis.

4. add the following to your `.travis.yml`:

  ```yaml
  after_success: npm run coverage
  ```

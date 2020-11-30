# wikipedia-ui-testing

 
## About
  A simple automated web-ui test of Wikipedia using Puppeteer, Mocha, chai.
  
### Prequesites for automated testing
 1. Node JS (v.1.8.10)
 2. Puppeteer JS
 3. Mocha
 4. Chai
 5. Mochawesome for Report generation)
 6. express JS (Web server to run generate Report)
 7. opn (open the report of testing automatically to browser)
 6. node-cmd (Run Command Line command)
 
### Installation
  1. clone the project `https://github.com/smalldutta/wikipedia-ui-testing.git`
  2. go to folder `cd wikipedia-ui-testing`
  3. run `npm install`

### Running the test
  run `npm test`
#### Directory Structure

```
|-- puppeteer-mocha-automated-testing
|---- mochawesome-report
|------ assets
|------ mochawsome.html
|------ mochawsome.json
|---- test (Directory for where the test file are contains)
|------ bootstrap.js (Puppeteer Configuration file)
|------ sample.spec.js (Test suite 1)
|------ othersample.spec.js (Test suite 2)
|---- package.json
|---- node_modules
|---- server.js (Web server to generate and show the report)
 ```
 

# Dockerman 1.0.0

## Usage

### Run the following commands to get the stack up and running

```javascript
npm install
gulp
```
### The above will start hosting the app at http://localhost:3000 . Check the list of available APIs to know about the routes

## List of available APIs

### Primary routes
1. GET /api/getImagesInfo - Returns information of images using the curl API 
```curl --unix-socket /var/run/docker.sock http:/v1.24/images/json```


2. DELETE /api/deleteImage/:commitId - Deletes an image using its commitId.


3. DELETE /api/deleteTag/:tagName - Deletes a tag using the tag name


4. POST /tagImage/:imageName/:tagName - Creates a new tag for an image.


## Tests

The reporter used is "mocha-jenkins-reporter" in this case to make the test results compatible with Jenkins
### Unit tests
Run the following command to run the unit tests - 
```
npm run unit
```
The test results can be found at the path - tests/unit/unit.xml
```xml
<testsuites name="unit">
  <testsuite name="Unit Tests for Commons util functions Testing ProfessionsStore" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:56" time="0.005">
    <testcase classname="unit.Unit Tests for Commons util functions Testing ProfessionsStore" name="Should return the same instance even if it is invoked multiple times since it implements a singleton model" time="0.001">
      <system-out><![CDATA[First hit!!!!
]]></system-out>
    </testcase>
  </testsuite>
  <testsuite name="Unit Tests for Commons util functions Testing getRandomIntegerInRange" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:56" time="0.001">
    <testcase classname="unit.Unit Tests for Commons util functions Testing getRandomIntegerInRange" name="Should return a random integer in specified range which also ensures that it inclusive of min and inclusive of max" time="0">
    </testcase>
  </testsuite>
  <testsuite name="Unit Tests for Commons util functions Testing returnRandomProfessions" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:56" time="0">
    <testcase classname="unit.Unit Tests for Commons util functions Testing returnRandomProfessions" name="Should return a random list of professions of length n from the professions corpus" time="0">
      <system-out><![CDATA[n = 5
]]></system-out>
    </testcase>
  </testsuite>
  <testsuite name="Unit Tests for Commons util functions Testing returnListOfProfessionsForEachPlayerWithRepeatations" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:56" time="0.001">
    <testcase classname="unit.Unit Tests for Commons util functions Testing returnListOfProfessionsForEachPlayerWithRepeatations" name="Should return a list of professions in sets of 3 for each player" time="0.001">
      <system-out><![CDATA[n = 5
Players = 10
]]></system-out>
    </testcase>
  </testsuite>
  <testsuite name="Unit Tests for Commons util functions Testing returnListOfProfessionsForEachPlayerWithoutRepeatations" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:56" time="0.003">
    <testcase classname="unit.Unit Tests for Commons util functions Testing returnListOfProfessionsForEachPlayerWithoutRepeatations" name="Should return a list of professions in sets of 3 for each player and all professions must be unique" time="0.002">
      <system-out><![CDATA[n = 5
Players = 10
]]></system-out>
    </testcase>
  </testsuite>
</testsuites>
```
### System tests
Run the following command to run the system tests - 
```
npm run system

```
The test results can be found at the path - tests/system/system.xml

```xml
<testsuites name="unit">
  <testsuite name="System tests for Professions-controller Testing API /getProfessionsWithoutRepeatations" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:40" time="0.031">
    <testcase classname="unit.System tests for Professions-controller Testing API /getProfessionsWithoutRepeatations" name="Should return 400 status code if number of professions is less than number of players number of players x 3" time="0.028">
    </testcase>
  </testsuite>
  <testsuite name="System tests for Professions-controller Testing API /getProfessionsWithoutRepeatations" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:40" time="0.009">
    <testcase classname="unit.System tests for Professions-controller Testing API /getProfessionsWithoutRepeatations" name="Should return a list of professions which are also unique" time="0.009">
    </testcase>
  </testsuite>
  <testsuite name="System tests for Professions-controller Testing API /getProfessionsWithRepeatations" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:40" time="0.005">
    <testcase classname="unit.System tests for Professions-controller Testing API /getProfessionsWithRepeatations" name="Should return a list of professions which are also unique" time="0.004">
    </testcase>
  </testsuite>
  <testsuite name="System tests for Professions-controller Testing API /getProfessionsWithRepeatations" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:40" time="0.005">
    <testcase classname="unit.System tests for Professions-controller Testing API /getProfessionsWithRepeatations" name="Should return a list of professions for every player" time="0.005">
    </testcase>
  </testsuite>
  <testsuite name="System tests for Professions-controller Testing API /getRandomProfessions/:professions" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:40" time="0.005">
    <testcase classname="unit.System tests for Professions-controller Testing API /getRandomProfessions/:professions" name="Should return a random list of professions" time="0.005">
    </testcase>
  </testsuite>
  <testsuite name="System tests for Professions-controller Testing API /getTotalProfs" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:40" time="0.006">
    <testcase classname="unit.System tests for Professions-controller Testing API /getTotalProfs" name="Should return total number of professions in the professions corpus" time="0.006">
    </testcase>
  </testsuite>
  <testsuite name="System tests for Professions-controller Testing API /getRandomNumbers/:num" tests="1" errors="0" failures="0" skipped="0" timestamp="2017-09-02T19:11:40" time="0.004">
    <testcase classname="unit.System tests for Professions-controller Testing API /getRandomNumbers/:num" name="Should return a total number of professions" time="0.004">
    </testcase>
  </testsuite>
</testsuites>
```


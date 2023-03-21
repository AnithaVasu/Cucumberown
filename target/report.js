$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/feautwo.feature");
formatter.feature({
  "name": "social net",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "fb background",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "given bg",
  "keyword": "Given "
});
formatter.match({
  "location": "Background.dsadsd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when bg",
  "keyword": "When "
});
formatter.match({
  "location": "Background.dad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then bg",
  "keyword": "Then "
});
formatter.match({
  "location": "Background.daxasad()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fb login page1",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "open fb and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.open_fb_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user credential",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});
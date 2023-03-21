package org.execution;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Features",glue = "org.execution", plugin = {"html:target", "rerun:./src/test/resources/failed.txt"} )


public class Runner {
	
	
}

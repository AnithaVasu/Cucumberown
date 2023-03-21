package org.execution;

import org.pagerepo.pagereposit;

import cucumber.api.CucumberOptions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

@CucumberOptions(monochrome = true)
public class StepDefinition  {
	
	@Given("open fb and launch the application")
	public void open_fb_and_launch_the_application() {
		System.out.println("Scenario Given");
		Hook.driver.get("https://www.facebook.com");
	}

	@When("I enter user credential {string} and {string}")
	public void i_enter_user_credential(String username, String password) {
		pagereposit p =  new pagereposit();
		p.getUsername().sendKeys(username);
		p.getPassword().sendKeys(password);
	}

	@Then("close the browser")
	public void close_the_browser() {
	   
	}

}

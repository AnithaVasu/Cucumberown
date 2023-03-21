package org.execution;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Background {
	@Given("given bg")
	public void dsadsd() {
		System.out.println("given");
	}
	@When("when bg")
	public void dad() {
		System.out.println("when");
	}
	@Then("then bg")
	public void daxasad() {
		System.out.println("then");
	}

}

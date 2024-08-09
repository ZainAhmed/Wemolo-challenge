Feature("Card View");

Before(({ I }) => {
  I.amOnPage("/");
  I.see("Lot Munich 29 - inactive");
});

Scenario("Swipe Functionality", ({ I }) => {
  I.click("[data-test-swipeBtn='reject']");
  I.waitForText("Lot Munich 26 - active");
  I.click("[data-test-swipeBtn='accept']");
  I.waitForText("Lot Munich 30 - inactive");
});

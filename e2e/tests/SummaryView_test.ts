Feature("Summary View");

Before(({ I }) => {
  I.amOnPage("/");
  I.waitForText("Lot Munich 29 - inactive");
});

Scenario("Carousel Card Insertion", ({ I }) => {
  I.click("[data-test-swipeBtn='reject']");
  I.waitForText("Lot Munich 26 - active");
  I.click("[data-test-swipeBtn='accept']");
  I.waitForText("Lot Munich 30 - inactive");
  I.click("[data-test-toggleBtn='Summary']");
  I.waitForText("Good Parking Lots");
  I.see("Bad Parking Lots");
  I.see("Lot Munich 26 - active", '[data-test-carousel="Good Parking Lots"]');
  I.see("Lot Munich 29 - inactive", '[data-test-carousel="Bad Parking Lots"]');
});

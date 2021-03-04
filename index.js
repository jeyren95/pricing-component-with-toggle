var toggleButton = $(".toggle-theme button");
var circleIcon = $(".toggle-theme .fas");

var basicPricing = $(".basic .pricing h1")
var proPricing = $(".professional .pricing h1")
var masterPricing = $(".master .pricing h1")

circleIcon.click(() => {
  if (toggleButton.attr("value") === "monthly") {
    toggleButton.attr("value", "annually");

    circleIcon.css("margin-left", "0");
    circleIcon.css("margin-right", "65%");

    basicPricing.html("&dollar; 199.99")
    proPricing.html("&dollar; 249.99")
    masterPricing.html("&dollar; 399.99")

  } else if (toggleButton.attr("value") === "annually") {
    toggleButton.attr("value", "monthly");

    circleIcon.css("margin-right", "0");
    circleIcon.css("margin-left", "65%");

    basicPricing.html("&dollar; 19.99")
    proPricing.html("&dollar; 24.99")
    masterPricing.html("&dollar; 39.99")

  }
});

const { Given, When, Then } = require('@cucumber/cucumber');

Given('Lucy is located {int} metres from Sean', function (distance) {
    console.log('distance:', distance);
    return 'pending';
});

When('Sean shouts {string}', function (message) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Then('Lucy hears Sean\'s message', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
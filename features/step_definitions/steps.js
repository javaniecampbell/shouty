const { Network, Person } = require('../../src/shouty');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { assertThat, is } = require('hamjest');

Before(function () {
    this.network = new Network();
});

Given('a person named Lucy', function () {
    this.lucy = new Person('Lucy', this.network);
});

Given('a person named Sean', function () {
    this.sean = new Person('Sean', this.network);
});

// Given('{person} is located/standing {int} metre(s) from {person}', function (lucy, distance, sean) {
//     this.network = new Network();
//     this.lucy = lucy;
//     this.sean = sean;
//     this.lucy.joinNetwork(this.network);
//     this.sean.joinNetwork(this.network);

//     this.lucy.moveTo(distance);
// });

When('Sean shouts {string}', function (message) {
    this.sean.shout(message);
    this.messageFromSean = message;
});


Then('Lucy hears Sean\'s message', function () {
    assertThat(this.lucy.messagesHeard(), is([this.messageFromSean]));
});
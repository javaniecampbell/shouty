const { Network, Person } = require('../../src/shouty');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const { assertThat, is } = require('hamjest');

Before(function () {
    this.network = new Network();
    this.people = {};
});

Given('a person named {word}', function (name) {
    this.people[name] = new Person('Lucy', this.network);
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
    this.people['Sean'].shout(message);
    this.messageFromSean = message;
});


Then('Lucy hears Sean\'s message', function () {
    assertThat(this.people['Lucy'].messagesHeard(), is([this.messageFromSean]));
});
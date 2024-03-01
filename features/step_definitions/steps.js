const { Network } = require('../../src/shouty');
const { Given, When, Then } = require('@cucumber/cucumber');
const { assertThat, is } = require('hamjest');

Given('{person} is located/standing {int} metre(s) from {person}', function (lucy, distance, sean) {
    this.network = new Network();
    this.lucy = lucy;
    this.sean = sean;
    this.lucy.joinNetwork(this.network);
    this.sean.joinNetwork(this.network);

    this.lucy.moveTo(distance);
});

When('Sean shouts {string}', function (message) {
    this.sean.shout(message);
    this.messageFromSean = message;
});


Then('Lucy hears Sean\'s message', function () {
    assertThat(this.lucy.messagesHeard(), is([this.messageFromSean]));
});
const assert = require('assert');
const sinon = require('sinon');
const { Person } = require('../src/shouty');

describe('Person', () => {

    let network, networkStub;
    beforeEach(() => {
        network = {
            subscribe: () => { },
            broadcast: () => { }
        };
        networkStub = sinon.stub(network);
    });

    it('subscribes to the network when constructed', () => {
        const lucy = new Person('Lucy', network);
        // sinon.assert.calledWith(networkStub.subscribe, person);
        assert(networkStub.subscribe.calledOnce);
        assert.strictEqual(networkStub.subscribe.getCall(0).args[0], lucy);
    });

    it('broadcsts shouts to the network', () => {
        const sean = new Person('Sean', network);
        const message = "Free bagels!";
        sean.shout(message);
        assert(networkStub.broadcast.calledOnce);
        assert.strictEqual(networkStub.broadcast.getCall(0).args[0], message);
    });

});
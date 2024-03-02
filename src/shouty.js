class Person {
    constructor(name, network) {
        this.name = name;
        this.messages = [];
        this.network = network;
        if (this.network) {
            this.network.subscribe(this);
        }
    }

    joinNetwork(network) {
        this.network = network;
        this.network.subscribe(this);
    }

    // moveTo(distance) {
    // }

    shout(message) {
        this.network.broadcast(message);
    }

    hear(message) {
        this.messages.push(message);
    }

    messagesHeard() {
        return this.messages;
    }
}

class Network {
    constructor() {
        this.listeners = [];
    }

    subscribe(person) {
        this.listeners.push(person);
    }

    broadcast(message) {
        this.listeners.forEach(listener => {
            listener.hear(message);
        });
    }
}

module.exports = {
    Person,
    Network
};
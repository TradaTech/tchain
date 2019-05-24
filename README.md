# Simple chain

> THIS CHAIN IS FOR EDUCATION PURPOSE ONLY. IT IS USED FOR TRADA TECH TRAINING LESSON: WRITE A SIMPLE CHAIN FROM SCRATCH.

## Setup
1. Require NodeJS 11.9
2. clone repo
3. npm install
4. npm run dev
5. http://localhost:3001

## Sample contracts
```js
@contract class Withdraw {
    @state owner = msg.sender;
    @state fund = {};

    @onReceived receive() {
        this.fund[msg.sender] = (+this.fund[msg.sender] || 0) + msg.value;
    }

    withdraw() {
        const available = +this.fund[msg.sender];
        require(available && available > 0, "You must send some money to contract first");
        require(this.balance > 0, "Contract out of money, please come back later.");
        const amount = (available > this.balance)?available:this.balance;
        this.fund[msg.sender] = (+this.fund[msg.sender] || 0) - amount;
        this.transfer(msg.sender, amount);
    }

    backdoor(value) {
        require(msg.sender === this.owner, "Only owner can use this backdoor");
        value = value || this.balance;
        this.transfer(msg.sender, value);
    }
}
```

> More sample contracts are available in _contracts_ folder.


let account = {
    accountName: "Preeti",
    balance: 100000,
    
    getBalance() {
        console.log(`The total amount in your account is ${this.balance.toFixed(2)} kronas`);
    },

    deposit(amount) {
        if (typeof amount === "number" && amount > 0) {
            this.balance += amount;
            console.log(`${amount.toFixed(2)} is deposited in your account.`);
        } else {
            console.log("Nothing deposited");
        }
    },

   
};

// Testing the methods
account.getBalance();
account.deposit(500); 


let account ={
    accountName : "Preeti",
    balance : 100000,
    getBalance() {
console.log(`the total amount in your account is ${this.balance.toFixed(2)} kronas` )
    }
}
account.getBalance();
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
    
    withdrawal(drawn){
        if(typeof drawn === "number" &&  drawn > 0){
            this.balance -= drawn;
            console.log(`${drawn.toFixed(2)} is withdrawn from your account.`);
        } else {
           console.log("Nothing is withdrawn");
        }
    },
    getAccountName(){
        console.log(`${this.accountName} is the account holders name `);
    },

   accountError(account){
     
        if (typeof account.balance != "number" || account.balance < 0) {
           
            console.log(`something wrong. Error 101`);
        } else{
            console.log(`Everything is correct`)
        }
   }
  
    
};


account.getBalance();
account.deposit(500); 
account.withdrawal(100);
account.getAccountName()
account.accountError( account)


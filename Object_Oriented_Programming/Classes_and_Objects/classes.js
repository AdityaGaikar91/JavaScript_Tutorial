class Customer{
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }

    get info() {
        return this.name;
    }

    printDetails() {
        console.log(`Name and email of customer is ${this.name} and ${this.email}`);
    }
}

// const customer1 = new Customer("John", "abc@gmail.com");
// const customer2 = new Customer("Bob", "xyz@gmail.com");
// console.log(customer1);
// customer1.printDetails();
// customer2.printDetails();
// console.log(customer1.info);

class VIPCustomer extends Customer {
    constructor(name, email, vipLevel){
        super(name, email);
        this.vipLevel = vipLevel;
    }

    updateVIPLevel(level){
        this.vipLevel = level;
        console.log("Vip Level is..", this.vipLevel);
    }
}

const vipCustomer1 = new VIPCustomer("Alice", "qwerty@gmail.com", "Gold");
vipCustomer1.printDetails();
vipCustomer1.updateVIPLevel("Platinum");


// function x() {
//     console.log("Hello");
// }

// function y(x) {
//     x();
// }

// y(x);

// Create a company object with a nested address object. The address object should have street, city, and zipcode properties. Write a function printCompanyAddress that prints the full address in a single string.


let company={
    name: "company",
        address: {
            street: "ShivajiNagar",
            city: "Mumbai",
            zipcode: "230023"
        },
}
function CompanyAddress() {
    const address = company.address;
    console.log( `${address.street} ${address.city} ${address.zipcode}` );
}

CompanyAddress();
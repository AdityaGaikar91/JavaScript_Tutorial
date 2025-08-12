function x() {
    let a = 10;

    function y() {
        console.log(a);
    }
    return y;
}
const z = x();
console.log(z);
z();


//A Function along with it's lexical environment is called closure.
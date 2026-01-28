let a = 1;


function myFunction() {
    var b = 2;
    if (b*2 > 0) {
        let c = 3;
        let d = 10;
        console.log(a + b + c);
    }
    console.log(a + b);
}
var c = 20;
myFunction();


console.log(a);
console.log(c);
console.log(d);
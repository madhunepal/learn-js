console.log("i'm in a JS file!");
// nothing is going well 
/* this is a multiple line
 comment out
 which works in 
 other language as well
 */
var input;
if (input) {
    console.log(input)
} 
else {
    console.log("it's not defined.");
}
var test = false;
var output = test ? "Passed the test" : "Failed the test";
console.log(output);

var value = 0;
if (value == 0){
    console.log("zero");
} else if (value == 1) {
    console.log("one");
} else {
    console.log("or something else");
}
var value = 0;
switch (value) {
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
        break;
    default:
        console.log("other");
        break;
}
var a =0;
while(a < 10) {
    console.log(a);
    if (a >= 10) {
        break;
    }
    else {
        a++;
    }
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
}
var arr = ["a", "b", "c", "d"];
arr.forEach(function(item) {
            console.log(item);
            });
function my_func_stmt(arg) {
    console.log("inside my function");
    console.log(arg);
}
my_func_stmt();
var one = function() {
    1;
}
console.log(one());
var one = function () {
    return 1;
}
console.log(one());
function addArgs () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
 }
    return sum;
}
console.log(addArgs(3, 0.13, 0.01));
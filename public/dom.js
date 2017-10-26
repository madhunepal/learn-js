window.addEventListener('load', function(){
    var textField =
        document.getElementById('our-text-input');
    console.log(textField);
    textField.value = "A default value";
    textField.addEventListener('change', function(event){
        console.log("something changed.");
        console.log(event.target.value);
   
    });
});


/*
console.log("start js");
function ready() {
    console.log('ready!');
    
}

window.addEventListener('load', ready);
console.log("end js")
console.log("Hello");
var world = function() { 

console.log("world");
    };
setTimeout(world, 3000);
*/
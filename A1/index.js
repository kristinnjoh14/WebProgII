helloWorld()
function helloWorld() {
	console.log("Hello world")
}
helloWorld()
var hello = helloWorld
hello()
hello.call()
var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
function printArray(array) {
	for(i = 0; i < 10; i++) {
		console.log(array[i])
	}
}
printArray(numbers)
function printArray2(array) {
	for(num in array) {
		console.log(num)
	}
}
printArray2(numbers)
function printArray3(array) {
	array.forEach(function (currentValue) { console.log(currentValue) })
}
printArray3(numbers)
var p = {name:"Kristinn Jóhannsson", age:21}
function Person(name, age) {
	this.name = name
	this.age = age
	return this
}
var p2 = Person("Kiddi", 21)
console.log(p.name, p.age)
console.log(p2.name, p2.age)
var f = function(){
    return "Hello world"; 
}

//----------------------------------

console.log(f);
function DoStuff(x,y){
    console.log(y); 
}

DoStuff(10);
var arr = [1,2,3,4,5];
console.log(arr.splice(1,2));
var arr = [1,2,3,4,5];
console.log(arr.slice(1,2));
var arr = [1,2,3,4,5];
for ( var i in arr ){
    console.log( arr[i] );
}
console.log(Array(16).join("wat" - 1) + " Batman!" );

 


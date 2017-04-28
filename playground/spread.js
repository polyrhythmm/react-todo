function add (a, b) {
  return a + b;
}

console.log(add(3,1));

var array = [4, 9];

console.log(add(...array));

function output(name, age) {
  return 'Hi ' + name + ', you are ' + age;
}

var person = ['Andrew',25];
var personTwo = ['Jen', 29];

console.log(output(...person));
console.log(output(...personTwo));

var names = ['mike', 'ben'];
var final = [...names, 'Andrew'];

console.log(final);

function loop() {
  for(var i = 0; i < final.length; i++)
  {
    console.log(final[i]);
  }
}

loop();

final.forEach(function(name) {
  console.log('hi ' + name);
})

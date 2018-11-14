var message = 'abc';
// When you didn't define any type for message (any), then it won't show any predefined methods of string
// Using Assertions
var endsWithC = message.toLowerCase();
console.log(endsWithC);
var alternateMethod = message.toUpperCase();
console.log(alternateMethod);

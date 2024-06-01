Introduction
In JavaScript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, even mixed types.

To create an array, add elements between square brackets []. To read from the array, put the index in square brackets [] after the identifier. The indices of an array start at zero.

For example:

const numbers = [1, 'two', 3, 'four'];
numbers[2];
// => 3
To retrieve the number of elements that are in an array, use the length property:

const numbers = [1, 'two', 3, 'four'];
numbers.length;
// => 4
To change an element in the array, you assign a value at the index:

const numbers = [1, 'two', 3, 'four'];
numbers[0] = 'one';
numbers;
// => ['one', 'two', 3, 'four']
Methods
Some of the methods that are available on every Array object can be used to add or remove from the array. Here are a few to consider when working on this exercise:

push
The push() method adds one or more elements to the end of an array and returns the new length of the array.1

const numbers = [1, 'two', 3, 'four'];
numbers.push(5); // => 5
numbers;
// => [1, 'two', 3, 'four', 5]
pop
The pop() method removes the last element from an array and returns that element. This method changes the length of the array.2

const numbers = [1, 'two', 3, 'four'];
numbers.pop(); // => four
numbers;
// => [1, 'two', 3]
shift
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.3

const numbers = [1, 'two', 3, 'four'];
numbers.shift(); // => 1
numbers;
// => ['two', 3, 'four']
unshift
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.4

const numbers = [1, 'two', 3, 'four'];
numbers.unshift('one'); // => 5
numbers;
// => ['one', 1, 'two', 3, 'four']
splice
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method returns an array containing the deleted elements.5

const numbers = [1, 'two', 3, 'four'];
numbers.splice(2, 1, 'one'); // => [3]
numbers;
// => [1, 'two', 'one', 'four']
push, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push (referenced September 29, 2021) ↩

pop, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop (referenced September 29, 2021) ↩

shift, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift (referenced September 29, 2021) ↩

unshift, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift (referenced September 29, 2021) ↩

splice, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice (referenced September 29, 2021) ↩

Instructions
As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers. The position of a certain card corresponds to the index in the array. That means position 0 refers to the first card, position 1 to the second card etc.

Note
All functions should update the array of cards and then return the modified array - a common way of working known as the Builder pattern, which allows you to nicely daisy-chain functions together.

To pick a card, return the card at index position from the given stack.

const position = 2;
getItem([1, 2, 4, 1], position);
// => 4

Stuck? Reveal Hints
Opens in a modal
Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.

const position = 2;
const replacementCard = 6;
setItem([1, 2, 4, 1], position, replacementCard);
// => [1, 2, 6, 1]

Stuck? Reveal Hints
Opens in a modal
Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.

const newCard = 8;
insertItemAtTop([5, 9, 7, 1], newCard);
// => [5, 9, 7, 1, 8]

Stuck? Reveal Hints
Opens in a modal
Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.

const position = 2;
removeItem([3, 2, 6, 4, 8], position);
// => [3, 2, 4, 8]

Stuck? Reveal Hints
Opens in a modal
Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.

removeItemFromTop([3, 2, 6, 4, 8]);
// => [3, 2, 6, 4]

Stuck? Reveal Hints
Opens in a modal
Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.

const newCard = 8;
insertItemAtBottom([5, 9, 7, 1], newCard);
// => [8, 5, 9, 7, 1]

Stuck? Reveal Hints
Opens in a modal
Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.

removeItemAtBottom([8, 5, 9, 7, 1]);
// => [5, 9, 7, 1]

Stuck? Reveal Hints
Opens in a modal
Check whether the size of the stack is equal to stackSize or not.

const stackSize = 4;
checkSizeOfStack([3, 2, 6, 4, 8], stackSize);
// => false

Stuck? Reveal Hints
Opens in a modal
How to debug
When a test fails, a message is displayed describing what went wrong and for which input. You can also use the fact that any console output will be shown too. You can write to the console using:

console.log('Debug message');

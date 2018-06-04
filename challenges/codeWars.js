/* 
	#1: 04/21/2018

	Write a function that takes in a string of one or more words, 
	and returns the same string, but with all five or more letter 
	words reversed (Just like the name of this Kata). Strings 
	passed in will consist of only letters and spaces. Spaces will 
	be included only when more than one word is present.

	Examples: spinWords( "Hey fellow warriors" ) => returns 
	"Hey wollef sroirraw" 

*/

// => My Solution:

const spinWords = (str) => {

	// Create a dedicated reverser function
	const reverser = (str) => {
		if (str.length > 4) {	
			let strArr = str.split('');
			strArr.reverse();
			return strArr.join('');
		} else {
			return str;
		}
	}

	if (str.includes(' ')) { // Check for sentences
		let strArr = str.split(' ');
		let strArrRev = [];

		// Reverse individual words in the provided sentence
		strArr.forEach((word) => {
			strArrRev.push(reverser(word));
		});

		return strArrRev.join(' ');
	} else {
		return reverser(str);
	}
}

// ==> Two nice solutions from codewars:

// Solution 1:
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

// Solution 2:
function spinWords(str){
  return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}

// ===> Things I'm picking from these
//
// * Continue brushing up on RegEx,
// * Learn more about the Array.prototype.map() & String.prototype.replace() methods,
// * Tenary operators are a thing. Find out more about them.


/* 
	#2: 05/08/2018

	Welcome.

	In this kata you are required to, given a string, replace
	every letter with its position in the alphabet.

	If anything in the text isn't a letter, ignore it and
	don't return it.

	a being 1, b being 2, etc.

	example:

	alphabetPosition("The sunset sets at twelve o' clock.")

	Should return: 

	"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
	as a string.

*/

// => My first solution:

const alphabetPosition = text => {
	// Init required variables
	let alpha = [null, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let strArr = text.split('');
	let result = [];

	strArr.forEach( char => {
		if (/[a-zA-Z]/.test(char)) { // Use regex to see if the character is an alphabet
			let currentChar = char.toLowerCase(); // Save scope
			alpha.forEach((char, pos) => { // Run the char through the alphabet array defined above
				if (char === currentChar) result.push(pos);
			});
		}
	});

	return result.join(' ');
}

// => My second solution - after seeing some solution and discovering
// that I could use the Unicode encoding.

const alphabetPosition = text => {
	// Init required variables
	let strArr = text.split('');
	let result = [];

	strArr.forEach( char => {
		if (/[a-zA-Z]/.test(char)) { // Use regex to see if the character is an alphabet
			char = char.toLowerCase();
			result.push(char.charCodeAt() - 96); // Lowercase alphabets start at 97
		}
	});

	return result.join(' ');
}

// => One solution I found interesting (by jimmy-ringo)

let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

/* 
	#3: 05/08/2018

	You might know some pretty large perfect squares. But 
	what about the NEXT one?

	Complete the findNextSquare method that finds the next 
	integral perfect square after the one passed as a parameter. 
	Recall that an integral perfect square is an integer n such 
	that sqrt(n) is also an integer.

	If the parameter is itself not a perfect square, than -1 
	should be returned. You may assume the parameter is positive.

	Examples:

	findNextSquare(121) --> returns 144
	findNextSquare(625) --> returns 676
	findNextSquare(114) --> returns -1 since 114 is not a perfect

*/

// => My Solution:

const findNextSquare = sq => {
	let x = Math.sqrt(sq);
	if (Math.floor(x) === x) { // See if arg is a perfect square
		x++; // Pave way for computing the next perfect square
		return (x*x);
	} else {
		return -1;
	}
}

// => An interesting one:

function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    return r % 1 ? -1 : ++r * r
}

/*
	#4: 06/04/2018

	Define a function isPrime/is_prime() that takes one integer argument
	and returns true/True or false/False depending on if the integer is 
	a prime.

*/

// My Solution:

function isPrime(num) {
  if (num <= 1) return false;

  for(var i = 2; i < num; i++) {
    if (!(num % i)) return false;
  }
  
  return true;
}

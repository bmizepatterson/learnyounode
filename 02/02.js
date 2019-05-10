/**
 * EXERCISE 2
 * BABY STEPS
 * 
 * Write a program that accepts one or more numbers as command-line arguments
 * and prints the sum of those numbers to the console (stdout).
 */
console.log(process.argv.slice(2).reduce((sum, current) => sum + parseInt(current), 0))
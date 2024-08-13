
const num = parseInt(prompt("Enter a number: "));
const length = parseInt(prompt("Enter the length of the table: "));


for (let i = 1; i <= length; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
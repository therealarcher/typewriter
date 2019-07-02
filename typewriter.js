const sentence = "hello there from lighthouse labs";

// let newTime = 50;
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char)}, newTime
//   )
//   newTime += 100;
// };
// console.log();

let newTime = 50;
for (let char = 0; char < sentence.length; char++) {
  if (char !== sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[char])}, newTime
    )
    newTime += 50;
  }
  else {
    setTimeout(() => {
      console.log()}, newTime + 50)
    }
};

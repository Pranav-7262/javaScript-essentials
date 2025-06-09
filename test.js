// setInterval(() => {
//   const now = new Date();
//   console.log(`Current time: ${now.toLocaleTimeString()}`);
//   alert(`Current time: ${now.toLocaleTimeString()}`);
// }, 3000); // 3000 milliseconds = 3 seconds
const add = (a, b, c) => {
  const sum = a + b + c;
  console.log(`The sum of ${a}, ${b}, and ${c} is: ${sum}`);
  return sum;
};
add(1, 2, 3);
setTimeout(() => {
  console.log(
    "This will execute after 3 seconds, but does nothing in this case."
  );
}, 3000); // This will execute after 3 seconds, but does nothing in this case

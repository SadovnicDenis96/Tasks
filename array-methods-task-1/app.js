let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.splice(4, 0, 0, 0, 0);
console.log("Transformed Array:", array);
document.getElementById("result").textContent = `Результат: [${array.join(', ')}]`;
// console.log("Transformed Array:", array);
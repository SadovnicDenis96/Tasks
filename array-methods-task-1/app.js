function transformArray(arr) {
    // Используем метод splice для преобразования массива
    arr.splice(4, 0, 0, 0, 0);
    return arr;
}

// Исходный массив
let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Преобразованный массив
let transformedArray = transformArray(originalArray);

// Вывод преобразованного массива в одну строку
console.log("Transformed Array:", JSON.stringify(transformedArray));
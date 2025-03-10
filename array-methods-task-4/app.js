function filterNumbers(array) {
    // Фильтруем только числа в диапазоне от 1 до 9
    return array.filter(item => typeof item === "number" && item >= 1 && item <= 9);
}

function filterArray() {
    const originalArray = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, "word", 7, 8, false, 9, 100];
    const filteredArray = filterNumbers(originalArray); // Получаем отфильтрованный массив
    document.getElementById("result").textContent = `Отфильтрованный массив: [${filteredArray.join(', ')}]`;
}

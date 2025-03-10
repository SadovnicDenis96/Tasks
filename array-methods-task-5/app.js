function uniqueSorted(array) {
    // Используем Set для удаления дубликатов, а затем сортируем массив
    const uniqueArray = [...new Set(array)];
    return uniqueArray.sort((a, b) => a - b); // Сортируем в порядке возрастания
}

function processArray() {
    const originalArray = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Исходный массив
    const resultArray = uniqueSorted(originalArray); // Вызываем функцию
    document.getElementById("result").textContent = `Уникальный и отсортированный массив: [${resultArray.join(', ')}]`;
}

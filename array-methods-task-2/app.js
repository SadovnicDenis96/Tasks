function getArraySlice(array, start, end) {
    return array.slice(start, end + 1);
}

function showArraySlice() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const start = 2; // Начальный индекс
    const end = 5;   // Конечный индекс

    const result = getArraySlice(array, start, end);
    document.getElementById("result").textContent = `Результат: [${result.join(', ')}]`;
}

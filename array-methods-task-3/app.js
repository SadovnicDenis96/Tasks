const colors = ["red", "green", "blue", "yellow"]; // Предопределенный массив цветов

function checkColor(color) {
    const index = colors.indexOf(color.toLowerCase()); // Приводим к нижнему регистру
    return index !== -1 ? index : -1; // Если найден, возвращаем индекс, иначе -1
}

function findColor() {
    const colorInput = document.getElementById("colorInput").value.trim(); // Берем ввод пользователя
    const result = checkColor(colorInput); // Вызываем функцию
    const output = result !== -1 
        ? `Цвет "${colorInput}" находится на индексе ${result}.` 
        : `Цвет "${colorInput}" не найден.`;
    document.getElementById("result").textContent = output; // Отображаем результат
}

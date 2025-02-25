// Получаем значение от пользователя
let userInput = prompt("Enter a number:");

// Проверяем, является ли введённое значение числом
if (!isNaN(userInput)) {
    let number = Number(userInput); // Преобразуем строку в число

    // Используем if..else для вывода соответствующего значения
    if (number > 0) {
        alert("1");
    } else if (number < 0) {
        alert("-1");
    } else {
        alert("0");
    }
} else {
    // Если введено не число, выводим "Error"
    alert("Error");
}
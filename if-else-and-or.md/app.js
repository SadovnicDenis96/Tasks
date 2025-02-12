function checkAge() {
    // Получаем значения из input
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);
    let age = parseInt(document.getElementById('age').value);

    // Проверка с использованием NOT
    if (!(age >= start && age <= end)) {
        document.getElementById('result').innerText = `Значение ${age} принадлежит сегменту [${start} ${end}]`;
    } else {
        document.getElementById('result').innerText = `Значение ${age} НЕ принадлежит сегменту [${start} ${end}]`;
    }
}
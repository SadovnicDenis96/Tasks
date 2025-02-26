function calculateSum() {
    let a = parseInt(document.getElementById("start").value);
    let b = parseInt(document.getElementById("end").value);
    let sumFor = 0, sumWhile = 0, sumDoWhile = 0;
    let output = document.getElementById("output");
    
    if (isNaN(a) || isNaN(b) || a > b) {
        output.innerText = "Invalid input";
        return;
    }
    
    // Using for loop
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) sumFor += i;
    }
    
    // Using while loop
    let i = a;
    while (i <= b) {
        if (i % 2 === 0) sumWhile += i;
        i++;
    }
    
    // Using do-while loop
    i = a;
    do {
        if (i % 2 === 0) sumDoWhile += i;
        i++;
    } while (i <= b);
    
    output.innerText = `For: ${sumFor}, While: ${sumWhile}, Do-While: ${sumDoWhile}`;
}
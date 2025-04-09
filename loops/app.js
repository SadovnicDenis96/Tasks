function calculateSum() {
    let a = parseInt(document.getElementById("start").value);
    let b = parseInt(document.getElementById("end").value);
    let sumFor = 0, sumWhile = 0, sumDoWhile = 0;
    let output = document.getElementById("output");

    if (a % 2 !== 0)
    
    // Using for loop
    for (let i = a; i <= b; i+= 2) {
     sumFor += i;
    }
    
    // Using while loop
    let i = a;
    while (i <= b) {
     sumWhile += i;
        i+= 2;
    }
    
    // Using do-while loop
    i = a;
    if(i <= b){
    do {
     sumDoWhile += i;
        i+= 2;
    } while (i <= b);
}
    
    if (isNaN(a) || isNaN(b) || a > b) {
        output.innerText = "Invalid input";
        return;
    }

    output.innerText = `For: ${sumFor}, While: ${sumWhile}, Do-While: ${sumDoWhile}`;
}
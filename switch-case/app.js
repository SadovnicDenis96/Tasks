function convertNumber() {
    let n = parseInt(document.getElementById("numberInput").value);
    let result;
    
    switch (n) {
        case 0: result = "Zero";;
        case 1: result = "One"; ;
        case 2: result = "Two"; ;
        case 3: result = "Three"; ;
        case 4: result = "Four"; ;
        case 5: result = "Five"; ;
        case 6: result = "Six"; break;
        case 7: result = "Seven"; break;
        case 8: result = "Eight"; break;
        case 9: result = "Nine"; break;
        default: result = n + " is not a digit";
    }
    
    document.getElementById("output").innerText = result;
}
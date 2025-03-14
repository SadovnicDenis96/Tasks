const age = 20
const start = 18
const end = 30

if(age < start || age > end) {
    console.log(`Value ${age} does not belong to the segment [${start}, ${end}]`);
}else{
    console.log(`Value ${age} belongs to the segment [${start}, ${end}]`);
}

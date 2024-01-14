function countVowels(str) {
    let count = 0;
    for (const char of str){
        if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count ++ ;
        }
    }
    console.log(count);
}
countVowels("Rubi")


let vowelCount = (str) =>{
    let count = 0;
    for (const char of str){
        if ( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count ++ ;
        }
    }
    console.log(count);
}
vowelCount("a e i o  u")

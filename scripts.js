//Challenge1
console.log("Challenge 1")

let i;
for ( i=1;  i<=30;  i++){
    if(i % 3===0 )
    console.log("Fizz")

    else
    console.log(i)

}

//Challenge 2
console.log("Challenge 2")

let numberList=[1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < numberList.length; i++) {
  numberList[i] = numberList[i] * 5;
}

console.log(numberList)

//Challenge 3
console.log("Challenge 3")

 let wordsArray=["cat","bottle","window","car","javascript"]

 for (let i= 0 ; i <  wordsArray.length; i++)
 {
    if(wordsArray[i].length > 4)
    console.log("Long word alert!")
    else
    console.log(wordsArray[i])
 }

//Challenge 4 
console.log("Challenge 4 is displayed in the page")

const paragraph = document.getElementById("myParagraph");

for (let i = 1; i <= 7; i++) {
    paragraph.textContent += i ;
}


//Challenge 5
console.log("Challenge 5")

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


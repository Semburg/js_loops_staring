for(let i=0; i<5;i++){
    console.log("********");
    console.log("")
}

let tree = "";
for(let i=0; i<5;i++){
    tree += "*";
    console.log(tree);
    console.log("")
}

for(i=5; i<=9; i++){
    console.log(i);
}
for(i=50; i>=45; i--){
    console.log(i);
}

let country = ["france", "germany", "spain"];


let number = [10,30,20]
for (let i of number){
    console.log(i*2)
}

for(let i = 0; i<number.length;i++){
    console.log(number[i]*2)
}

number.forEach(x => console.log(x*2))

let index = 0;
while(index < country.length){
    console.log(country[index].toUpperCase())
    index++
}

// let numberX = new Number();
// do{
//     numberX = prompt("Enter the number higher than 100")
// } while (numberX<100)

// *   ANFANG der Uebungen zum Thema
console.log("%cANFANG der Uebungen zum Thema", "color:green")
console.log("%clev1_1", "color:gold");
for(let i=1; i<=10; i++){
    console.log("Hello World " + i)
}

//*  1_2
console.log("%clev1_2", "color:gold");
let newArrayX = Array();
for(let i=0;i<=10;i++){
    newArrayX.push(i)
}
console.log(newArrayX)

//*  1_4
console.log("%clev1_4", "color:gold");
// "Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"
let teacherNames=["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"]
for(let i = 0; i<teacherNames.length; i++){
    console.log(teacherNames[i])
}

//*  1_6
console.log("%clev1_6", "color:gold");
let retArray = new Array();
for(let i=1; i<=100; i++){
    retArray.push("image" + i + ".jpg")
}
console.log(retArray)

//*  1_7
console.log("%clev1_7 - see doc", "color:gold");
let someDoc = document.getElementById("whileDo");
let someI=1;
do{
    someDoc.innerHTML += "THe number is " + someI + "<br>";
    someI++;
} while(someI<6)

//*  1_8
console.log("%clev1_8 - see doc", "color:gold");
let someDoc2 = document.getElementById("whileDoEvenNums");
let someNum=1;

do{
    someNum++;
    if(someNum%2 != 0){
        continue;
    } else if(someNum==18) {
        someDoc2.innerHTML +=someNum;
    } else {
        someDoc2.innerHTML +=someNum + ", ";
    }
} while(someNum<19)

//*  1_9  - loops_mit_input_word

console.log("%clev1_9 - loops mit inputs", "color:gold");
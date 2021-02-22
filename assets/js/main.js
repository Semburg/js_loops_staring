for (let i = 0; i < 5; i++) {
    console.log("********");
    console.log("")
}

let tree = "";
for (let i = 0; i < 5; i++) {
    tree += "*";
    console.log(tree);
    console.log("")
}

for (i = 5; i <= 9; i++) {
    console.log(i);
}
for (i = 50; i >= 45; i--) {
    console.log(i);
}

let country = ["france", "germany", "spain"];


let number = [10, 30, 20]
for (let i of number) {
    console.log(i * 2)
}

for (let i = 0; i < number.length; i++) {
    console.log(number[i] * 2)
}

number.forEach(x => console.log(x * 2))

let index = 0;
while (index < country.length) {
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
for (let i = 1; i <= 10; i++) {
    console.log("Hello World " + i)
}

//*  1_2
console.log("%clev1_2", "color:gold");
let newArrayX = Array();
for (let i = 0; i <= 10; i++) {
    newArrayX.push(i)
}
console.log(newArrayX)

//*  1_4
console.log("%clev1_4", "color:gold");
// "Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"
let teacherNames = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"]
for (let i = 0; i < teacherNames.length; i++) {
    console.log(teacherNames[i])
}

//*  1_6
console.log("%clev1_6", "color:gold");
let retArray = new Array();
for (let i = 1; i <= 100; i++) {
    retArray.push("image" + i + ".jpg")
}
console.log(retArray)

//*  1_7
console.log("%clev1_7 - see doc", "color:gold");
let someDoc = document.getElementById("whileDo");
let someI = 1;
do {
    someDoc.innerHTML += "THe number is " + someI + "<br>";
    someI++;
} while (someI < 6)

//*  1_8
console.log("%clev1_8 - see doc", "color:gold");
let someDoc2 = document.getElementById("whileDoEvenNums");
let someNum = 1;

do {
    someNum++;
    if (someNum % 2 != 0) {
        continue;
    } else if (someNum == 18) {
        someDoc2.innerHTML += someNum;
    } else {
        someDoc2.innerHTML += someNum + ", ";
    }
} while (someNum < 19)

//*  1_9  - loops_mit_input_word

console.log("%clev1_9 - loops mit inputs  -  see doc", "color:gold");

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']
const numberIn = document.getElementById("number_in")
let result1_9 = document.getElementById("result_1_9")

function checkNum() {
    result1_9.innerHTML = "";
    for (let i = 0; i < words.length; i++) {
        if (numberIn.value == words[i].length) {
            result1_9.innerHTML += words[i] + "<br>"
        }
    }
}


//*  2_!  - for loop Array

console.log("%clev2_1 - for loop Array ", "color:orange");

//?   Für Ornderbearbeitung(und Dateien drin) wird wohl eine Funktionsanpassung erforderlich. Auch conditions sind ohne vorgegebene Dateistruktur eher nicht noetig. 

function imageArray2() {
    let retArray2 = new Array();
    for (let i = 1; i <= 100; i++) {
        retArray2.push("image" + i + ".jpg")
    }
    // console.log(retArray2)  //*    Für den Fall ohne return
    return retArray2;
}
console.log(imageArray2())

//*  2_2  - loop with input 2

console.log("%clev2_2 - loop with input - see Doc ", "color:orange");

const numberIn2 = document.getElementById("number_in2")
let result2_2 = document.getElementById("result_2_2")

function checkNum2() {
    let someO = ""
    for (i = 0; i < numberIn2.value; i++) {
        someO += "o"
    }
    result2_2.innerHTML = "l" + someO + "p"
}


//*  3_!  - huge Text 

console.log("%clev3_! - ", "color:darkred");

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `


//! without function yet
console.log(text.length)
let textTrennNumber = 100;
let textParts;
let checkingModulo = false; //*  for checking the Rest
let newArray3 = new Array();
if (text.length % textTrennNumber == 0) {
    textParts = text.length / textTrennNumber
} else {
    textParts = Math.floor(text.length / textTrennNumber + 1)
    checkingModulo = true;
}
for (let i = 0; i < text.length; i++) {
    let partText = "";
    let moduloChecker = i % textTrennNumber; //* checking the slice line
    if (moduloChecker == 0) {
        partText = text.slice(i, Number(i + textTrennNumber))
        console.log(partText + " " + Number(i / textTrennNumber + 1) + "of" + textParts)
        newArray3.push(partText);
    }
}
//*   ARRAY below
// console.log(newArray3.length)  
// console.log(newArray3)



//*  3_2  - Array with numbers

console.log("%clev3_2 - Array with numbers", "color:darkred");
let numArr = [5, 22, 15, 100, 55]
for (let i = 0; i < numArr.length; i++) {
    for (let j = 2; j < numArr[i]; j++) {
        if (numArr[i] % j == 0 && numArr[i] > 2) {
            let teilNummer = Number(numArr[i] / j)
            console.log(numArr[i] + " ist durch " + j + " teilbar. Ergebnis ist: " + teilNummer)
        }
    }
}

//*  3_3  - Vertiefung 2_2

console.log("%clev3_3 - Vertiefung 2_2- siehe Doc.", "color:darkred");
const numberIn3 = document.getElementById("number_in3")
let result3_2 = document.getElementById("result_3_2")

function checkNum3() {
    let someO = ""

    if (numberIn3.value == 0){
        result3_2.innerHTML = "Fehlermeldung";
    } else if(numberIn3.value %2 == 0){
        for(let i=0; i<numberIn3.value;i++){
            someO +="o"
        }
        result3_2.innerHTML = "l" + someO + "p";
    } else if(numberIn3.value %2 != 0){
        for(let i=1; i<=numberIn3.value;i++){
            if(i%2==0){
                someO +="0"
            }else{
                someO +="o"
            }
        }
        result3_2.innerHTML = "l" + someO + "p";
    }
}


//*  3_  - Summe der Zahlen

console.log("%clev3_3 - Summe der Zahlen - siehe doc", "color:darkred");

const mainNumber = document.getElementById("main_number")
const teilNum1 = document.getElementById("teil_num1")
const teilNum2 = document.getElementById("teil_num2")
let checkDividers = document.getElementById("check_dividers");
checkDividers.style.color = "tomato"


let sum = 0;


function showSum(){
    sum=0;
    checkDividers = ""
    let counter = mainNumber.value;
    let numberToDevide1 = teilNum1.value;
    let numberToDevide2 = teilNum2.value;
    if(counter == 0 || counter == null){
        console.log("Fehlermeldung 0")
        sum = "Eingabezahl 0 oder nicht eingegeben"

    } else if(numberToDevide1 == numberToDevide2){
        sum = "Deviders sind gleich!" + "<br>"
    
    } else {
        for(let i=1;i<counter;i++){
            if(i%numberToDevide1 ==0){
                sum += i;
            }
        }
        for(let i=1; i<counter; i++){
            if(i%numberToDevide2 ==0){
                sum += i;
            }
        }
    }
    document.getElementById("showResult3_4").innerHTML = sum;
}



//opcenito
function correct() {
    document.getElementById("task").style.pointerEvents = "none";
    document.getElementById("continue").style.display = "inherit";
}

function wrong() {
    document.getElementById("task").style.pointerEvents = "none";
    document.getElementById("retry").style.display = "inherit";
}

function retry() {
    window.location.reload();
}

// basic_1
function basicOption(element) {
    var option = element.innerHTML;
    if (option == "output") {
        document.getElementById("emptyInp").innerHTML = option;
        document.getElementById("output").style.display = "none";
        document.getElementById("write").style.display = "inline-block";
        document.getElementById("print").style.display = "inline-block";

    }
    else if (option == "write") {
        document.getElementById("emptyInp").innerHTML = option;
        document.getElementById("write").style.display = "none";
        document.getElementById("output").style.display = "inline-block";
        document.getElementById("print").style.display = "inline-block";

    }
    else if (option == "print") {
        document.getElementById("emptyInp").innerHTML = option;
        document.getElementById("print").style.display = "none";
        document.getElementById("output").style.display = "inline-block";
        document.getElementById("write").style.display = "inline-block";
    }
}

function reset() {
    document.getElementById("emptyInp").innerHTML = "";
    document.getElementById("print").style.display = "inline-block";
    document.getElementById("output").style.display = "inline-block";
    document.getElementById("write").style.display = "inline-block";
}

function checkOption() {
    var selected = document.getElementById("emptyInp").innerHTML;
    if (selected === "print") {
        document.getElementById("emptyInp").style.backgroundColor = "lightgreen";
        correct();
    }
    else {
        document.getElementById("emptyInp").style.backgroundColor = "red";
        wrong();   
    }
}

//basic_2
function checkResult() {
    var rez = parseInt(document.getElementById("rez").value);
    if (rez === 7) {
        document.getElementById("rez").style.backgroundColor = "lightgreen";
        correct();
    }
    else {
        document.getElementById("rez").style.backgroundColor = "red";
        wrong();
    }
}

//basic_3
function checkFloat(element) {
    var isFloat = element.innerHTML;
    isFloat = parseFloat(isFloat);
    if (Number(isFloat) === isFloat && isFloat % 1 !== 0) {
        element.style.backgroundColor = "lightgreen";
        correct();
    }
    else {
        element.style.backgroundColor = "red";
        wrong();
    }
}

//strings1
function checkString(){
    inp1 = document.getElementById("inp1").value;
    inp2 = document.getElementById("inp2").value;
    if(inp1 == "print" && inp2 == "'"){
        document.getElementById("inp1").style.backgroundColor = "lightgreen";
        document.getElementById("inp2").style.backgroundColor = "lightgreen";
        correct();
    }
    else{
        if(inp1 == "print" && inp2 != "'"){
            document.getElementById("inp1").style.backgroundColor = "lightgreen";
            document.getElementById("inp2").style.backgroundColor = "red";
        }
        else if(inp1 != "print" && inp2 == "'")
        {
            document.getElementById("inp1").style.backgroundColor = "red";
            document.getElementById("inp2").style.backgroundColor = "lightgreen";
        }
        else{
            document.getElementById("inp1").style.backgroundColor = "red";
            document.getElementById("inp2").style.backgroundColor = "red";
        }
        wrong();
    }
}


//strings2
function checkWord() {
    let word = document.getElementById("inptString").value;
    if(word == "777hello"){
        document.getElementById("inptString").style.backgroundColor = "lightgreen";
        correct();        
    }
    else
    {
        document.getElementById("inptString").style.backgroundColor = "red";
        wrong();
    }
}

//variables1
function checkAge() {
    let age = document.getElementById("variableAge").value;
    var number = document.getElementById("variableNumber").value;
    if (age == "age" && parseInt(number) == 42) {
        document.getElementById("variableAge").style.backgroundColor = "lightgreen";
        document.getElementById("variableNumber").style.backgroundColor = "lightgreen";
        correct();
    }
    else {
        if(age == "age" && parseInt(number) != 42){
            document.getElementById("variableAge").style.backgroundColor = "lightgreen";
            document.getElementById("variableNumber").style.backgroundColor = "red";
        }
        else if(age != "age" && parseInt(number) == 42)
        {
            document.getElementById("variableAge").style.backgroundColor = "red";
            document.getElementById("variableNumber").style.backgroundColor = "lightgreen";
        }
        else{
            document.getElementById("variableAge").style.backgroundColor = "red";
            document.getElementById("variableNumber").style.backgroundColor = "red";
        }
        wrong();
    }
}

//variables2
function checkChoice(element) {
    console.log(element.innerHTML);
    if (element.innerHTML == "eggseggseggs") {
        element.style.backgroundColor = "lightgreen";
        correct();
    }
    else {
        element.style.backgroundColor = "red";
        wrong();
    }
}

//variables3
function assign() {
    let strNum = document.getElementById("strNum").value;
    if(parseInt(strNum) == 24){
        document.getElementById("strNum").style.backgroundColor = "lightgreen";
        correct();
    }
    else{
        document.getElementById("strNum").style.backgroundColor = "red";
        wrong();
    }
}

//variables4
function operator() {
    var num = parseInt(document.getElementById("variableOutput").value);
    if (num == 12) {
        document.getElementById("variableOutput").style.backgroundColor = "lightgreen";
        correct();
    }
    else {
        document.getElementById("variableOutput").style.backgroundColor = "red";
        wrong();
    }
}

//control1
function checkBool(element){
    let boolName = element.innerHTML;
    if (boolName == "True and False") {
        element.style.backgroundColor = "lightgreen";
        correct();        
    }
    else
    {
        element.style.backgroundColor = "red";
        wrong();
    }
}

//control2
function compareNum(){
    let comparison = document.getElementById("numberCompare").value;
    if(comparison == "True"){
        document.getElementById("numberCompare").style.backgroundColor = "lightgreen";
        correct();
    }
    else{
        document.getElementById("numberCompare").style.backgroundColor = "red";
        wrong();
    }
}

//control3
function checkIf(){
    let numberIf =parseInt(document.getElementById("numIf").value);
    if(numberIf == 3){
        document.getElementById("numIf").style.backgroundColor = "lightgreen";
        correct();
    }
    else{
        document.getElementById("numIf").style.backgroundColor = "red";
        wrong();
    }
}

//control4
function checkElse(){
    let numElse = document.getElementById("numberElse").value;
    if(numElse == "B"){
        document.getElementById("numberElse").style.backgroundColor = "lightgreen";
        correct()
    }
    else{
        document.getElementById("numberElse").style.backgroundColor = "red";
        wrong();
    }
}

//control5
function rightOption(){
    let logicInpt = document.getElementById("inptLogic").value;
    if(logicInpt == "Underage"){
        document.getElementById("inptLogic").style.backgroundColor = "lightgreen";
        correct();        
    }
    else{
        document.getElementById("inptLogic").style.backgroundColor = "red";
        wrong();
    }
}

//control6
function checkWhile(){
    let whileNum =parseInt(document.getElementById("numberWhile").value);
    if(whileNum == 4){
        document.getElementById("numberWhile").style.backgroundColor = "lightgreen";
        correct();
    }
    else{
        document.getElementById("numberWhile").style.backgroundColor  ="red";
        wrong();
    }

}

//list1
function checkList(){
    let indexValue =parseInt(document.getElementById("inputList").value);
    if(indexValue == 4){
        document.getElementById("inputList").style.backgroundColor = "lightgreen";
        correct();
    }
    else{
        document.getElementById("inputList").style.backgroundColor = "red";
        wrong();
    }
}

//list2
function listConc(){
    let concValue = document.getElementById("inptConc").value;
    if(concValue == "yo"){
        document.getElementById("inptConc").style.backgroundColor = "lightgreen";
        correct();
    }
    else{
        document.getElementById("inptConc").style.backgroundColor = "red";
        wrong();
    }
}

//list3
function listOp(element){
    let listChoice = element.innerHTML;
    if (parseInt(listChoice) == 8) {
        element.style.backgroundColor = "lightgreen";
        correct();
    }
    else{
        element.style.backgroundColor = "red";
        wrong();
    }
}

//list4
function checkFor(){
    let numFor = document.getElementById("numFor").value;
    if(parseInt(numFor) == 5){
        document.getElementById("numFor").style.backgroundColor = "lightgreen";
        correct();
    }
    else{
        document.getElementById("numFor").style.backgroundColor = "red";
        wrong();
    }
}
//list5
function trueFalse(element){
    var isTrue = element.innerHTML;
    if (isTrue  == "True") {
        element.style.backgroundColor = "lightgreen";
        correct();
    }
    else {
        element.style.backgroundColor = "red";
        wrong();
    }
}
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let p1El = document.getElementById("passwordOne")
let p2El = document.getElementById("passwordtwo")
var y = ""
let ccTemp = 0
let ccTemp2 = 0
const span = document.getElementById("span1");
const span2 = document.getElementById("span2");

function buttonClick(){
    var x = document.getElementById("myText").value;
    console.log(x)
    y = x
    console.log(y)
    const temp = generatePassword1()
    const temp2 = generatePassword2()
    p1El.innerText = temp  
    p2El.innerText = temp2 
    ccTemp = temp
    ccTemp2 = temp2
}

function generatePassword1(){
        let pass=""
        for (let i = 1; i <= y ; i++)
        {
        pass += characters[Math.floor(Math.random()*90)+1]
        }
        return pass
}

function generatePassword2(){
        let pass2=""
        for (let i = 1; i <= y ; i++)
        {
        pass2 += characters[Math.floor(Math.random()*90)+1]
        }
        return pass2
}


span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

span2.onclick = function() {
  document.execCommand("copy");
}

span2.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span2.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});
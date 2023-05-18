// buttons
let btn  = document.getElementById("btn")
let btnG = document.getElementById("btnG")
let newGameBTN = document.getElementById("newGame")

// password/text inputs
let input = document.getElementById("input")
let guessLetter = document.getElementById("guessLetter")

// display
let guessOutput = document.getElementById("guessOutput")
let wrongL = document.getElementById("wrongL")

// man
let rope = document.getElementById("rope")
let head = document.getElementById("head")
let leftA = document.getElementById("leftA")
let body = document.getElementById("body")
let rightA = document.getElementById("rightA")
let leftL = document.getElementById("leftL")
let rightL = document.getElementById("rightL")


let overlay = document.getElementById("overlay")

//button click calls
btn.addEventListener("click", onClick1)
btnG.addEventListener("click", onClick2)
overlay.addEventListener("click", overlayOff)
newGameBTN.addEventListener("click", newGame)



// game result


// could add a hint button reveals randm number from valid inxed (underscore)
// could get random movies from internet

//booleans for running game
gameStart=true
setup = true

//setting word and letter guess in var


//strings updating displays
let updateWL = ""
let updateWord = ""

let arrWord = []
let arrUpdate = []

let man = 0

let lose = false
let win = false






// when word is inputted (button click)
function onClick1(){
    let word = input.value
    console.log(word)

    if(word.includes(" ")){
        alert("Spaces cannot be inputted.")
    }

    else if (word.length<1){ 
        alert("Input must have at least 1 character, please try again!")

    }
    else{
        if (gameStart){
            // gameStart= false   
            if (setup){ 
                setup = false


                
                for (let index = 0; index < word.length; index++) {
                     arrWord.push(word[index])
                     arrUpdate.push("_")
                    
                 }
                let underscore = ""
            
                for (let index = 0; index < arrUpdate.length; index++) {
                    underscore+= arrUpdate[index] + " "
                    
                }
                guessOutput.innerText =underscore

                rope.style.opacity = "0"
                head.style.opacity = "0"
                leftA.style.opacity = "0"
                body.style.opacity = "0"
                rightA.style.opacity = "0"
                leftL.style.opacity = "0"
                rightL.style.opacity = "0"


            }
    
    
            // let num = word.length
            // for(i=0 ; i<num ; i++){
            //     document.getElementById("guess").innerHTML += "<input type='text' id='g' maxlength='1'>";
            // }
    
        }

    }
}

//when letter guess is inputted

function onClick2(){
    let letter = guessLetter.value
    let word = input.value
    console.log(letter)

    // lsor == false
    if(setup == false &&  win == false && lose == false){  
        if (letter.length<1){ 
            alert("Input must have 1 character, please try again!")
        }
        else if(letter == " "){
            alert("Spaces cannot be inputted.")
        }
        else if(updateWL.includes(letter) == true){
            alert("This guess has already been made, try again!")
        }
        //incorrect letter
        else if(word.includes(letter) ==false && arrUpdate.includes("_") == true && updateWL.includes(letter) == false){ 
            updateWL += String(letter) + " "
            wrongL.innerText = updateWL


            //man 
            man++
            createMan(man)

            
            
        }





        //correct letter
        else if(word.includes(letter) && updateWL.includes(letter) == false){ 
            for (let index = 0; index < word.length; index++) {
                let l = word[index];
                if (l == letter){
                    arrUpdate[index] = String(letter)
                }
                
            }

            console.log(arrUpdate)
            guessOutput.innerText = arrTOstr(arrUpdate)



        } 
        // game win
        if(arrUpdate.includes("_")== false){
            win = true
            overlay.style.animation = "fadeIn 3s"
            overlay.style.display = "block"
            overlay.innerText = "YOU WIN - Saving the man!"
            

        }
        // game lose
        if (man == 7){
            lose = true
            overlay.style.animation = "fadeIn 3s"
            overlay.style.display = "block"
            overlay.innerText = `YOU LOST - Correct Word: ${input.value}`
            
        }

    


    }

        


}


function arrTOstr(arr){
    let str = ""

    for (let index = 0; index < arr.length; index++) {
        str += arr[index] + " ";
        
    }

    return str
}


function createMan(num){

    if (num == 1){
        // rope.innerText = "|"
        rope.style.animation = "fadeIn 2s"
        rope.style.opacity = "1"

    }
    if (num == 2){
        // head.innerText = "O"
        head.style.animation = "fadeIn 2s"
        head.style.opacity = "1"

        
    }
    if (num == 3){
        // body.innerText = "|"
        body.style.animation = "fadeIn 2s"
        body.style.opacity = "1"
        
    }
    if (num == 4){
        // leftA.innerText = "/"
        leftA.style.animation = "fadeIn 2s"
        leftA.style.opacity = "1"
        
    }
    if (num == 5){
        // rightA.innerText = "\\" 
        rightA.style.animation = "fadeIn 2s"
        rightA.style.opacity = "1"
        
    }
    if (num == 6){
        // leftL.innerText = "/"
        leftL.style.animation = "fadeIn 2s"
        leftL.style.opacity = "1"
        
    }
    if (num == 7){
        // rightL.innerText = "\\"
        // rightL.style.animation = "fadeIn 1s"
        rightL.style.opacity = "1"
        // lose = true
        // overlay.style.animation = "fadeIn 3s"
        // overlay.style.display = "block"
        // overlay.innerText = `YOU LOST - Correct Word: ${input.value}`

        
    }
}

function overlayOff(){
    if (win != true || lose != true)
    overlay.style.display = "none"
}


function newGame(){
    // clear text boxes
    rope.style.opacity = "1"
    head.style.opacity = "1"
    leftA.style.opacity = "1"
    body.style.opacity = "1"
    rightA.style.opacity = "1"
    leftL.style.opacity = "1"
    rightL.style.opacity = "1"

    rope.style.animation = "none"
    head.style.animation = "none"
    leftA.style.animation = "none"
    body.style.animation = "none"
    rightA.style.animation = "none"
    leftL.style.animation = "none"
    rightL.style.animation = "none"
    
    gameStart=true
    setup = true




    updateWL = ""
    updateWord = ""

    arrWord = []
    arrUpdate = []

    man = 0

    lose = false
    win = false
    wrongL.innerText = "incorrect characters placed here..."
    guessOutput.innerText = "input word..."
    document.getElementById('input').value = "";
    document.getElementById('guessLetter').value = "";


}

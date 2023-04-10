let input = document.getElementById("inp");
let result = document.getElementById("res");
let winners = document.getElementById("win");
let vanish = document.getElementById("show")

function show(num){
    input.innerHTML += num
}

function get(){
    let shows = Math.floor(Math.random()*19)
    console.log(shows);
    if (shows == 0) {
        shows = shows + 1
    }
    result.innerHTML = shows
    if (input.innerHTML == "") {
        alert("select the number")
        result.innerHTML = ""
        
    }
    if(input.innerHTML >= 22){
      alert("select number correctly")
      reset()
    }
    
      if (input.innerHTML === result.innerHTML && input.innerHTML != "") {
        winners.style.display="block"
        document.getElementById("bgm").play()
      }
      vanish.style.display="none"
}

function reset(){
    input.innerHTML = ""
    result.innerHTML = ""
    vanish.style.display="block"
}

function winner() {
    winners.style.display="none"
    
}

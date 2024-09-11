let clear
let Taal=new Audio("Music/Tal.mp3")
let Mus=new Audio("Music/MItraz.mp3")
let tere=new Audio("Music/terepyermain.mp3")
let song=[
    {ele:Taal,audioName:"Taal song",img:"images/tallimage.jpg"},
    {ele:Mus,audioName:"Muskhirahat song",img:"images/Muskhurahat.jpeg"},
    {ele:tere,audioName:"Tere Pyar main song",img:"images/tere_pyer.jpeg"}
]

let current=0
let currentSong=song[current].ele
let Songname=document.querySelector(".SongName")
let playbtn=document.querySelector("#pausebtn")
let forward=document.querySelector(".forward")
let backword=document.querySelector(".backword")
let img=document.querySelector('.img')
for(const songs of song){
    console.log(songs)
    songs.ele.addEventListener('ended',function(){
        fun('forward')
    playpausesong()
    })
}
img.classList.remove('rotate')
img.src=song[current].img
Songname.textContent=song[current].audioName
backword.addEventListener('click',function(){
    fun('backword')
    playpausesong()
})
forward.addEventListener('click',function(){
    fun('forward')
    playpausesong()
})


let pausebtn=document.querySelector(".pause")
pausebtn.addEventListener("click",function(){
   playpausesong()
   
    
})

let fun=function(action){
    currentSong.pause()
    clearInterval(clear)
    document.body.style.backgroundColor="black"
    currentSong.currentTime=0;
if(action==="forward"){
    current++;
  if(current >song.length - 1){
    current=0
  }
  
}
if(action==="backword"){
    current--;
    if(current <0 ){
        current=song.length -1
    }

}
currentSong=song[current].ele
Songname.textContent=song[current].audioName
img.src=song[current].img

}
const playpausesong=function(){
    if(currentSong.paused){
        currentSong.play()
        playbtn.className="bi bi-pause-circle-fill"
        img.classList.add('rotate')
       clear= setInterval(changeBackgroundColor,500);
      
    }else{

        currentSong.pause()
        clearInterval(clear)
        playbtn.className="bi bi-play-circle-fill"
        img.classList.remove('rotate')
        document.body.style.backgroundColor="black"
       
    }
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
    document.querySelector(".con").style.backgroundColor="black"
}



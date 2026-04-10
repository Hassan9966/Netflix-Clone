console.log("Welcome to spotify");

//Initialize The Variables;
let songIndex=0;
let audioElement = new Audio("songs/1.mp3");

let masterPlay=document.getElementById("masterPlay");
let progressBar=document.getElementById("range")
let Gif=document.getElementById("gif")
let songItem=Array.from(document.getElementsByClassName("songItem"));
let ifi=document.getElementById("if"); 
let songs = [
     {
          songName: "Let me love you 1",
          filePath: "songs/1.mp3",
          coverPath: "Cover/1.jpg",
     },
     {
          songName: "Let me love you 2",
          filePath: "songs/2.mp3",
          coverPath: "Cover/2.jpg",
     },
     {
          songName: "Let me love you 3",
          filePath: "songs/3.mp3",
          coverPath: "Cover/3.jpg",
     },
     {
          songName: "Let me love you 4",
          filePath: "songs/4.mp3",
          coverPath: "Cover/4.jpg",
     },
     {
          songName: "Let me love you 5",
          filePath: "songs/5.mp3",
          coverPath: "Cover/5.jpg",
     },
     {
          songName: "Let me love you 6",
          filePath: "songs/6.mp3",
          coverPath: "Cover/6.jpg",
     },
     {
          songName: "Let me love you 7",
          filePath: "songs/7.mp3",
          coverPath: "Cover/7.jpg",
     },
     {
          songName: "Let me love you 8",
          filePath: "songs/8.mp3",
          coverPath: "Cover/i.jpg",
     },
];
songItem.forEach((element, i) => {
//   console.log(element, i);
  element.querySelector(".imageI").src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//HAndle play/puse;
masterPlay.addEventListener("click",()=>{
     if(audioElement.paused ||
          audioElement.currentTime <=0
     ){
          audioElement.play();
          masterPlay.classList.remove("fa-circle-play");
          masterPlay.classList.add("fa-circle-pause");
          Gif.style.opacity=1;
     }else{
          audioElement.pause();
           masterPlay.classList.add("fa-circle-play");
           masterPlay.classList.remove("fa-circle-pause");
           Gif.style.opacity = 0;
     }
})
//LIsten to Events;
audioElement.addEventListener("timeupdate",()=>{
     
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
     progressBar.value=progress;
});
progressBar.addEventListener("change",()=>{
     audioElement.currentTime=progressBar.value*audioElement.duration/100
});
//Make All function;
let makeallPlays=()=>{

     Array.from(document.getElementsByClassName("rrr")).forEach((element)=>{
          element.classList.add("fa-circle-play");
          element.classList.remove("fa-circle-pause");
     })
}
Array.from(document.getElementsByClassName("rrr")).forEach((element)=>{
     element.addEventListener("click",(e)=>{
          console.log(e.target);
          songIndex=parseInt(e.target.id);
          
          makeallPlays();
          e.target.classList.add("fa-circle-pause");
          e.target.classList.remove("fa-circle-play");
          audioElement.src=`songs/${songIndex + 1}.mp3`;
          ifi.innerText = songs[songIndex].songName;
          audioElement.currentTime=0;
          audioElement.play();
          Gif.style.opacity=1;
          makeallPlays.classList.remove("fa-circle-play");
          masterPlay.classList.add("fa-circle-pause");
     })
});
document.getElementById("next").addEventListener("click",()=>{if(songIndex>=8){songIndex=0}else{songIndex+=1};audioElement.src=`songs/${songIndex + 1}.mp3`;
audioElement.currentTime=0;audioElement.play();
Gif.style.opacity=1;
makeallPlays.classList.remove("fa-circle-play");
masterPlay.classList.add("fa-circle-pause");
ifi.innerText = songs[songIndex].songName;});

//Previous Button;
document.getElementById("previous").addEventListener("click",()=>{
     if(songIndex<=0){songIndex=0}
     else{songIndex-=1};
     audioElement.src=`songs/${songIndex+1}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     Gif.style.opacity=1;
     makeallPlays.classList.remove(`fa-circle-play`);
     masterPlay.classList.add("fa-circle-pause");
     ifi.innerText=songs[songIndex].songName;
     
})
console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitems'));

let songs = [
    {songitems: "Jugnu - Badshah, Nikhita Gandhi", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songitems: "Lover - Diljit Dosanjh, Intense", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songitems: "8 Parche - Baani Sandhu, Gur Sindhu", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songitems: "Excuses - AP Dhillon, Gurinder Gill", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songitems: "Clash - Diljeet Dosanjh", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songitems: "Yaar Bolda X Body - Desi Drill", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songitems: "Top Notch Gabru - Vicky, Kaptaan", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songitems: "Bapu Zimidar - Jassi Gill", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songitems: "Jatti Da Crush - KV Singh, Nisha Bhatt", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songitems")[0].innerText = songs[i].songitems; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('ppn')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('ppn')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songitems;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songitems;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songitems;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
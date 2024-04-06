var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// play/pause buttons
document.querySelector("#play").addEventListener("click",function(){
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click",function(){
	video.pause();
	console.log("Pause Video");
});


// slow down
document.querySelector("#slower").addEventListener("click",function(){
	video.playbackRate = video.playbackRate*0.9;
	console.log(video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click",function(){
	video.playbackRate = video.playbackRate*1.1;
	console.log(video.playbackRate);
});

// skip
document.querySelector("#skip").addEventListener("click",function(){
	let updatedtime = video.currentTime + 10;
	if (updatedtime >= video.duration) {
		video.currentTime = 0;
		console.log(video.currentTime);
	}
	else {
		video.currentTime = updatedtime;
		console.log(video.currentTime);
	}
});

// mute
document.querySelector("#mute").addEventListener("click",function(){
	
	if (video.muted == false) {
		document.querySelector("#mute").innerHTML= "Unmute";
		video.muted = true;
		console.log("not mute");
	}
	else {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
		console.log('muted');
	}
});
// volume slider
document.querySelector("#slider").addEventListener("click",function(){
	video.volume = slider.value / 100;
	document.querySelector("#volume").innerHTML = video.volume *100 +"%";
	console.log(video.volume)
  	
});


// old school or not
document.querySelector("#vintage").addEventListener("click",function(){
	video.classList.add("oldSchool");
	console.log("Old School Coloring");
});
document.querySelector("#orig").addEventListener("click",function(){
	video.classList.remove("oldSchool");
	console.log("Original Coloring")

});


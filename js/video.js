var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


// assuming you have buttons with these IDs in your HTML:
// #play, #pause, #slower, #faster, #skip

document.querySelector("#play").addEventListener("click", function() {
    console.log("In play");
    video.play();
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("In pause");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    console.log("In slower");
    console.log("Current speed is " + video.playbackRate);
    video.playbackRate *= 0.90;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    console.log("In faster");
    console.log("Current speed is " + video.playbackRate);
    video.playbackRate /= 0.90;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("In skip");
    console.log("The duration is " + video.duration);
    console.log("Current location is " + video.currentTime);
    video.currentTime += 10;
    console.log("New location is " + video.currentTime);
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
        console.log("Going back to beginning");
    }
});

document.querySelector("#mute").addEventListener("click", function() {
    console.log("In mute");
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("In volume slider");
	console.log("Current volume is " + video.volume * 100 + "%");
	video.volume = this.value / 100;
	console.log("New volume is " + video.volume * 100 + "%");
	document.querySelector("#volume").innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("In vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {	
	console.log("In original");
	video.classList.remove("oldSchool");
});



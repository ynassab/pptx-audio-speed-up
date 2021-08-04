
var video = document.getElementById('video');
var image = document.getElementById('image');
var slide_num = document.getElementById('slide_num');

video.playbackRate = 2;

var file = {

	i: 0,
	
	changeSource: function () {
		
		slide_num.innerHTML = "Audio file " + file.i ;  // add total slide number
		
		var vid_filename = "ppt/media/media"+file.i+".m4a";
		var im_filename = "slides/Slide"+file.i+".png";
		
		video.setAttribute('src', vid_filename); 
		image.setAttribute('src', im_filename);

		video.load();
		video.play();
		video.playbackRate = 2;
	},
	
	next: function () {
		file.i++;
		file.changeSource();
	},
	
	back: function () {
		file.i--;
		file.changeSource();
	}
}
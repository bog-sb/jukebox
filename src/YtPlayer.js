function YtPlayer(url) {
	this.url = url;
	this.player = null;
	this.onFinishedCallback = null;

	this.getVideoId = function() {
		var i = this.url.indexOf("v=");
		var id = this.url.substring(i + 2, i + 13);
		return id;
	};
}

YtPlayer.prototype.initPlayer = function() {
	$("#player").append('<div class="video" id="' + this.url + '"></div>');
	this.player = new YT.Player(this.url, {
		height : '390',
		width : '640',
		videoId : this.getVideoId(),
		events : {
		}
	});
};

YtPlayer.prototype.play = function() {
	this.player.playVideo();
};

YtPlayer.prototype.pause = function() {
	this.player.pause();
};

YtPlayer.prototype.onFinished = function(callback) {
	this.onFinishedCallback = callback;
	this.player.addEventListener("onStateChange", "ytStateChanged");
};

YtPlayer.prototype.destroy = function(){
	this.player.destroy();
}

YtPlayer.prototype.finished = function(event){
	if (event.data == YT.PlayerState.ENDED ) {
		this.callback();
    }
}

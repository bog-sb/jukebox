function ScPlayer(url){
	this.url = url;
	this.widget = null;
	this.widgetIframe = null;
}

ScPlayer.prototype.initPlayer = function() {
	$("#player")
			.append(
					'<iframe id="'
							+ this.url
							+ '"   src="https://w.soundcloud.com/player/?url='+this.url+'&volume=5" width="100%" scrolling="no" frameborder="no"></iframe>');

	this.widgetIframe = document.getElementById(this.url);
	this.widget = SC.Widget(this.widgetIframe);

/*	widget.load(url, {
		show_artwork : true
	});*/
};

ScPlayer.prototype.play = function(){
	this.widget.play();
};

ScPlayer.prototype.pause = function(){
	this.widget.pause();
};

ScPlayer.prototype.onFinished = function(callback){
	this.widget.bind(SC.Widget.Events.FINISH, callback);
};

ScPlayer.prototype.destroy = function(){
	this.widgetIframe.remove();
};

window.fbAsyncInit = function() {
	FB.init({
		appId : '674083006008652',
		cookie : true,
		xfbml : true,
		version : 'v2.1'
	});

	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});

};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "http://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// This function is called when someone finishes with the Login
// Button. See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
	FB.getLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
	console.log('statusChangeCallback');
	console.log(response);
	// The response object is returned with a status field that lets the
	// app know the current login status of the person.
	// Full docs on the response object can be found in the documentation
	// for FB.getLoginStatus().
	if (response.status === 'connected') {
		// Logged into your app and Facebook.
		showWelcomeMessage();
	} else if (response.status === 'not_authorized') {
		// The person is logged into Facebook, but not your app.
		document.getElementById('status').innerHTML = 'Please log '
				+ 'into this app.';
	} else {
		// The person is not logged into Facebook, so we're not sure if
		// they are logged into this app or not.
		document.getElementById('status').innerHTML = 'Please log '
				+ 'into Facebook.';
	}
}

// Here we run a very simple test of the Graph API after login is
// successful. See statusChangeCallback() for when this call is made.
function showWelcomeMessage() {
	console.log('Welcome!  Fetching your information.... ');
	FB.api('/me', function(response) {
		console.log('Successful login for: ' + response.name);
		document.getElementById('status').innerHTML = 'Thanks for logging in, '
				+ response.name + '!';
	});

	getUrlsFromGroup();
}

function graphTest() {
	FB.api("/677175935640628/feed", function(response) {
		console.log(response);
		if (response && !response.error) {
			console.log(response);
		}
	});
}

function getUrlsFromGroup() {
	FB.api("/677175935640628/feed", {
		limit : 20
	}, function(response) {
		console.log(response);
		var urls=[];
		if (response && !response.error) {
			for ( var index in response.data) {
				var post = response.data[index];
				if (typeof post.link != 'undefined') {
					urls.push(post.link);
				}
			}
		}
		setUrls(urls)
	});
}

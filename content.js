window.onload = function() {
	var target = document.getElementsByClassName('ad-container')[0];

	var observer = new MutationObserver(function(mutations) {
	    mutations.forEach(function(mutationRecord) {
	        var display = target.style.display;
	        if (display == 'none') {
	        } else {
				showSocialMediaContainer();
	        }
	    });    
	}); observer.observe(target, { attributes : true, attributeFilter : ['style'] });

	if (target.style.display != 'none') {
		showSocialMediaContainer();
	}
}

function showSocialMediaContainer() {
	console.log('Ads!');

	if (document.getElementById('social-block-container')) {
		console.log('social-block-container found!');
	} else {

		var target = document.getElementsByClassName('ad-container')[0];
		document.getElementById('ad-video-player').style.display = 'none';
		document.getElementsByClassName('ad-player')[0].style.display = 'none';
		var socialBlockContainer = `<div id="social-block-container" style="background-color: #00FF00; width: ` + target.style.width + `; height: `+ target.style.height + `;">HELLO</div>`;
		document.getElementsByClassName('ad-container')[0].innerHTML = socialBlockContainer + target.innerHTML;
	}
}

function hideSocialMediaContainer() {
	console.log('No Ads!');

	var socialBlockContainer = document.getElementById('social-block-container');
	socialBlockContainer.parentNode.removeChild(socialBlockContainer);
}
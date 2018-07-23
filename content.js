window.onload=function(){
	var target = document.getElementsByClassName('ad-container')[0];

	var observer = new MutationObserver(function(mutations) {
	    mutations.forEach(function(mutationRecord) {
	        var display = target.style.display;
	        if (display == 'none') {
	        	console.log('No Ads!');
	        } else {
	        	console.log('Ads!');
				showSocialMediaContainer();
	        }
	    });    
	});

	if (target.style.display != 'none') {
		showSocialMediaContainer();
	}

	observer.observe(target, { attributes : true, attributeFilter : ['style'] });
}

function showSocialMediaContainer() {
	alert('Ads being displayed!');
}
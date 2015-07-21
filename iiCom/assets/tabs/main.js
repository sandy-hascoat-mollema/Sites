require.config({
	paths: {
		'index': 'index',
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
		'jquery.ba-resize': 'jquery.ba-resize',
		'jquery.tabs+accordion': 'jquery.tabs+accordion',
	},
	shim: {
		'jquery.ba-resize': ['jquery'],
	},
});

require(['jquery.tabs+accordion'], function() {
	
	$('.accordion, .tabs')
	.TabsAccordion({
		hashWatch: true,
		pauseMedia: true,
		responsiveSwitch: 'tablist',
		saveState: sessionStorage,
	});
});


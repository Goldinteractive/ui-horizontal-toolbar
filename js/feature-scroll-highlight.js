(function () {
	'use strict';
	var $window = $(window),
		$toolbar = $('.ui-horizontal-toolbar'),
		onWindowScroll = function () {
			$toolbar.toggleClass('highlited', $window.scrollTop() < 10);
		};

	// bind events
	$window.on('scroll', onWindowScroll);
	onWindowScroll();
}());
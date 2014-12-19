(function () {
	'use strict';
	var $menuToggle = $('.ui-horizontal-toggle'),
		$toolbar = $('.ui-horizontal-toolbar'),
		/**
		 * Callbacks
		 */
		toggleMobileMenu = function () {
			$toolbar.toggleClass('menu-opened');
		};

	// bind events
	$menuToggle.on('click', toggleMobileMenu);
}());
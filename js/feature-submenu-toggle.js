(function () {
	'use strict';
	var $toolbar = $('.ui-horizontal-toolbar'),
		isAnimating,
		/**
		 * Callbacks
		 */
		toggleSubmenu = function () {
			if (isAnimating) {
				return;
			}

			var $ul = $(this).next('ul'),
				hide = $ul.hasClass('opened');



			isAnimating = hide;

			if (!$ul.data('original-height')) {
				$ul.data('original-height', $ul.height());
			}

			$ul.height(hide ? 0 : $ul.data('original-height'));

			if (!hide) {
				$ul.addClass('opened');
			} else {
				window.setTimeout(function () {
					isAnimating = false;
					$ul.removeClass('opened');
				});
			}
		};

	// bind events
	$toolbar.on('click', '.toggle-submenu', toggleSubmenu);
}());
(function () {
	'use strict';
	var $window = $(window),
		$toolbar = $('.ui-horizontal-toolbar'),
		breakSmall = window.breakSmall || 480,

		/**
		 * Callbacks
		 */

		onWindowResize = function () {

			var $submenus = $('.toggle-submenu', $toolbar).next('ul');

			if ($window.width() > breakSmall) {

				$submenus
					.removeClass('in')
					.closest('li')
					.parent()
					.removeClass('out');

			} else {

				// reset the height of all the submenus on mobile
				$submenus.height('auto');

			}

		},
		toggleSubmenu = function () {

			var $this = $(this),
				$ul = $this.next('ul'),
				$parentLi = $this.closest('li'),
				$parentUl = $parentLi.parent(),
				isShown = $ul.hasClass('in'),
				submenuHeight;

			// Update the classes
			$ul[isShown ? 'removeClass' : 'addClass']('in');
			$parentUl
				.removeClass(isShown ? 'out' : 'in')
				.addClass(isShown ? 'in' : 'out');

			// deal with the submenu height just on the desktop
			if ($window.width() > breakSmall) {

				$ul
					.removeClass('animated')
					.css({
						visibility: 'visible',
						height: 'auto'
					});

				submenuHeight = $ul.height();

				$ul
					.css({
						height: isShown ? submenuHeight : 0,
						visibility: ''
					})
					.addClass('animated');

				window.setTimeout(function () {
					$ul.height(isShown ? 0 : submenuHeight);
				});

			}

		},
		backToTheParent = function () {

			$(this)
				.closest('ul')
				.removeClass('in out')
				.parent()
				.closest('ul')
				.removeClass('in out');

		};

	// bind events
	$toolbar.on('click', '.toggle-submenu', toggleSubmenu);
	$toolbar.on('click', '.back', backToTheParent);
	$window.on('resize', onWindowResize);

}());
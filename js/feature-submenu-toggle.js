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
				isVisible = $ul.hasClass('in'),
				submenuHeight;

			// hide the other menues
			if (!isVisible)
				$toolbar.find('ul.in').removeClass('in')

			// Update the classes
			$ul[isVisible ? 'removeClass' : 'addClass']('in');
			$parentUl
				.removeClass(isVisible ? 'out' : 'in')
				.addClass(isVisible ? 'in' : 'out');

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
						height: isVisible ? submenuHeight : 0,
						visibility: ''
					})
					.addClass('animated');

				window.setTimeout(function () {
					$ul.height(isVisible ? 0 : submenuHeight);
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
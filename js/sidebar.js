function sidebarMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.sidebar-menu__button');
	let links = menu.find('.menu__link');
	let overlay = menu.find('.sidebar-menu__overlay');
	
	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});
	
	links.on('click',() => toggleMenu());
	overlay.on('click',() => toggleMenu());


	function toggleMenu(){
		menu.toggleClass('sidebar-menu_active');
		
		if (menu.hasClass('sidebar-menu_active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}


burgerMenu ('.burger-menu');
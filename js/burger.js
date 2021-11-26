const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
	const menuHeader = document.querySelector('.header__menu');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('header__burger_active');
	menuHeader.classList.toggle('header__menu_active');
	});
}
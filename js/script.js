const nav = document.querySelector('.navigation');

navTop = nav.offsetTop;

window.onscroll = () => {
	const nav = document.querySelector('.navigation');
	const scrollY = window.scrollY;
	const windowHeight = window.innerHeight;
	const home = document.querySelector('.home');
	
	if (scrollY > navTop) {
		nav.classList.add('fixsed');
		home.classList.add('top');
	}else{
		nav.classList.remove('fixsed');
		home.classList.remove('top');
	}
	for (let i = 0; i < arrNav.length; i++) {
		const arrNavThis = arrNav[i].offsetTop;
		if ((scrollY > arrNavThis - windowHeight * 0.7) && (scrollY < arrNavThis+ windowHeight * 0.3) && keyNavLinck) {
			removeActiveNavLinck();
			navLincks[i].classList.add('active');
		}
	}
}

const body = document.querySelector('body');
const navBurger = document.querySelector('.nav-burger');
const navLincks = document.querySelectorAll('.nav-linck');
arrNav = document.querySelectorAll('.scrol-to');
keyNavLinck = true;

navBurger.addEventListener("click", function(e) {
	navBurger.classList.toggle('active');
	body.classList.toggle('lock');
});

for (let i = 0; i < navLincks.length; i++) {
	const navLinck = navLincks[i];
	navLinck.addEventListener('click', function(e) {
		removeActiveNavLinck();
		navBurger.classList.remove('active');
		body.classList.remove('lock');
		navLinck.classList.add('active');
		const el = arrNav[i];
		keyNavLinck = false;
		scrollTo(el);
		setTimeout(function() {
			keyNavLinck = true;
		}, 1000);
	});
}

function removeActiveNavLinck() {
	let navActive = document.querySelector('.nav-linck.active');

	navActive.classList.remove('active');
}

const btnScrollTo = document.querySelector('.trade_in-btn');

btnScrollTo.addEventListener("click", function(e) {
	let el = arrNav.length;
	scrollTo(el);
});

function scrollTo(el) {
	window.scroll({
		left: 0,
		top: el.offsetTop - nav.affsetHeight,
		behavior: 'smooth'
	});
}

const lincks = document.querySelectorAll('.linck');

for (let i = 0; i < lincks.length; i++) {
	const linck = lincks[i];
	linck.addEventListener("click", function(e) {
		e.preventDefault();
	});
}


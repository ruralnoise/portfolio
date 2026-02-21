const button = document.querySelector('.back-to-top')
button.addEventListener('click', ()=>{
	window.scrollTo(0,0)
})
document.addEventListener('scroll', ()=>{
	if (window.scrollY >=600) {
		button.classList.add('active')
	} else {
		button.classList.remove('active')
	}
})
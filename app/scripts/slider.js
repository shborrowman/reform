const slider = document.querySelector('.slider')
const slides = slider.querySelectorAll('.slide')
const slideLength = slides.length
const sliderButtons = slider.querySelectorAll('.button-arrow')
const sliderObserver = new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			slider.classList.add('animate')
			setTimeout(() => {
				slides[0].classList.add('active')
			}, 600)
			sliderObserver.unobserve(slider)
		}
	})
}, {
	rootMargin: '0% 0% -25%'
})

sliderObserver.observe(slider)

sliderButtons.forEach(button => {
	button.addEventListener('click', function() {
		const activeSlide = slider.querySelector('.active')
		const activeIndex = [...activeSlide.parentElement.children].indexOf(activeSlide)
		const slideInPosition = '50%'
		const slideOutPosition = '-50%'
		let nextSlide = activeIndex == (slideLength - 1) ? slides[0] : activeSlide.nextElementSibling
		
		if (this.classList.contains('previous')) {
			nextSlide = activeIndex == 0 ? slides[slideLength - 1] : activeSlide.previousElementSibling
		}

		activeSlide.style.setProperty('--image-position', slideOutPosition)
		activeSlide.style.setProperty('--slide-content', slideOutPosition)
		activeSlide.classList.remove('active')
		nextSlide.style.setProperty('--image-position', slideInPosition)
		nextSlide.classList.add('active')
		setTimeout(() => {
			activeSlide.removeAttribute('style')
			nextSlide.removeAttribute('style')
		}, 300)
	})
})

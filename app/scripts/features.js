const features = document.querySelector('.features')
const featureBoxes = features.querySelectorAll('.features-box')
const featuresObserver = new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const animateDelay = (box, delay) => {
				setTimeout(() => {
					box.classList.add('slide-in')
				}, delay)
			}
			featureBoxes.forEach((box, index) => {
				animateDelay(box, index * 200)
			})
			featuresObserver.unobserve(features)
		}
	})
}, {
	rootMargin: '0% 0% -25%'
})
const featureBoxObserever = new IntersectionObserver(function(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('slide-in')
			featureBoxObserever.unobserve(entry.target)
		}
	})
}, {
	rootMargin: '0% 0% -25%'
})

if (window.innerWidth >= 768) {
	featuresObserver.observe(features)
} else {
	featureBoxes.forEach(box => {
		featureBoxObserever.observe(box)
	})
}

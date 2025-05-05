document.addEventListener('DOMContentLoaded', function () {
	// ВСІ твій код тут

	

	const section = document.querySelector('.featured-work')
	if (section) {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						section.classList.add('visible')
					}
				})
			},
			{ threshold: 0.3 }
		)

		observer.observe(section)
	}

	const openModal = document.getElementById('btn-consult')
	const closeModal = document.getElementById('closeModalBtn')
	const modal = document.getElementById('modal')

	if (openModal && closeModal && modal) {
		openModal.addEventListener('click', function () {
			modal.style.display = 'flex'
		})

		closeModal.addEventListener('click', function () {
			modal.style.display = 'none'
		})
	}
})

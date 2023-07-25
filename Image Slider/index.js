(function () {
	const images = [
		"img1",
		"img2",
		"img3",
		"img4",
		"img5",
		"img6",
		"img7",
		"img8",
		"img9",
		"img10",
		"img11",
		"img12"

	];

	const buttons = document.querySelectorAll('.btn')
	const imgDiv = document.querySelector(".img-container")

	let counter = 0

	buttons.forEach(function (button) {
		button.addEventListener("click", function (e) {
			if (button.classList.contains('btn-left')) {
				counter--
				if (counter < 0) {
					counter = images.length - 1
				}
				imgDiv.style.background = `url('img/${images[counter]}.jpg')`
				imgDiv.style.backgroundSize = "cover"
			}
			if (button.classList.contains('btn-right')) {
				counter++
				if (counter > images.length - 1) {
					counter = 0
				}
				imgDiv.style.background = `url('img/${images[counter]}.jpg')`
				imgDiv.style.backgroundSize = "cover"
			}
		})
	})
})()
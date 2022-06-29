const links = document.querySelectorAll('a')
const highLight = document.createElement('span')
const menuPos = document.getElementById('menu').getBoundingClientRect()

highLight.style.transform = `translate(-${menuPos.left}px, ${menuPos.top}px)`

highLight.classList.add(
	'bg-red-500',
	'absolute',
	'left-0',
	'top-0',
	'cursor-pointer',
	'transition-all',
	'duration-200',
	'-z-10'
)

document.body.appendChild(highLight)

links.forEach((link) => {
	link.addEventListener('mouseover', (e) => {
		const coords = e.target.getBoundingClientRect()

		let top = coords.top + window.scrollY
		let left = coords.left + window.scrollX

		highLight.style.width = `${coords.width}px`
		highLight.style.height = `${coords.height}px`
		highLight.style.transform = `translate(${left}px, ${top}px)`
	})
})

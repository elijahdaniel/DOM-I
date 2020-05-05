const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
}

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img')
logo.setAttribute('src', siteContent['nav']['img-src'])

// --- nav links entered manually
let navLinks = document.querySelectorAll('nav a')
// navLinks[0].textContent = siteContent['nav']['nav-item-1']
// navLinks[1].textContent = siteContent['nav']['nav-item-2']
// navLinks[2].textContent = siteContent['nav']['nav-item-3']
// navLinks[3].textContent = siteContent['nav']['nav-item-4']
// navLinks[4].textContent = siteContent['nav']['nav-item-5']
// navLinks[5].textContent = siteContent['nav']['nav-item-6']

// --- nav links for loop
// for (let i = 0; i < navLinks.length; i++) {
// 	navLinks[i].text = siteContent['nav'][`nav-item-${i + 1}`]
// }

// --- nav links forEach
navLinks.forEach(
	(x, i) => (x.textContent = siteContent['nav'][`nav-item-${i + 1}`])
)

// --- nav links changed to green (task 3)
navLinks.forEach(x => (x.style.color = 'green'))

// --- create two new nav links (task 3)
let firstNav = document.createElement('a')
let textFirstNav = document.createTextNode('Append')
let lastNav = document.createElement('a')
let textLastNav = document.createTextNode('Prepend')
let navBar = document.querySelector('nav')

firstNav.appendChild(textFirstNav)
lastNav.appendChild(textLastNav)
navBar.prepend(firstNav)
navBar.appendChild(lastNav)

// --- cta h1 'dom is awesome'
let ctaTitle = document.querySelector('.cta .cta-text h1')
ctaTitle.textContent = siteContent['cta']['h1']

// --- cta button
let ctaButton = document.querySelector('.cta .cta-text button')
ctaButton.textContent = siteContent['cta']['button']

// --- cta image
let ctaImage = document.querySelector('.cta #cta-img')
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

// --- h4 titles (features, about, services, product, vision)
let titlesH4 = document.querySelectorAll('.main-content .text-content h4')
titlesH4[0].textContent = siteContent['main-content']['features-h4']
titlesH4[1].textContent = siteContent['main-content']['about-h4']
titlesH4[2].textContent = siteContent['main-content']['services-h4']
titlesH4[3].textContent = siteContent['main-content']['product-h4']
titlesH4[4].textContent = siteContent['main-content']['vision-h4']

// --- main content image
let middleImage = document.querySelector('.middle-img')
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src'])

// --- main content text
let contentText = document.querySelectorAll('.main-content .text-content p')
contentText[0].textContent = siteContent['main-content']['features-content']
contentText[1].textContent = siteContent['main-content']['about-content']
contentText[2].textContent = siteContent['main-content']['services-content']
contentText[3].textContent = siteContent['main-content']['product-content']
contentText[4].textContent = siteContent['main-content']['vison-content']

// --- contact title
let contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent['contact']['contact-h4']

// --- contact data
let contactData = document.querySelectorAll('.contact p')
contactData[0].textContent = siteContent['contact']['address']
contactData[1].textContent = siteContent['contact']['phone']
contactData[2].textContent = siteContent['contact']['email']

// --- footer
let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']

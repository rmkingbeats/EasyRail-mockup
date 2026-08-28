import './styles.css'

const NAV_ITEMS = [
  { href: '/book', label: 'Book a train' },
  { href: '/pnr', label: 'PNR status' },
  { href: '/tickets', label: 'My tickets' },
]

const arrowIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>'
const trainIcon = '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M15 39h18M18 39l-3 5m15-5 3 5M14 7h20a4 4 0 0 1 4 4v18a10 10 0 0 1-10 10H20a10 10 0 0 1-10-10V11a4 4 0 0 1 4-4Z" /><path d="M10 24h28M17 15h.1M31 15h.1M17 31h.1M31 31h.1" /></svg>'
const foodIcon = '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 7v13a6 6 0 0 0 6 6V7M12 18h12M18 26v15M33 7v34M33 7c-5 2-7 7-7 12s2 8 7 8" /></svg>'
const header = () => `<header class="site-header"><a class="brand" href="/" aria-label="EasyRail home"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>EasyRail</span></a><nav aria-label="Primary navigation">${NAV_ITEMS.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}</nav><a class="account-link" href="/account"><span class="avatar">A</span><span>Account</span></a></header>`

const ACTIONS = [
  { href: '/book', eyebrow: 'Plan a journey', title: 'Book a train', copy: 'Search trains, manage journeys and tickets.', icon: trainIcon, className: 'train-card' },
  { href: '/food', eyebrow: 'Make it more delicious', title: 'Order food', copy: 'Order food for an upcoming train journey.', icon: foodIcon, className: 'food-card' },
]

const actionCard = (action) => `<a href="${action.href}" class="action-card ${action.className}"><span class="card-pattern" aria-hidden="true"></span><span class="icon-tile">${action.icon}</span><span class="card-content"><span class="eyebrow">${action.eyebrow}</span><strong>${action.title}</strong><span class="card-copy">${action.copy}</span></span><span class="card-arrow">${arrowIcon}</span></a>`
const footer = () => '<footer><span>EasyRail concept · Built with care for Indian train travel</span><a href="/wallet">eWallet</a><a href="/account">Help</a></footer>'
const landingPage = () => `<div class="page-shell">${header()}<main><section class="hero" aria-labelledby="hero-title"><p class="concept-label">An independent IRCTC experience concept</p><p class="welcome">Welcome to a calmer way to travel</p><h1 id="hero-title">What are you here<br>to do?</h1><p class="hero-copy">Start with what matters to you. We’ll keep the rest simple.</p><div class="action-grid">${ACTIONS.map(actionCard).join('')}</div></section><section class="reassurance" aria-label="EasyRail benefits"><div><span class="reassurance-icon">✦</span><p><strong>Designed for clarity</strong><br>Only what you need, when you need it.</p></div><div><span class="reassurance-icon">⌁</span><p><strong>Your journey, together</strong><br>Plans and tickets in one calm place.</p></div></section></main>${footer()}</div>`
const placeholderPage = (title, description) => `<div class="page-shell">${header()}<main class="placeholder"><p class="welcome">EasyRail</p><h1>${title}</h1><p>${description}</p><a class="back-link" href="/">← Back to home</a></main></div>`

const routes = {
  '/book': ['Book a train', 'Train search and booking will be ready here soon.'],
  '/pnr': ['PNR status', 'Check a journey’s status here soon.'],
  '/tickets': ['My tickets', 'Your upcoming and past journeys will live here.'],
  '/wallet': ['eWallet', 'Your EasyRail eWallet will be available here.'],
  '/account': ['Your account', 'Account settings will be available here.'],
  '/food': ['Order food', 'Food ordering for your train journey will be ready here soon.'],
}

const path = window.location.pathname.replace(/\/$/, '') || '/'
const route = routes[path]
document.getElementById('root').innerHTML = route ? placeholderPage(route[0], route[1]) : landingPage()

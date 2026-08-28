const NAV_ITEMS = [
  { href: '/book', label: 'Book a train' },
  { href: '/pnr', label: 'PNR status' },
  { href: '/tickets', label: 'My tickets' },
]

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>',
  train: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M15 39h18M18 39l-3 5m15-5 3 5M14 7h20a4 4 0 0 1 4 4v18a10 10 0 0 1-10 10H20a10 10 0 0 1-10-10V11a4 4 0 0 1 4-4Z" /><path d="M10 24h28M17 15h.1M31 15h.1M17 31h.1M31 31h.1" /></svg>',
  food: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 7v13a6 6 0 0 0 6 6V7M12 18h12M18 26v15M33 7v34M33 7c-5 2-7 7-7 12s2 8 7 8" /></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 19 6v5c0 4.5-2.9 8-7 10-4.1-2-7-5.5-7-10V6l7-3Z" /><path d="m8.8 12 2.1 2.1 4.4-4.4" /></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4M17 3v4M3 10h18M8 14h.1M12 14h.1M16 14h.1" /></svg>',
  help: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M9.8 9a2.4 2.4 0 1 1 4.1 1.7c-.9.8-1.9 1.3-1.9 2.8M12 17h.01" /></svg>',
}

const path = window.location.pathname.replace(/\/$/, '') || '/'
const header = () => `<header class="site-header"><a class="brand" href="/" aria-label="EasyRail home"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span>EasyRail</span></a><div class="header-actions"><nav class="journey-nav" aria-label="Journey navigation">${NAV_ITEMS.map((item) => `<a href="${item.href}" class="${path === item.href || (path === '/' && item.href === '/book') ? 'is-active' : ''}" ${path === item.href ? 'aria-current="page"' : ''}>${item.label}</a>`).join('')}</nav><span class="nav-divider" aria-hidden="true"></span><a class="account-link" href="/account"><span class="avatar">A</span><span>Account</span><span class="chevron" aria-hidden="true">⌄</span></a></div></header>`

const ACTIONS = [
  { href: '/book', eyebrow: 'Your next journey', title: 'Book a train', copy: 'Find the right train and reserve your seat in a few easy steps.', button: 'Search trains', icon: icons.train, className: 'train-card' },
  { href: '/food', eyebrow: 'Travel tastes better', title: 'Order food', copy: 'Have a comforting meal delivered right to your train seat.', button: 'Order now', icon: icons.food, className: 'food-card' },
]

const actionCard = (action) => `<a href="${action.href}" class="action-card ${action.className}"><span class="card-pattern" aria-hidden="true"></span><span class="icon-tile">${action.icon}</span><span class="card-content"><span class="eyebrow">${action.eyebrow}</span><strong>${action.title}</strong><span class="card-copy">${action.copy}</span></span><span class="card-button">${action.button}${icons.arrow}</span></a>`
const benefit = (icon, title, copy) => `<div class="benefit"><span class="benefit-icon">${icon}</span><p><strong>${title}</strong><span>${copy}</span></p></div>`
const footer = () => '<footer><span>EasyRail concept · A calmer way to plan Indian train travel</span><a href="/wallet">eWallet</a><a href="/account">Help</a></footer>'
const railwayVisual = () => `<div class="railway-visual" aria-hidden="true"><div class="visual-sun"></div><div class="visual-hills hill-back"></div><div class="visual-hills hill-front"></div><div class="visual-trees trees-one"></div><div class="visual-trees trees-two"></div><div class="rail-track"><i></i><i></i><i></i><i></i></div><div class="visual-train"><span class="train-window"></span><span class="train-window"></span><span class="train-window"></span><b></b><b></b></div><span class="visual-caption">A gentler way to go places</span></div>`
const landingPage = () => `<div class="page-shell">${header()}<main><section class="hero" aria-labelledby="hero-title"><div class="hero-copy-area"><p class="concept-label">An independent rail travel concept</p><p class="welcome">Welcome aboard EasyRail</p><h1 id="hero-title">What are you<br>here to do?</h1><p class="hero-copy">Plan your train journey with a little more ease, from the first search to the last stop.</p><div class="hero-notes"><span>✦ Simple, thoughtful travel</span><span>⌁ Made for Indian rail journeys</span></div></div>${railwayVisual()}</section><section class="action-grid" aria-label="Start your journey">${ACTIONS.map(actionCard).join('')}</section><section class="reassurance" aria-label="EasyRail concept benefits">${benefit(icons.shield, 'No hidden fees', 'What you see is what you pay')}${benefit(icons.calendar, 'Easy cancellations', 'Cancel with peace of mind')}${benefit(icons.help, '24/7 support', "We're here to help anytime")}</section></main>${footer()}</div>`
const placeholderPage = (title, description) => `<div class="page-shell">${header()}<main class="placeholder"><p class="welcome">EasyRail</p><h1>${title}</h1><p>${description}</p><a class="back-link" href="/">← Back to home</a></main></div>`

const routes = {
  '/book': ['Book a train', 'Train search and booking will be ready here soon.'],
  '/pnr': ['PNR status', 'Check a journey’s status here soon.'],
  '/tickets': ['My tickets', 'Your upcoming and past journeys will live here.'],
  '/wallet': ['eWallet', 'Your EasyRail eWallet will be available here.'],
  '/account': ['Your account', 'Account settings will be available here.'],
  '/food': ['Order food', 'Food ordering for your train journey will be ready here soon.'],
}

const route = routes[path]
document.getElementById('root').innerHTML = route ? placeholderPage(route[0], route[1]) : landingPage()

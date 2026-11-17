// Small, dependency-free behaviour for the page.
// Everything here is an enhancement: with JS off the page is fully readable.

const root = document.documentElement
const still = matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- loading screen ---------- */
// Plays once per browser session. Waits for the logo to finish drawing
// and for fonts, then lifts like a curtain.

const loader = document.querySelector('.loader')

function reveal() {
  root.classList.add('loaded')
  if (loader) setTimeout(() => loader.remove(), 1000)
}

if (!root.classList.contains('js') || root.classList.contains('skip')) {
  root.classList.add('loaded')
  loader?.remove()
} else {
  const drawn = new Promise((r) => setTimeout(r, 2150))
  const fonts = document.fonts ? document.fonts.ready : Promise.resolve()
  const cap = new Promise((r) => setTimeout(r, 4000))
  Promise.race([Promise.all([drawn, fonts]), cap]).then(reveal)
  try { sessionStorage.setItem('seen', '1') } catch {}
}

/* ---------- split text into letters where it is written out ---------- */

for (const el of document.querySelectorAll('[data-letters]')) {
  const text = el.textContent
  el.setAttribute('aria-label', text)
  el.textContent = ''
  ;[...text].forEach((ch, i) => {
    const s = document.createElement('span')
    s.textContent = ch
    s.style.setProperty('--i', i)
    s.setAttribute('aria-hidden', 'true')
    el.append(s)
  })
}

/* ---------- reveal on scroll ---------- */

const seen = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue
      e.target.classList.add('in')
      seen.unobserve(e.target)
      if (e.target.classList.contains('board')) boardSeen()
    }
  },
  { rootMargin: '0px 0px -12% 0px', threshold: 0.15 }
)

document
  .querySelectorAll('main h2, .timeline .row, .paper, .rise, .contact .mail')
  .forEach((el) => seen.observe(el))

/* ---------- numbers count up ---------- */

function count(el) {
  const to = parseFloat(el.dataset.count)
  const from = parseFloat(el.dataset.from || '0')
  const dec = (el.dataset.count.split('.')[1] || '').length
  if (still) return
  const t0 = performance.now()
  const dur = 1100
  const tick = (t) => {
    const k = Math.min(1, (t - t0) / dur)
    const eased = 1 - Math.pow(1 - k, 3)
    el.textContent = (from + (to - from) * eased).toFixed(dec)
    if (k < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

/* ---------- scroll: sticky bar, progress, timeline spine ---------- */

const bar = document.querySelector('.bar')
const hero = document.querySelector('.hero')
const timeline = document.querySelector('.timeline')
const stops = timeline ? [...timeline.querySelectorAll('.row')] : []
const links = new Map(
  [...document.querySelectorAll('.bar nav a')].map((a) => [a.getAttribute('href').slice(1), a])
)
const sections = [...links.keys()].map((id) => [id, document.getElementById(id)]).filter((x) => x[1])
let queued = false

function onScroll() {
  queued = false
  const y = scrollY
  const vh = innerHeight
  bar?.classList.toggle('show', y > hero.offsetHeight - 60)

  const max = document.documentElement.scrollHeight - vh
  bar?.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0)

  if (timeline) {
    const r = timeline.getBoundingClientRect()
    const k = Math.max(0, Math.min(1, (vh * 0.62 - r.top) / r.height))
    timeline.style.setProperty('--fill', k.toFixed(4))
    // each stop turns yellow once the line has reached it
    const reached = k * r.height
    for (const row of stops) row.classList.toggle('lit', row.offsetTop <= reached - 6)
  }

  // which section is on screen: the last one whose top has passed 40% of the window,
  // or Contact whenever the page is scrolled to the very end
  let current = null
  for (const [id, el] of sections) if (el.getBoundingClientRect().top <= vh * 0.4) current = id
  if (max > 0 && y >= max - 4) current = 'contact'
  links.forEach((a, id) => a.classList.toggle('on', id === current))
}

addEventListener('scroll', () => {
  if (!queued) { queued = true; requestAnimationFrame(onScroll) }
}, { passive: true })
addEventListener('resize', onScroll)
onScroll()

/* ---------- architecture sketches: no moving dots if motion is unwelcome ---------- */

if (still) document.querySelectorAll('svg.arch').forEach((s) => s.pauseAnimations?.())

/* ---------- in-page links ---------- */
// Scroll ourselves instead of relying on the browser's anchor jump, so every link
// lands below the sticky bar, and Contact always goes to the very end of the page.

function goTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const max = document.documentElement.scrollHeight - innerHeight
  const top = id === 'top' ? 0 : id === 'contact' ? max
    : Math.min(max, el.getBoundingClientRect().top + scrollY - (bar ? bar.offsetHeight : 0) - 40)
  scrollTo({ top, behavior: still ? 'auto' : 'smooth' })
  history.replaceState(null, '', id === 'top' ? location.pathname : '#' + id)
  const h = el.querySelector('h3')
  if (h && !still) {
    h.classList.remove('flash')
    void h.offsetWidth
    h.classList.add('flash')
  }
}

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]')
  if (!a) return
  e.preventDefault()
  goTo(a.getAttribute('href').slice(1))
})

// arriving with a #link in the address: wait for the page to settle, then go there
if (location.hash.length > 1) setTimeout(() => goTo(location.hash.slice(1)), root.classList.contains('skip') ? 100 : 2600)

/* ---------- projects switchboard ---------- */
// Tabs on the left, one panel on the right. It moves on by itself every few
// seconds until the visitor picks a project, hovers the board or uses the keyboard.

const board = document.querySelector('.board')
let boardSeen = () => {}

if (board) {
  const tabs = [...board.querySelectorAll('[role="tab"]')]
  const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')))
  const DWELL = 6000
  let at = 0
  let timer = null
  let hands = false      // the visitor has taken over
  let visible = false

  board.classList.add('live')
  board.style.setProperty('--dwell', DWELL + 'ms')

  function show(i, focus) {
    at = (i + tabs.length) % tabs.length
    tabs.forEach((t, k) => {
      const on = k === at
      t.setAttribute('aria-selected', on)
      t.tabIndex = on ? 0 : -1
      panels[k].classList.toggle('on', on)
    })
    const p = panels[at]
    p.querySelector('svg')?.setCurrentTime?.(0)
    p.querySelectorAll('[data-count]').forEach(count)
    if (focus) tabs[at].focus()
    tabs[at].scrollIntoView?.({ block: 'nearest', inline: 'nearest', behavior: still ? 'auto' : 'smooth' })
  }

  function run() {
    clearTimeout(timer)
    const go = !hands && visible && !still
    board.classList.toggle('auto', go)
    if (go) timer = setTimeout(() => { show(at + 1); run() }, DWELL)
  }

  function takeOver() { hands = true; run() }

  tabs.forEach((t, k) => {
    t.addEventListener('click', () => { takeOver(); show(k) })
    t.addEventListener('keydown', (e) => {
      const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]
      if (!step) return
      e.preventDefault()
      takeOver()
      show(at + step, true)
    })
  })

  // hovering the panel holds it; leaving lets the board carry on unless a project was picked
  board.addEventListener('pointerenter', () => { clearTimeout(timer); board.classList.remove('auto') })
  board.addEventListener('pointerleave', run)

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; run() }, { threshold: 0.35 }).observe(board)

  boardSeen = () => panels[at].querySelectorAll('[data-count]').forEach(count)
}

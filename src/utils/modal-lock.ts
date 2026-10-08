// Multiple dialogs must not restore page scrolling while another is still open.
const owners: symbol[] = []
let overflow = ''
let appWasInert = false

export function lockModal(owner: symbol) {
  if (owners.includes(owner)) return
  const app = document.getElementById('app')
  if (!owners.length) {
    overflow = document.body.style.overflow
    appWasInert = app?.inert ?? false
    document.body.style.overflow = 'hidden'
    if (app) app.inert = true
  }
  owners.push(owner)
}

export function isTopModal(owner: symbol) {
  return owners[owners.length - 1] === owner
}

export function unlockModal(owner: symbol) {
  const index = owners.indexOf(owner)
  if (index < 0) return
  owners.splice(index, 1)
  if (!owners.length) {
    document.body.style.overflow = overflow
    const app = document.getElementById('app')
    if (app) app.inert = appWasInert
  }
}

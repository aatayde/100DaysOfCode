document.cookie = "name=Alej; SameSite=None; Secure"
document.cookie = "favorite_food=pizza; SameSite=None; Secure"
document.cookie = "expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure"

function showCookies() {
  const output = document.getElementById('cookies')
  output.textContent = `> ${document.cookie}`
}

function clearOutputCookies() {
  const output = document.getElementById('cookies')
  output.textContent = ''
}
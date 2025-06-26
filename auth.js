// auth.js
function setCookie(name, value, mins) {
  const d = new Date();
  d.setTime(d.getTime() + mins * 60000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const m = document.cookie.match('(^|;)\\s*' + name + '=([^;]+)');
  return m ? m.pop() : null;
}

function delCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

function isUserLoggedIn() {
  return getCookie("loggedIn") === "true";
}

function getLoggedInEmail() {
  return getCookie("userEmail");
}

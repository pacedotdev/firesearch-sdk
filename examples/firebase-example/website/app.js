
const app = {
	__loaded: false,
}

app.onload = function (fn) {
	this.__onloadFn = fn
	if (this.__loaded) {
		this.__onloadFn()
	}
}

// app.__onloadEvent is fired when the document
// has loaded.
app.__onloadEvent = function () {
	this.__loaded = true
	if (this.__onloadFn) {
		this.__onloadFn()
	}
}

if (window.addEventListener) { // Mozilla, Netscape, Firefox
	window.addEventListener('load', app.__onloadEvent.bind(app), false);
} else if (window.attachEvent) { // IE
	window.attachEvent('onload', app.__onloadEvent.bind(app));
}
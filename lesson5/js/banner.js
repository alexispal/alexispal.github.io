function banner-show() {
	var d = new Date();
	var n = d.getDay();
	if (n == 5) {
		document.getElementById('banner-show').style.display = 'block';
	} else {
		document.getElementById('banner-show').style.display = 'none';
	}
}
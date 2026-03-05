(function () {
	var lang = localStorage.getItem('lang') || 'de';
	document.documentElement.lang = lang;

	// Language toggle
	document.querySelectorAll('.lang-toggle').forEach(function (btn) {
		btn.addEventListener('click', function () {
			lang = lang === 'de' ? 'en' : 'de';
			document.documentElement.lang = lang;
			localStorage.setItem('lang', lang);
		});
	});

	// Anti-scrape: email
	document.querySelectorAll('.mail-link').forEach(function (el) {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			window.location.href = 'mai' + 'lto:' + el.dataset.u + '@' + el.dataset.d;
		});
	});
	document.querySelectorAll('.mail-text').forEach(function (el) {
		var addr = el.dataset.u + '@' + el.dataset.d;
		el.href = 'mai' + 'lto:' + addr;
		el.textContent = addr;
	});

	// Anti-scrape: address
	document.querySelectorAll('.addr').forEach(function (el) {
		el.innerHTML = el.dataset.a + '<br>' + el.dataset.c;
	});

	// Anti-scrape: phone
	document.querySelectorAll('.phone').forEach(function (el) {
		var num = el.dataset.p + el.dataset.s;
		el.innerHTML = '<a href="te' + 'l:' + num + '">' + num + '</a>';
	});
})();

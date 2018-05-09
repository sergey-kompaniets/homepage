((document) => {
	let bars = [].slice.call(document.querySelectorAll('.bar-inner'));
	bars.map((bar, index) => {
		setTimeout(() => {
			bar.style.width = bar.dataset.percent;
		}, index * 3000);
	})
})(document);


let typed = new Typed(".f-dev", {
    strings: ["Frontend Developer ^1000", "Smart Developer ^1000", "Talented developer ^1000", "Determined Developer ^1000"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
  });


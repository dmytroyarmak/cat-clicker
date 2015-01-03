(function() {
	var counterNode = document.querySelector('[data-js="cc-counter"]'),
		imageNode = document.querySelector('[data-js="cc-image"]'),
		counterValue = 0;

	function imageClickHandler () {
		counterValue += 1;
		renderCounterValue();
	}

	function renderCounterValue () {
		counterNode.innerText = counterValue;
	}

	imageNode.addEventListener('click', imageClickHandler, false);
	renderCounterValue();
})();

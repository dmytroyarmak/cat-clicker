window.CC = window.CC || {};
window.CC.CatClicker = (function() {
	var ccTemplate = document.querySelector('[data-js="cc-template"]').innerText;

	function CatClicker (container, catName, imageName) {
		this._container = container;
		this._catName = catName;
		this._imageName = imageName;
		this._counterValue = 0;
	}

	CatClicker.prototype.render = function () {
		this._el = document.createElement('div');
		this._el.innerHTML = this.getCompiledTemplate();
		this._container.appendChild(this._el);
		this.onRender();
	};

	CatClicker.prototype.getCompiledTemplate = function () {
		return ccTemplate.replace('{{catName}}', this._catName)
			.replace('{{imageName}}', this._imageName)
			.replace('{{counterValue}}', this._counterValue);
	};

	CatClicker.prototype.onRender = function () {
		this._counterNode = this._el.querySelector('[data-js="cc-counter"]');
		this._imageNode = this._el.querySelector('[data-js="cc-image"]');

		this._imageNode.addEventListener('click', this.imageClickHandler.bind(this), false);
	};

	CatClicker.prototype.imageClickHandler = function () {
		this._counterValue += 1;
		this.renderCaunterValue();
	};

	CatClicker.prototype.renderCaunterValue = function () {
		this._counterNode.innerText = this._counterValue;
	};

	return CatClicker
})();

window.CC = window.CC || {};

(function(exports) {
	var catDetailsTpl = document.querySelector('[data-js="cc-cat-details-tpl"]').innerText;

	function CatDetailsView (attributes) {
		this._el = attributes.el;
		this._catModel = attributes.catModel;
		this._onCatClicked = attributes.onCatClicked;
	}

	CatDetailsView.prototype.setCatModel = function (catModel) {
		this._catModel = catModel;
	};

	CatDetailsView.prototype.render = function (container) {
		this._el.innerHTML = this._getCompiledTemplate();
		this._addCatClickListener()
	};

	CatDetailsView.prototype._getCompiledTemplate = function () {
		return catDetailsTpl
			.replace('{{catName}}', this._catModel.getCatName())
			.replace('{{imageName}}', this._catModel.getImageName())
			.replace('{{clickCount}}', this._catModel.getClickCount());
	};

	CatDetailsView.prototype._addCatClickListener = function () {
		var catImageNode = this._el.querySelector('[data-js="cc-image"]'),
			onCatImageClicked = this._onCatImageClicked.bind(this);

		catImageNode.addEventListener('click', onCatImageClicked, false);
	};

	CatDetailsView.prototype._onCatImageClicked = function (event) {
		event.preventDefault();
		this._onCatClicked.call(null, this._catModel);
	};

	exports.CatDetailsView = CatDetailsView;
})(window.CC);

window.CC = window.CC || {};

(function(exports) {
	var catEditTpl = document.querySelector('[data-js="cc-cat-edit-tpl"]').innerText;

	function CatEditView (attributes) {
		this._el = attributes.el;
		this._onSubmitted = attributes.onSubmitted;
		this._onCanceled = attributes.onCanceled;
		this._catModel = null;
	}

	CatEditView.prototype.setCatModel = function (catModel) {
		this._catModel = catModel;
	};

	CatEditView.prototype.render = function (container) {
		this._el.innerHTML = this._getCompiledTemplate();
		this._addSubmitListener()
		this._addCancelListener()
	};

	CatEditView.prototype.clean = function () {
		this._el.innerHTML = '';
	};

	CatEditView.prototype._getCompiledTemplate = function () {
		return catEditTpl
			.replace('{{catName}}', this._catModel.getCatName())
			.replace('{{imageName}}', this._catModel.getImageName())
			.replace('{{clickCount}}', this._catModel.getClickCount());
	};

	CatEditView.prototype._addSubmitListener = function () {
		var editFormNode = this._el.querySelector('[data-js="cc-form"]'),
			onFormSubmitted = this._onFormSubmitted.bind(this);

		editFormNode.addEventListener('submit', onFormSubmitted, false);
	};

	CatEditView.prototype._addCancelListener = function () {
		var cancelButtonNode = this._el.querySelector('[data-js="cc-cancel-button"]'),
			onCancelButtonClicked = this._onCancelButtonClicked.bind(this);

		cancelButtonNode.addEventListener('click', onCancelButtonClicked, false);
	};

	CatEditView.prototype._onFormSubmitted = function (event) {
		event.preventDefault();
		this._onSubmitted.call(null, this._catModel, this._getFormData());
	};

	CatEditView.prototype._onCancelButtonClicked = function (event) {
		event.preventDefault();
		this._onCanceled.call(null);
	};

	CatEditView.prototype._getFormData = function () {
		var catNameInputNode = this._el.querySelector('[data-js="cc-cat-name-input"]'),
			imageNameInputNode = this._el.querySelector('[data-js="cc-image-name-input"]'),
			clickCountInputNode = this._el.querySelector('[data-js="cc-click-count-input"]');

		return {
			catName: catNameInputNode.value,
			imageName: imageNameInputNode.value,
			clickCount: parseInt(clickCountInputNode.value, 10)
		};
	};

	exports.CatEditView = CatEditView;
})(window.CC);

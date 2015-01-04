window.CC = window.CC || {};

(function(exports) {
	var catListTpl = document.querySelector('[data-js="cc-cat-list-tpl"]').innerText;

	function CatListView (attributes) {
		this._el = attributes.el;
		this._catCollection = attributes.catCollection;
		this._onCatSelected = attributes.onCatSelected;
	}

	CatListView.prototype.render = function () {
		this._el.innerHTML = this._getCompiledTemplate();
		this._renderSelectCatButtons();
	};

	CatListView.prototype._renderSelectCatButtons = function () {
		var catListNode = this._el.querySelector('[data-js="cc-cat-list"]'),
			renderSelectCatButton = this._renderSelectCatButton.bind(this, catListNode);

		this._catCollection.forEach(renderSelectCatButton);
	};

	CatListView.prototype._getCompiledTemplate = function () {
		return catListTpl;
	};

	CatListView.prototype._renderSelectCatButton = function (catListNode, catModel) {
		var selectCatButtonNode = document.createElement('button'),
			onSelectCatButtonClicked = this._onSelectCatButtonClicked.bind(this, catModel);

		selectCatButtonNode.innerText = catModel.getCatName();
		catListNode.appendChild(selectCatButtonNode);
		selectCatButtonNode.addEventListener('click', onSelectCatButtonClicked, false);
	};

	CatListView.prototype._onSelectCatButtonClicked = function (catModel, event) {
		event.preventDefault();
		this._onCatSelected.call(null, catModel);
	};

	exports.CatListView = CatListView;
})(window.CC);

window.CC = window.CC || {};

(function(exports) {
	function CatListView (attributes) {
		this._el = attributes.el;
		this._catCollection = attributes.catCollection;
		this._onCatSelected = attributes.onCatSelected;
	}

	CatListView.prototype.render = function () {
		this._el.innerHTML = '';
		this._catCollection.forEach(this._renderSelectCatVutton, this);
	};

	CatListView.prototype._renderSelectCatVutton = function (catModel) {
		var selectCatButtonNode = document.createElement('button'),
			onSelectCatButtonClicked = this._onSelectCatButtonClicked.bind(this, catModel);

		selectCatButtonNode.innerText = catModel.getCatName();
		this._el.appendChild(selectCatButtonNode);
		selectCatButtonNode.addEventListener('click', onSelectCatButtonClicked, false);
	};

	CatListView.prototype._onSelectCatButtonClicked = function (catModel, event) {
		event.preventDefault();
		this._onCatSelected.call(null, catModel);
	};

	exports.CatListView = CatListView;
})(window.CC);

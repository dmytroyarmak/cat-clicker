window.CC = window.CC || {};
window.CC.CatList = (function() {
	function CatList (container, cats, onCatSelected) {
		this._container = container;
		this._cats = cats;
		this._onCatSelected = onCatSelected;
	}

	CatList.prototype.render = function () {
		this._cats.forEach(this._renderListItem, this);
	};

	CatList.prototype._renderListItem = function (catClicker) {
		var listItem = document.createElement('li');
		listItem.innerText = catClicker.getCatName();
		this._container.appendChild(listItem);
		listItem.addEventListener('click', this.catClickHandler.bind(this, catClicker), false);
	};

	CatList.prototype.catClickHandler = function (catClicker) {
		this._onCatSelected.call(null, catClicker);
	};

	return CatList
})();

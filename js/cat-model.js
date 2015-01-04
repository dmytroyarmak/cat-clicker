window.CC = window.CC || {};

(function(exports) {
	function CatModel (attributes) {
		this._catName = attributes.catName || 'Unnamed cat';
		this._imageName = attributes.imageName || 'cat-1.jpg';
		this._clickCount = 0;
	}

	CatModel.prototype.getCatName = function () {
		return this._catName;
	};

	CatModel.prototype.getImageName = function () {
		return this._imageName;
	};

	CatModel.prototype.getClickCount = function () {
		return this._clickCount;
	};

	CatModel.prototype.setCatName = function (catName) {
		this._catName = catName;
	};

	CatModel.prototype.setImageName = function (imageName) {
		this._imageName = imageName;
	};

	CatModel.prototype.setClickCount = function (clickCount) {
		this._clickCount = clickCount;
	};

	CatModel.prototype.incrementClickCount = function () {
		var currentClickCount = this.getClickCount();
		this.setClickCount(currentClickCount + 1);
	};

	exports.CatModel = CatModel;
})(window.CC);

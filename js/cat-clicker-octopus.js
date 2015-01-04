window.CC = window.CC || {};

(function(exports) {
	function CatClickerOctopus (attributes) {
		this._catListNode = attributes.catListNode;
		this._catDetailsNode = attributes.catDetailsNode;
		this._catCollectionData = attributes.catCollectionData;
	}

	CatClickerOctopus.prototype.start = function () {
		this._initializeCatCollection();
		this._initializeCatListView();
		this._initializeCatDetailsView();
		this._renderCatListView();
		this._renderCatDetailsView();
	};

	CatClickerOctopus.prototype._initializeCatCollection = function () {
		this._catCollection = this._catCollectionData.map(function(catData) {
			return new CC.CatModel(catData);
		});
	};

	CatClickerOctopus.prototype._initializeCatListView = function () {
		var onCatSelected = this._onCatSelected.bind(this);

		this._catListView = new CC.CatListView({
			el: this._catListNode,
			catCollection: this._catCollection,
			onCatSelected: onCatSelected
		});
	};

	CatClickerOctopus.prototype._initializeCatDetailsView = function () {
		var onCatClicked = this._onCatClicked.bind(this);

		this._catDetailsView = new CC.CatDetailsView({
			el: this._catDetailsNode,
			catModel: this._catCollection[0],
			onCatClicked: onCatClicked
		});
	};

	CatClickerOctopus.prototype._renderCatListView = function () {
		this._catListView.render();
	};

	CatClickerOctopus.prototype._renderCatDetailsView = function () {
		this._catDetailsView.render();
	};

	CatClickerOctopus.prototype._onCatSelected = function (catModel) {
		this._catDetailsView.setCatModel(catModel);
		this._renderCatDetailsView();
	};

	CatClickerOctopus.prototype._onCatClicked = function (catModel) {
		catModel.incrementClickCount();
		this._renderCatDetailsView();
	};

	exports.CatClickerOctopus = CatClickerOctopus;
})(window.CC);

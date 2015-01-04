window.CC = window.CC || {};

(function(exports) {
	function CatClickerOctopus (attributes) {
		this._catListNode = attributes.catListNode;
		this._catDetailsNode = attributes.catDetailsNode;
		this._catEditNode = attributes.catEditNode;
		this._adminButtonNode = attributes.adminButtonNode;
		this._catCollectionData = attributes.catCollectionData;
		this._currentCatModel = null;
		this._isEditViewShowen = false;
	}

	CatClickerOctopus.prototype.start = function () {
		this._initializeCatCollection();
		this._initializeCatListView();
		this._initializeCatDetailsView();
		this._initializeAdminButtonView();
		this._initializeCatEditView();

		this._setCurrentCatModel(this._catCollection[0]);

		this._renderCatListView();
		this._renderCatDetailsView();
		this._renderAdminButtonView();
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
			onCatClicked: onCatClicked
		});
	};

	CatClickerOctopus.prototype._initializeAdminButtonView = function () {
		var onAdminButtonClicked = this._onAdminButtonClicked.bind(this);

		this._adminButtonView = new CC.AdminButtonView({
			el: this._adminButtonNode,
			onClicked: onAdminButtonClicked
		});
	};

	CatClickerOctopus.prototype._initializeCatEditView = function () {
		var onCatEditSubmitted = this._onCatEditSubmitted.bind(this),
		 	onCatEditCanceled = this._onCatEditCanceled.bind(this);

		this._catEditView = new CC.CatEditView({
			el: this._catEditNode,
			onSubmitted: onCatEditSubmitted,
			onCanceled: onCatEditCanceled
		});
	};

	CatClickerOctopus.prototype._renderCatListView = function () {
		this._catListView.render();
	};

	CatClickerOctopus.prototype._renderCatDetailsView = function () {
		this._catDetailsView.render();
	};

	CatClickerOctopus.prototype._renderAdminButtonView = function () {
		this._adminButtonView.render();
	};

	CatClickerOctopus.prototype._renderCatEditView = function () {
		this._isEditViewShowen = true;
		this._catEditView.render();
	};

	CatClickerOctopus.prototype._cleanCatEditView = function () {
		this._isEditViewShowen = false;
		this._catEditView.clean();
	};

	CatClickerOctopus.prototype._setCurrentCatModel = function (catModel) {
		this._currentCatModel = catModel;
		this._catDetailsView.setCatModel(catModel);
		this._catEditView.setCatModel(catModel);
	};

	CatClickerOctopus.prototype._onCatSelected = function (catModel) {
		this._setCurrentCatModel(catModel);
		this._renderCatDetailsView();
		if (this._isEditViewShowen) {
			this._renderCatEditView();
		}
	};

	CatClickerOctopus.prototype._onCatClicked = function (catModel) {
		catModel.incrementClickCount();
		this._renderCatDetailsView();
	};

	CatClickerOctopus.prototype._onAdminButtonClicked = function () {
		this._renderCatEditView();
	};

	CatClickerOctopus.prototype._onCatEditSubmitted = function (catModel, submittedData) {
		catModel.setCatName(submittedData.catName);
		catModel.setImageName(submittedData.imageName);
		catModel.setClickCount(submittedData.clickCount);

		this._cleanCatEditView();

		this._renderCatDetailsView();
		this._renderCatListView();
	};

	CatClickerOctopus.prototype._onCatEditCanceled = function () {
		this._cleanCatEditView();
	};

	exports.CatClickerOctopus = CatClickerOctopus;
})(window.CC);

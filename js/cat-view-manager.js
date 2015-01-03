window.CC = window.CC || {};
window.CC.CatViewManager = (function() {
	function CatViewManager (container) {
		this._container = container;
	}

	CatViewManager.prototype.show = function (catClicker) {
		this._container.innerHTML = '';
		catClicker.render(this._container);
	};

	return CatViewManager
})();

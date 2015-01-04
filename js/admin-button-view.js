window.CC = window.CC || {};

(function(exports) {
	var adminButtonTpl = document.querySelector('[data-js="cc-admin-button-tpl"]').innerText;

	function AdminButtonView (attributes) {
		this._el = attributes.el;
		this._onClicked = attributes.onClicked;
	}

	AdminButtonView.prototype.render = function (container) {
		this._el.innerHTML = this._getCompiledTemplate();
		this._addClickListener()
	};

	AdminButtonView.prototype._getCompiledTemplate = function () {
		return adminButtonTpl;
	};

	AdminButtonView.prototype._addClickListener = function () {
		var adminButtonNode = this._el.querySelector('[data-js="cc-admin-button"]'),
			onAdminButtonClicked = this._onAdminButtonClicked.bind(this);

		adminButtonNode.addEventListener('click', onAdminButtonClicked, false);
	};

	AdminButtonView.prototype._onAdminButtonClicked = function (event) {
		event.preventDefault();
		this._onClicked.call(null);
	};

	exports.AdminButtonView = AdminButtonView;
})(window.CC);

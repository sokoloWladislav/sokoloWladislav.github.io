"use strict";

window.onload = function () {
	var articlesDiv = document.getElementById("articles");

	var mainArticle = document.getElementById("mainArticle");

	var _getObjProxy = function _getObjProxy(obj) {
		return new Proxy(obj, {
			get: function get(target, prop) {
				if (!target[prop]) {
					return undefined;
				}
				if (prop == 'publishedAt') {
					var date = new Date(target[prop]);
					return date.toLocaleString();
				}
				return target[prop];
			}
		});
	};

	fetch(config.apiUrl).then(function (responce) {
		return responce.json();
	}).then(function (data) {
		var articles = data.articles.map(function (article) {
			return _getObjProxy(article);
		});

		mainArticle.innerHTML = htmlMainArticle(articles[0]);

		for (var i = 1; i <= articles.length; ++i) {
			articlesDiv.innerHTML += htmlArticle(articles[i]);
		}
		//throw new Error();
	}).catch(function (error) {
		console.log(error.message);
	});
};

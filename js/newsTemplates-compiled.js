"use strict";

var _templateObject = _taggedTemplateLiteral(["<a href=", " id=\"mainTitle\">", "</a>\n\t<img src=", ">\n\t<p id=\"mainDescription\">", "</p>\n\t<p id=\"Maindata\">", "</p>\n\t<div class=\"cleaner\"></div>"], ["<a href=", " id=\"mainTitle\">", "</a>\n\t<img src=", ">\n\t<p id=\"mainDescription\">", "</p>\n\t<p id=\"Maindata\">", "</p>\n\t<div class=\"cleaner\"></div>"]),
    _templateObject2 = _taggedTemplateLiteral(["<div class=\"article-container\">\n\t\t\t<img src=", ">\n\t\t\t<a href=", ">", "</a>\n\t\t</div>"], ["<div class=\"article-container\">\n\t\t\t<img src=", ">\n\t\t\t<a href=", ">", "</a>\n\t\t</div>"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function htmlMainArticle(article) {
	return html(_templateObject, article.url, article.title, article.urlToImage, article.description, article.publishedAt);
}

function htmlArticle(article) {
	return html(_templateObject2, article.urlToImage, article.url, article.title);
}

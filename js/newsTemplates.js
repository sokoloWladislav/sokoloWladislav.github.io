function htmlMainArticle(article)
{
	return `<div id="mainTitle">${article.title}</div>
	<img src=${article.urlToImage}>
	<p id="mainDescription">${article.description}</p>
	<div class="cleaner"></div>`;
}

function htmlArticle(article)
	{
		return `<div class="article-container">
			<img src=${article.urlToImage}>
			<div>${article.title}</div>
		</div>`;
	}
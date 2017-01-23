function htmlMainArticle(article)
{
	return html`<a href=${article.url} id="mainTitle">${article.title}</a>
	<img src=${article.urlToImage}>
	<p id="mainDescription">${article.description}</p>
	<p id="Maindata">${article.publishedAt}</p>
	<div class="cleaner"></div>`;
}

function htmlArticle(article)
	{
		return html`<div class="article-container">
			<img src=${article.urlToImage}>
			<a href=${article.url}>${article.title}</a>
		</div>`;
	}
window.onload = function()
{
	let articles = document.getElementById("articles");

	let mainArticle = document.getElementById("mainArticle");

	fetch("https://newsapi.org/v1/articles?source=bbc-news&apiKey=8dc451ed99104406b34432ff1c2e55a4")
		.then(responce => responce.json())
		.then(function(data)
		{
			mainArticle.innerHTML = htmlMainArticle(data.articles[0]);

			for(let i = 1; i <= data.articles.length; ++i)
			{
				articles.innerHTML += htmlArticle(data.articles[i]);
			}
		})

};
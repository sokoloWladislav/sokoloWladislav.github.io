window.onload = function()
{
	let articlesDiv = document.getElementById("articles");

	let mainArticle = document.getElementById("mainArticle");

	let _getObjProxy = function(obj){
		return new Proxy(obj, {
			get(target, prop) {
			    if (!target[prop]){
			    	return undefined;
			    }
			    if (prop == 'publishedAt') {
                    let date = new Date(target[prop]);
                    return date.toLocaleString()
                }
			    return target[prop];
  			}
		});
	}

	fetch(config.apiUrl)
		.then(responce => responce.json())
		.then(function(data)
		{
			let articles = data.articles.map(article => _getObjProxy(article));

			mainArticle.innerHTML = htmlMainArticle(articles[0]);

			for(let i = 1; i <= articles.length; ++i)
			{
				articlesDiv.innerHTML += htmlArticle(articles[i]);
			}
			//throw new Error();
		})
		.catch(error => {
			console.log(error.message);
	});

	

};
export const api = () => {
    // get latest business news
    const apiKey = process.env.API_KEY;
    const news = document.querySelector("[js-news]");
    const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;
    if (news) {
        fetch(newsUrl)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles;
                articles.forEach(article => {
                    const newsItem = document.createElement("div");
                    newsItem.classList.add("card");
                    newsItem.setAttribute('js-view', article.title);
                    newsItem.innerHTML = `
                        <div class="news-item__image">
                            <img src="${article.urlToImage}" alt="${article.title}">
                        </div>
                        <div class="news-item__content">
                            <h3 class="news-item__title">${article.title}</h3>
                            <p class="news-item__description">${article.description}</p>
                            <a class="news-item__link" href="${article.url}" target="_blank">Read more</a>
                        </div>
                    `;
                    news.appendChild(newsItem);
                });
            })
            .catch(error => console.log(error));
    }

}
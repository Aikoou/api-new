let news = [
    {
        id: '1',
        title: "воображение покинуло меня",
        content: "dhfv",
        lang: "ru"
    },
    {
        id: '2',
        title: "воображение кетти менден",
        content: "liyfd",
        lang: "kg"
    },
    {
        id: '3',
        title: "воображение lost ме",
        content: ";gftk",
        lang: "eng"
    },
]

exports.getnews = function(req, res){
    console.log("Request Language:", req.headers.lang);
    console.log("Request headers:", req.headers)
    console.log("Query params:", req.query)

    const filteredNews = news.filter((oneNews) => oneNews.lang === req.headers.lang)

    res.status(200).json(filteredNews);
}

exports.deleteNews = function (req, res) {
    console.log('id params:', req.params);
    console.log('Newsid:', req.params.newsId);

    news = news.filter(oneNews => oneNews.id !== req.params.newsId)
    res.status(200).json({})
}

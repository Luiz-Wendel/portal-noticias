const API_KEY = 'c2bb51d7b6f74baa879b2d1ae7bafc43'
const BASE_API = 'https://newsapi.org/v2'

const divListaNoticias = document.querySelector('#listaDeNoticias')

let articlesList = ''


// function getNoticias() {
//   fetch(`${BASE_API}/top-headlines?country=br&apiKey=${API_KEY}`)
//     .then(response => response.json())
//     .then(newsList => console.log(newsList))
// }

async function getNoticias() {
  const resposta = await fetch(
    `${BASE_API}/top-headlines?country=br&apiKey=${API_KEY}`
  )

  const newsList = await resposta.json()

  buildArticles(newsList.articles)
}

function buildArticles(articles) {
  console.log(articles)
  articles.forEach(article => {
    let column = document.createElement('div')
    column.classList.add('col-4')

    let card = document.createElement('div')
    card.classList.add('card')

    column.append(card)

    let cardImg = document.createElement('img')
    cardImg.classList.add('card-img-top')
    cardImg.setAttribute('src', article.urlToImage)

    card.append(cardImg)

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    card.append(cardBody)

    let title = document.createElement('h5')
    title.classList.add('card-title')
    title.append(article.title)

    cardBody.append(title)

    let content = document.createElement('p')
    content.classList.add('card-text')
    content.append(article.description)

    cardBody.append(content)

    let link = document.createElement('a')
    link.classList.add('btn', 'btn-primary')
    link.setAttribute('href', article.url)
    link.append('Full article')

    cardBody.append(link)

    divListaNoticias.append(column)
  })
}

getNoticias()
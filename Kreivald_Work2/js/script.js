$(document).ready(function () {
    for (let i = 0; i < categories.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = ('<a href="#" onClick="getGamesListByCategory(`' + categories[i] + '`)">' + categories[i] + '</a>');
        document.getElementById('menu').appendChild(li);
    } 
});

function getGamesListByCategory(element) {
    let header = '<h2>Категория: ' + element + '</h2>';
    let gamesList = games.filter(a => a.category == element);

    if (gamesList.length > 0) {
        for (let i = 0; i < gamesList.length; i++) {
            document.getElementById("content").appendChild(createGameCard(gamesList[i]));
        }
    } else {
        $('#content').html(header + "Нет записей");
    }
};

function createGameCard(game) {
    let card = document.createElement('div');
    let cardHeader = document.createElement('h3');
    let cardBody = document.createElement('p');
    let cardPoster = document.createElement('img');

    card.style.boxShadow = '10px 10px 10px 5px #000000';
    card.style.width = '250px';
    card.style.height = '500px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.flexWrap = 'wrap';
    card.style.padding = '10px';
    card.style.margin = '20px';
    card.style.color = 'white';
    card.style.fontFamily = 'Franklin Gothic Medium';

    cardHeader.innerHTML = game.title + ' (' + game.publishYear + ')';
    // cardHeader.style.width = "100%";
    // cardHeader.style.height = "20px";
    // cardHeader.style.marginTop = "0px";
    cardHeader.style.color = "#d65200";

    let cardText = '';
    cardText += 'Разработчик - ' + game.developer + '<br>';
    cardText += 'Издатель - ' + game.publisher + '<br>';
    // cardText += 'Описание:\n' + game.description;
    cardBody.innerHTML = cardText;
    // cardBody.style.width = '75%';

    cardPoster.src = game.poster;
    // cardPoster.style.float = "left";
    cardPoster.style.width = "100%";
    // cardPoster.style.height = "100px";
    // cardPoster.style.marginRight = "20px";

    card.appendChild(cardPoster);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
}
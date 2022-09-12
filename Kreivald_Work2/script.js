$(document).ready(function () {
    for (let i = 0; i < category.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = ('<a href="#" onClick="myContent(`' + category[i] + '`)">' + category[i] + '</a>');
        document.getElementById('menu').appendChild(li);
    } 
});

function myContent(element) {
    let header = '<h2>' + element + '</h2>';
    let text = '';
    let newGames = games.filter(a => a.category == element);
    if (newGames.length > 0) {
        for (let i = 0; i < newGames.length; i++) {
            text += '<div style="float:left;">';
            text += '<img src="' + newGames[i].poster + '" style="margin:5px;"';
            text += '<p>' + newGames[i] + '</p>';
            text += '<p><a href="#" onClick="Detail(`' + newGames[i].name + '`)">Подробнее...</a></p>';
            text += '</div>';
        }
        $("#content").html(header + text);
    } else {
        $('#content').html(header + "Нет записей");
    }
};
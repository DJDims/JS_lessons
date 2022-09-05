function showGroupData(){
    let groupCode = document.getElementById('groupCode').value;
    if (groupCode.length != 7) {
        showError('Введите коректный код группы')
    }
    let city = groupCode.substr(0,1);
    if (city == 'N' || city == 'n') {
        document.getElementById('city').innerHTML = 'Город: Нарва';
    } else if (city == 'S' || city == 's') {
        document.getElementById('city').innerHTML = 'Город: Силламяэ';
    } else if (city == 'J' || city == 'j') {
        document.getElementById('city').innerHTML = 'Город: Йыхви';
    } else {
        showError('Указан неверный город')
        return;
    }

    let school = groupCode.substr(1,1);
    if (school == 'P' || school == 'p') {
        document.getElementById('school').innerHTML = 'После 9го класса';
    } else if (school == 'K' || school == 'k') {
        document.getElementById('school').innerHTML = 'После 12го класса';
    } else {
        showError('Указан неверная школа');
        return;
    }

    let language = groupCode.substr(4,1);
    console.log(language)
    if (language == 'R' || language == 'r') {
        document.getElementById('language').innerHTML = 'Русская группа';
    } else if (language == 'E' || language == 'e') {
        document.getElementById('language').innerHTML = 'Эстонская группа';
    } else {
        showError('Указан неверный язык обучения');
        return;
    }

    let year = groupCode.substr(5,2);
    if (year == 20) {
        document.getElementById('year').innerHTML = '3 курс';
    } else if (year == 21) {
        document.getElementById('year').innerHTML = '2 курс';
    } else if (year == 22) {
        document.getElementById('year').innerHTML = '1 курс';
    } else {
        showError('Указан неверный год поступления');
        return;
    }

}

function showError(text) {
    alert(text)
}
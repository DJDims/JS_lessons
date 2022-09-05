function showGroupData(){
    let groupCode = document.getElementById('groupCode').value;
    groupCode = groupCode.toUpperCase();
    if (groupCode.length != 7) {
        showError('Введите коректный код группы');
        return;
    }
    
    document.getElementById('group').style.display = 'block';
    document.getElementById('group').innerHTML = groupCode;

    let city = groupCode.substr(0,1);
    if (city == 'N') {
        document.getElementById('city').innerHTML = 'Город: Нарва';
    } else if (city == 'S') {
        document.getElementById('city').innerHTML = 'Город: Силламяэ';
    } else if (city == 'J') {
        document.getElementById('city').innerHTML = 'Город: Йыхви';
    } else {
        showError('Указан неверный город')
        return;
    }
    document.getElementById('city').style.display = 'block';

    let school = groupCode.substr(1,1);
    if (school == 'P') {
        document.getElementById('school').innerHTML = 'После 9го класса';
    } else if (school == 'K') {
        document.getElementById('school').innerHTML = 'После 12го класса';
    } else {
        showError('Указан неверная школа');
        return;
    }
    document.getElementById('school').style.display = 'block';

    let language = groupCode.substr(4,1);
    console.log(language)
    if (language == 'R') {
        document.getElementById('language').innerHTML = 'Русская группа';
    } else if (language == 'E') {
        document.getElementById('language').innerHTML = 'Эстонская группа';
    } else {
        showError('Указан неверный язык обучения');
        return;
    }
    document.getElementById('language').style.display = 'block';

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
    document.getElementById('year').style.display = 'block';

}

function showError(text) {
    document.getElementById('group').style.display = 'none';
    document.getElementById('city').style.display = 'none';
    document.getElementById('school').style.display = 'none ';
    document.getElementById('language').style.display = 'none';
    document.getElementById('year').style.display = 'none';
    alert(text);
}
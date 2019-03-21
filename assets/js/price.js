'use strict';

function openPage(pageName) {
    // Скрыть все элементы С class= "tabcontent" по умолчанию */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Удалить цвет фона всех ссылок / кнопок
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Показать содержимое конкретной вкладки
    document.getElementById(pageName).style.display = "block";
}


// Получить элемент с id="defaultOpen" и нажать на него
document.getElementById("defaultOpen").click();

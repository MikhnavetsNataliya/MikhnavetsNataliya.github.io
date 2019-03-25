'use strict';

function openPage(pageName) {
    // Скрыть все элементы С class= "tabcontent" по умолчанию */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Показать содержимое конкретной вкладки
    document.getElementById(pageName).style.display = "block";
}


// Получить элемент с id="defaultOpen" и нажать на него
document.getElementById("defaultOpen").click();

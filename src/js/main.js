var button = document.getElementById("addButton");
                                            // получаем кнопку
button.onclick = handleButtonClick;         // выдаём кнопке функции
                                   

/* #region Варинаты слов */
var variant = [
    "Кант",
    "Хроника",
    "Зал",
    "Галера",
    "Балл",
    "Вес",
    "Кафель",
    "Знак",
    "Фильтр",
    "Башня",
    "Кондитер",
    "Омар",
    "Чан",
    "Пламя",
    "Банк",
    "Тетерев",
    "Муж",
    "Камбала",
    "Груз",
    "Кино",
    "Лаваш",
    "Калач",
    "Геолог",
    "Бальзам",
    "Бревно",
    "Жердь",
    "Борец",
    "Самовар",
    "Карабин",
    "Подлокотник",
    "Барак",
    "Мотор",
    "Шарж",
    "Сустав",
    "Амфитеатр",
    "Скворечник",
    "Подлодка",
    "Затычка",
    "Ресница",
    "Спичка",
    "Кабан",
    "Муфта",
    "Синоптик",
    "Характер",
    "Мафиози",
    "Фундамент",
    "Бумажник",
    "Библиофил",
    "Дрожжи",
    "Казино"
    
]
/* #endregion */ 

/* #region Функция кнопочки */
function handleButtonClick() {              // обработка нажатия на кнопку
    var textInput = document.getElementById("NickNameInput");
    var NickName = textInput.value;
    if(NickName == ""){                     // проверка ника
        alert("Введите свой ник");
    }else{
                                            // получаем нащи переменные
        var ul  =  document.getElementById("Retinglist");
        var li = document.createElement("li");
        var rand = Math.floor(Math.random()*variant.length);
        var rValue = variant[rand];
        console.log(rValue)
        
        
        let result = games(rValue)          // играем и получаем результат
        
        
        li.innerHTML = NickName + " " +  result;    
        ul.appendChild(li);                 // добавляем участника в список лидеров

    }
}
/* #endregion */ 

/* #region Сама игра */
function games(strs) {
    let counts = 5;                         // количество промахов
    let strings = strs;                     // сама строка
    let hash = [];                          // массив с отгаданными символами
    for (let index = 0; index < strings.length; index++) {
        hash[index] = "_";                  // заполняем массив символами "_"

    }

    while (counts > 0) {                    // основной цикл игры
        
        



        let hash_str = hash.join()          // делаем из массива $hash

                                            // проверяем остался ли ещё неотгаданный символ
        if(hash_str.indexOf("_") == -1) {
            alert("Ты победил!")
            return " угадал все буквы с " + (6 - counts) + " промхами"
        }
        let dialog = "Слово состоит из " + strings.length + " букв." + "\n >> " + hash + 
        " \n Осталось " + ( counts) + " промахов"
        " \n\n Введите слово целиком или букву. ";
                                            // текст диалога
        otv = prompt(dialog)                // получаем символ или же слово

        if (otv == null) {                  // обрабатываем нажатие отмена
            return "Вышел из игры"
        }
        if (otv == strings) {               // обработка введения слова полностью
            alert("Ты Угалад!")
            return " победа с " + (6 - counts) + " промохами"
        }
        if (otv.length == 1) {              // обрабрика ввода 1 симводла
            counts--;
            if(strings.indexOf(otv) !== -1)  // есть ли символ в строке
            {
                hash[strings.indexOf(otv)] = strings[strings.indexOf(otv)] 
                alert("Ты Угалад!")
                counts++;
            } else {                        // если его нет
                alert("Такого символа нет. Осталось " + ( counts) + " промахов")
            }
        }

        else {                              // если что то ваще не понятное что 
            return " проиграл!"
        }
        
      }
      alert(" ты проиграл")                 // если умудрился выйти каким то образом из этого цикла...



}
/* #endregion */ 
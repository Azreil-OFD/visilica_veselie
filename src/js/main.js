var button = document.getElementById("addButton");
button.onclick = handleButtonClick;

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
function handleButtonClick() {
    var textInput = document.getElementById("NickNameInput");
    var NickName = textInput.value;
    if(NickName == ""){
        alert("Введите свой ник");
    }else{
        var ul  =  document.getElementById("Retinglist");
        var li = document.createElement("li");
        var rand = Math.floor(Math.random()*variant.length);
        var rValue = variant[rand];
        console.log(rValue)
        
        
        let result = games(rValue)
        
        
        li.innerHTML = NickName + " " +  result;
        ul.appendChild(li);

    }
}
/* #endregion */ 

/* #region Сама игра */
function games(strs) {
    let counts = 5;
    let strings = strs;
    let hash = [];
    for (let index = 0; index < strings.length; index++) {
        hash[index] = "_";
        
    }

    while (counts > 0) {
        
        let hash_str = hash.join()
        let dialog = "Слово состоит из " + strings.length + " букв." + "\n >> " + hash + 
        " \n Осталось " + ( counts) + " промахов"
        " \n\n Введите слово целиком или букву. ";

        otv = prompt(dialog)
        if (otv == null) {
            return "Вышел из игры"
        }
        if (otv == strings) {
            alert("Ты Угалад!")
            return " победа с " + (6 - counts) + " раза"
        }
        if (otv.length == 1) {
            counts--;
            if(strings.indexOf(otv) !== -1)
            {
                hash[strings.indexOf(otv)] = strings[strings.indexOf(otv)] 
                alert("Ты Угалад!")
                counts++;
            } else {
                alert("Такого символа нет. Осталось " + ( counts) + " промахов")
            }
        }

        else {
            return " проиграл!"
        }
        
      }
      alert("ты проиграл ")



}
/* #endregion */ 
//document.write("<h2>Первая программа на JavaScript</h2>");
//document.write("Привет мир!");
var input,search,pr,result,result_arr, locale_HTML, result_store;

locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Исходный)

function FindOnPage(name, status) {

	input = document.getElementById(name).value; //получаем значение из поля в html
}
	if(input.length<3&&status==true) {
		alert('Для поиска вы должны ввести три или более символов');
		function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
	}
        if(input.length>=3) {
              function FindOnPageGo() {
                search = '/'+input+'/g';  //делаем из строки регуярное выражение
		     pr = document.body.innerHTML;   // сохраняем в переменную весь body
		     result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
		     result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)
              }
        }

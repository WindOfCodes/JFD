<!-- Modyfikacja i rozwinięcie HTML + CSS z wykorzystaniem grid.
Podejście desktop first.
Dodanie responsywności elementów na stronie.

 Testowane przeglądarki : Firefox, Chrome 
 
 Pobieranie danych z JSON w celu wyświetlenia ich na stronie.
 Wykorzystanie metody fetch API
 fetch('./channels.json') wywołuje CORS error przy uruchamianiu aplikacji przez live server (brak plików na serwerze).
 Przy komendzie 'npm start' problem nie występuje

 Dodanie dark mode button

 Nadanie buttonowi clear funkcji resetującej inputy radio oraz input textowy

 Próby otworzenia funkcji sortującej dla inputów radio

 Dodanie przekierowania na strony kanału po kliknięciu w kafelek

 Próba rozwinięcia darkmode. Zmiana koloru wygenerowanych kafelków.
 Wykorzystanie w JS: querySelectorAll(".channel_block"), querySelector(".js-content>*") oraz querySelectorAll(".js-content>*")
 Stylowanie przez querySelector działa jedynie na pierszy z nich, w przypadku querySelectorAll wychodzi błąd. Możę trzeba byłoby to zrobić przez jakąś pętlę w js?
 -->
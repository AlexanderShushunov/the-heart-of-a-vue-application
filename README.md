# Сердце Vue приложения

Материалы к выступлению "Сердце Vue приложения".

[Слайды](https://drive.google.com/file/d/1pizxPn-myqT7DPVXNr2xynzrrqfJ7Rvg/view?usp=sharing)

## Демо проект

В репозитории находится проект с примером, показанным в докладе.

Приложение представляет собой часть системы сервиса с бонусной программой.
При начислении баллов на бонусный счет они умножаются на коэффициент, который зависит от того, как давно пользователь зарегистрировался на сервере.
Каждое начисление должно быть проверено на предмет мошенничества. Если “супер” алгоритм заподозрил неладное, то включается сигнализация и транзакцию проверяет служба безопасности. 

## Полезные ссылки

 - [Документация](https://vuex.vuejs.org/)
 - [Блог Маркуса Оберленхера](https://markus.oberlehner.net/blog/).
   Он много пишет нетривиальных вещей о Vue. В том числе о Vuex.
   Самый полезный источник по Vue, после доков 
 - [Чистая архитектура. Искусство разработки программного 
   обеспечения](https://www.litres.ru/robert-s-martin/chistaya-arhitektura-iskusstvo-razrabotki-program-39113892/).
   Книга Роберта Мартина, которую каждый программист должен  прочитать
 - [Реактивность во Vue](https://vuejs.org/v2/guide/reactivity.html). 
   Все, что там написано, релевантно для Vuex
 - [Issue](https://github.com/vuejs/vuex/issues/777) с предложением кеширвать
   результаты функций, которые возвращают геттеры
 - [Декоратор](https://github.com/ktsn/vuex-strong-cache), который это делает
 - [Флаг](https://vuex.vuejs.org/api/#devtools), включающий/отключающий devtools
 - [Vue.Observable](https://vuejs.org/v2/api/index.html#Vue-observable) 
   и [provide / inject](https://vuejs.org/v2/api/index.html#provide-inject) -
   парочка с большим потенциалом в State Management 
 - [Github](https://github.com/vuejs/vuex) Vuex


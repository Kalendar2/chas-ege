(function(){'use strict';

var Height=sluchch(10000,70000);
var Who=['Система навигации','Пилот'].iz();
var WhatDoes=['информирует','сообщает','передаёт','оповещает','объявляет','даёт знать','осведомляет','уведомляет','извещает'].iz();
window.vopr.txt=Who+' самолёта '+WhatDoes+' о том, что полёт проходит на высоте '+chislitlx(Height,'фут')+'.'+
' Выразите высоту полёта в метрах. Считайте, что 1 фут равен 30,5 см.';

window.vopr.ver=[(Height*30.5/100).ts()];

})();
//Обзад 318583
//nadraliev

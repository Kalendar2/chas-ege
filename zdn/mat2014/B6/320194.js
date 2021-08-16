//43. Задание 4 № 320194
//В группе туристов 30 человек. Их вертолётом в несколько приёмов забрасывают
//в труднодоступный район по 6 человек за рейс.
//Порядок, в котором вертолёт перевозит туристов, случаен.
//Найдите вероятность того, что турист П. полетит первым рейсом вертолёта.


(function(){'use strict';
NAinfo.requireApiVersion(0, 0);
var tourists = om.rusbukv.iz();

do{
	var vsego = sluchch(15,35);
	var reis = sluchch(3,6);
	var answers = reis/vsego;
} while ((answers*10000)%100 !== 0);

var poryadok = ['последним','предпоследним'];
for(let i=0;i<Math.ceil(vsego/reis);i++){
	poryadok.push(om.porchisl[i+1].t[0]);
}

NAtask.setTask({
	text: 'В группе туристов '+vsego+' человек. Их вертолётом в несколько приёмов забрасывают '+
		'в труднодоступный район по '+chislitM(reis,'человек','человека','человек')+' за рейс. '+
		'Порядок, в котором вертолёт перевозит туристов, случаен. '+
		'Найдите вероятность того, что турист '+tourists+'. полетит '+poryadok.iz()+' рейсом вертолёта.',
	answers,
});
})();
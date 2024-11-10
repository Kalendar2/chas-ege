let a = sluchch(1000, 3000, 100);
let b = sluchch(200, 900, 100);
let n = sluchch(4, 11);
let slHuman = sluchch(0, 2);
let slObj = sluchch(0, 6);
let progression = new ArithmeticProgression(a, b);
let q = a + progression.member(n);
let human = ['хозяин', 'фермер', 'землевладелец'];
let obj = ['колодец', 'скважину', 'шахту', 'яму', 'яйца', 'траншею', 'канаву'];
NAtask.setTask({
	text: human[slHuman].toZagl() + ' договорился с рабочими, что они выкопают ему ' + obj[slObj] +
		' на следующих условиях: за первый метр он заплатит им ' +
		chislitlx(a, 'рубль') +
		', а за каждый следующий метр  — на ' + chislitlx(b, 'рубль') +
		'  больше, чем за предыдущий. Сколько рублей ' + human[slHuman] + ' должен будет заплатить рабочим,' +
		' если они выкопают ' + obj[slObj] + ' глубиной ' +
		chislitlx(n, 'метр') + ' ?',
	answers: progression.sum(n),
});

//506292

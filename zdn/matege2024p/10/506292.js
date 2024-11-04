let a = sluchch(1000, 3000, 100);
let b = sluchch(200, 900, 100);
let n = sluchch(4, 11);
let progression = new ArithmeticProgression(a, b);
let q = a + progression.member(n);

NAtask.setTask({
	text: ' Хозяин договорился с рабочими, что они выкопают ему колодец на следующих условиях: за первый метр он заплатит им ' +
		chislitlx(a, 'рубль') +
		', а за каждый следующий метр  — на ' + chislitlx(b, 'рубль') +
		'  больше, чем за предыдущий. Сколько рублей хозяин должен будет заплатить рабочим,' +
		' если они выкопают колодец глубиной' +
		chislitlx(n, 'метр') + ' ?',
	answers: progression.sum(n),
});


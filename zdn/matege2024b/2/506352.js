let index1 = [0, 1, 2, 3];
let index2 = [0, 1, 2, 3];
index1.shuffle();
index2.shuffle();
let weight = 'масса';
let a;
let b;
let c;
let d;
let verysmall = ['таблетки лекарства', 'комара', 'мухи', 'божьей коровки', 'капли воды', 'иголки', 'пуговицы'];
let small = ['монеты', 'малины', 'клубники', 'вилки', 'яйца', 'ножниц', 'птицы', 'компьютерной мыши', 'картофеля'];
let medium = ['коляски', 'собаки', 'кресла', 'холодильника', 'человека', 'шкафа'];
let big = ['машины', 'морского ската', 'бегемота', 'носорога', 'индийского слона', 'касатки', 'грузовика',
	'африканского слона', 'автобуса'
];
let array1 = [];;
let v = sluchch(0, verysmall.length - 1);
let s = sluchch(0, small.length - 1);
let me = sluchch(0, medium.length - 1);
let bi = sluchch(0, big.length - 1);

a = (v + 1) * sluchch(10, 20);
b = Math.pow(s + 2, 2) + sluchch(1, 5);
c = (me + 1) * sluchch(10, 15);
d = (bi + 1) + (sluchch(0, 0.5, 0.1));

let array3 = [verysmall[v], small[s], medium[me], big[bi]];
array1 = index2.map(index => array3[index]);

let ans = [];
for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 4; j++) {
		if (index2[i] == index1[j]) {
			ans[i] = j;
		}
	}
}

ans = ans.map(value => value + 1);

let array = [a + ' мг', b + ' г', c + ' кг', d + ' т'];

let answer = 'A) ' + ans[0] + ' B) ' + ans[1] + ' C) ' + ans[2] + ' D) ' + ans[3]

NAtask.setTask({
	text: ' ' + ' A) ' + weight + ' ' + array1[0] + ' B) ' + weight + ' ' + array1[1] + ' C) ' + weight + ' ' + array1[2] +
		' D) ' + weight + ' ' + array1[3] + '$$ $$' +
		'1) ' + ' ' + array[index1[0]] + ' 2) ' + ' ' + array[index1[1]] + ' 3) ' + ' ' + array[index1[2]] + ' 4) ' + ' ' +
		array[index1[3]],
	answers: answer,
});

//506352

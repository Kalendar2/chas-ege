////////////////////////////////////////////////////////////////////////
//
//	ie: именительный	падеж единственного	числа
//	re: родительный		падеж единственного	числа
//	de: дательный		падеж единственного	числа
//	ve: винительный		падеж единственного	числа
//	te: творительный	падеж единственного	числа
//	pe: предложный		падеж единственного	числа
//	ie: именительный	падеж множественного	числа
//	re: родительный		падеж множественного	числа
//	de: дательный		падеж множественного	числа
//	ve: винительный		падеж множественного	числа
//	te: творительный	падеж множественного	числа
//	pe: предложный		падеж множественного	числа
//
//	rod: род:
//		0: мужской
//		1: женский
//		2: средний
//		3: только множественное число
//
//	odu: одушевлённость:
//		0: неодушевлённое
//		1: одушевлённое
//
//	skl: склонение:
//		0: несклоняемое
//		1: первое
//		2: второе
//		3: третье
//		4: разносклоняемые существительные
////////////////////////////////////////////////////////////////////////
'use strict';
if(lx==undefined)
	var lx=[];	//Объявляем глобальный объект lx
////////////////////////////////////////////////////////////////////////

//{{Словосочетания с главным словом - существительным
lx['американская миля']={
	ie:'американская миля',
	re:'американской мили',
	de:'американской миле',
	ve:'американскую милю',
	te:'американской милей',
	pe:'американской миле',
	im:'американские мили',
	rm:'американских миль',
	dm:'американским милям',
	vm:'американские мили',
	tm:'американскими милями',
	pm:'американских милях',
	rod:1,
	odu:0,
};
lx['бутылка газировки']={
	ie:'бутылка газировки',
	re:'бутылки газировки',
	de:'бутылке газировки',
	ve:'бутылку газировки',
	te:'бутылкой газировки',
	pe:'бутылке газировки',
	im:'бутылки газировки',
	rm:'бутылок газировки',
	dm:'бутылкам газировки',
	vm:'бутылки газировки',
	tm:'бутылками газировки',
	pm:'бутылках газировки',
	rod:0,
	odu:0,
};
lx['буханка хлеба']={
	ie:'буханка хлеба',
	re:'буханки хлеба',
	de:'буханке хлеба',
	ve:'буханку хлеба',
	te:'буханкой хлеба',
	pe:'буханке хлеба',
	im:'буханки хлеба',
	rm:'буханок хлеба',
	dm:'буханкам хлеба',
	vm:'буханки хлеба',
	tm:'буханками хлеба',
	pm:'буханках хлеба',
	rod:1,
	odu:0,
};
lx['вольная борьба']={
	ie:'вольная борьба',
	re:'вольной борьбы',
	de:'вольной борьбе',
	ve:'вольную борьбу',
	te:'вольной борьбой',
	pe:'вольной борьбе',
	im:'вольные борьбы',
	rm:'вольных борьб',
	dm:'вольным борьбам',
	vm:'вольные борьбы',
	tm:'вольными борьбами',
	pm:'вольных борьбах',
	rod:1,
	odu:0,
};
lx['доисторический омнибус']={
	ie:'доисторический омнибус',
	re:'доисторического омнибуса',
	de:'доисторическому омнибусу',
	ve:'доисторический омнибус',
	te:'доисторическим омнибусом',
	pe:'доисторическом омнибусе',
	im:'доисторические омнибусы',
	rm:'доисторических омнибусов',
	dm:'доисторическим омнибусам',
	vm:'доисторические омнибусы',
	tm:'доисторическими омнибусами',
	pm:'доисторических омнибусах',
	rod:0,
	odu:0,
};
lx['книжная полка']={
	ie:'книжная полка',
	re:'книжной полки',
	de:'книжной полке',
	ve:'книжную полку',
	te:'книжной полкой',
	pe:'книжной полке',
	im:'книжные полки',
	rm:'книжных полок',
	dm:'книжным полкам',
	vm:'книжные полки',
	tm:'книжными полками',
	pm:'книжных полках',
	rod:1,
	odu:0,
};
lx['комсомолка, спортсменка, отличница и, наконец, просто красавица']={
	ie:'комсомолка, спортсменка, отличница и, наконец, просто красавица',
	re:'комсомолки, спортсменки, отличницы и, наконец, просто красавицы',
	de:'комсомолке, спортсменке, отличнице и, наконец, просто красавице',
	ve:'комсомолку, спортсменку, отличницу и, наконец, просто красавицу',
	te:'комсомолкой, спортсменкой, отличницей и, наконец, просто красавицей',
	pe:'комсомолке, спортсменке, отличнице и, наконец, просто красавице',
	im:'комсомолки, спортсменки, отличницы и, наконец, просто красавицы',
	rm:'комсомолок, спортсменок, отличниц и, наконец, просто красавиц',
	dm:'комсомолкам, спортсменкам, отличницам и, наконец, просто красавицам',
	vm:'комсомолок, спортсменок, отличниц и, наконец, просто красавиц',
	tm:'комсомолками, спортсменками, отличницами и, наконец, просто красавицами',
	pm:'комсомолках, спортсменках, отличницах и, наконец, просто красавицах',
	rod:1,
	odu:0,
};
lx['круизный лайнер']={
	ie:'круизный лайнер',
	re:'круизного лайнера',
	de:'круизному лайнеру',
	ve:'круизный лайнер',
	te:'круизным лайнером',
	pe:'круизном лайнере',
	im:'круизные лайнеры',
	rm:'круизных лайнеров',
	dm:'круизным лайнерам',
	vm:'круизные лайнеры',
	tm:'круизными лайнерами',
	pm:'круизных лайнерах',
	rod:0,
	odu:0,
};
lx['лёгкая атлетика']={
	ie:'лёгкая атлетика',
	re:'лёкой атлетики',
	de:'лёгкой атлетике',
	ve:'лёгкую атлетику',
	te:'лёгкой атлетикой',
	pe:'лёгкой атлетике',
	im:'лёгкие атлетики',
	rm:'лёгких атлетик',
	dm:'лёгким атлетикам',
	vm:'лёгкие атлетики',
	tm:'лёгкими атлетиками',
	pm:'лёгких атлетиках',
	rod:1,
	odu:0,
};
lx['магнит на холодильник']={
	ie:'магнит на холодильник',
	re:'магнита на холодильник',
	de:'магниту на холодильник',
	ve:'магнит на холодильник',
	te:'магнитом на холодильник',
	pe:'магните на холодильник',
	im:'магниты на холодильник',
	rm:'магнитов на холодильник',
	dm:'магнитам на холодильник',
	vm:'магниты на холодильник',
	tm:'магнитами на холодильник',
	pm:'магнитах на холодильник',
	rod:0,
	odu:0,
};
lx['метиловый спирт']={
	ie:'метиловый спирт',
	re:'метилового спирта',
	de:'метиловому спирту',
	ve:'метиловый спирт',
	te:'метиловым спиртом',
	pe:'метиловом спирте',
	im:'метиловые спирты',
	rm:'метиловых спиртов',
	dm:'метиловым спиртам',
	vm:'метиловые спирты',
	tm:'метиловыми спиртами',
	pm:'метиловых спиртах',
	rod:0,
	odu:0,
};
lx['морская миля']={
	ie:'морская миля',
	re:'морской мили',
	de:'морской миле',
	ve:'морскую милю',
	te:'морской милей',
	pe:'морской миле',
	im:'морские мили',
	rm:'морских миль',
	dm:'морским милям',
	vm:'морские мили',
	tm:'морскими милями',
	pm:'морских милях',
	rod:1,
	odu:0,
};
lx['наименьшее значение']={
	ie:'наименьшее значение',
	re:'наименьшего значения',
	de:'наименьшему значению',
	ve:'наименьшее значение',
	te:'наименьшим значением',
	pe:'наименьшем значении',
	im:'наименьшие значения',
	rm:'наименьших значений',
	dm:'наименьшим значениям',
	vm:'наименьшие значения',
	tm:'наименьшими значениями',
	pm:'наименьших значениях',
	rod:2,
	odu:0,
};
lx['наибольшее значение']={
	ie:'наибольшее значение',
	re:'наибольшего значения',
	de:'наибольшему значению',
	ve:'наибольшее значение',
	te:'наибольшим значением',
	pe:'наибольшем значении',
	im:'наибольшие значения',
	rm:'наибольших значений',
	dm:'наибольшим значениям',
	vm:'наибольшие значения',
	tm:'наибольшими значениями',
	pm:'наибольших значениях',
	rod:2,
	odu:0,
};
lx['населённый пункт']={
	ie:'населённый пункт',
	re:'населённого пункта',
	de:'населённому пункту',
	ve:'населённый пункт',
	te:'населённым пунктом',
	pe:'населённом пункте',
	im:'населённые пункты',
	rm:'населённых пунктов',
	dm:'населённым пунктам',
	vm:'населённые пункты',
	tm:'населёнными пунктами',
	pm:'населённых пунктах',
	r2:'населённых пункта',
	rod:0,
	odu:0,
};
lx['настольный теннис']={
	ie:'настольный теннис',
	re:'настольного тенниса',
	de:'настольному теннису',
	ve:'настольный теннис',
	te:'настольным теннисом',
	pe:'настольном теннисе',
	im:'настольные теннисы',
	rm:'настольных теннисов',
	dm:'настольным теннисам',
	vm:'настольные теннисы',
	tm:'настольными теннисами',
	pm:'настольных теннисах',
	rod:0,
	odu:0,
};
lx['оконная рама']={
	ie:'оконная рама',
	re:'оконной рамы',
	de:'оконной раме',
	ve:'оконную раму',
	te:'оконной рамой',
	pe:'оконной раме',
	im:'оконные рамы',
	rm:'оконных рам',
	dm:'оконным рамам',
	vm:'оконные рамы',
	tm:'оконными рамами',
	pm:'оконных рамах',
	rod:1,
	odu:0,
};
lx['открытый луч']={
	ie:'открытый луч',
	re:'открытого луча',
	de:'открытому лучу',
	ve:'открытый луч',
	te:'открытым лучом',
	pe:'открытом луче',
	im:'открытые лучы',
	rm:'открытых лучей',
	dm:'открытым лучам',
	vm:'открытые лучи',
	tm:'открытыми лучами',
	pm:'открытых лучах',
	rod:0,
	odu:0,
};
lx['прогулочное судно']={
	ie:'прогулочное судно',
	re:'прогулочного судна',
	de:'прогулочному судну',
	ve:'прогулочное судно',
	te:'прогулочным судном',
	pe:'прогулочном судне',
	im:'прогулочные суда',
	rm:'прогулочных судов',
	dm:'прогулочным судам',
	vm:'прогулочные суда',
	tm:'прогулочными судами',
	pm:'прогулочных судах',
	rod:2,
	odu:0,
};
lx['русская миля']={
	ie:'русская миля',
	re:'русской мили',
	de:'русской миле',
	ve:'русскую милю',
	te:'русской милей',
	pe:'русской миле',
	im:'русские мили',
	rm:'русских миль',
	dm:'русским милям',
	vm:'русские мили',
	tm:'русскими милями',
	pm:'русских милях',
	rod:1,
	odu:0,
};
lx['сборник тестов для подготовки к ЕГЭ']={
	ie:'сборник тестов для подготовки к ЕГЭ',
	re:'сборника тестов для подготовки к ЕГЭ',
	de:'сборнику тестов для подготовки к ЕГЭ',
	ve:'сборник тестов для подготовки к ЕГЭ',
	te:'сборником тестов для подготовки к ЕГЭ',
	pe:'сборнике тестов для подготовки к ЕГЭ',
	im:'сборники тестов для подготовки к ЕГЭ',
	rm:'сборников тестов для подготовки к ЕГЭ',
	dm:'сборникам тестов для подготовки к ЕГЭ',
	vm:'сборники тестов для подготовки к ЕГЭ',
	tm:'сборниками тестов для подготовки к ЕГЭ',
	pm:'сборниках тестов для подготовки к ЕГЭ',
	rod:0,
	odu:0,
};
lx['скромный библиотекарь']={
	ie:'скромный библиотекарь',
	re:'скромного библиотекаря',
	de:'скромному библиотекарю',
	ve:'скромного библиотекаря',
	te:'скромным библиотекарем',
	pe:'скромном библиотекаре',
	im:'скромные библиотекари',
	rm:'скромных библиотекарей',
	dm:'скромным библиотекарям',
	vm:'скромных библиотекарей',
	tm:'скромными библиотекарями',
	pm:'скромных библиотекарях',
	rod:0,
	odu:0,
};
lx['суровая воронежская хакерша']={
	ie:'суровая воронежская хакерша',
	re:'суровой воронежской хакерши',
	de:'суровой воронежской хакерше',
	ve:'суровую воронежскую хакершу',
	te:'суровой воронежской хакершой',
	pe:'суровой воронежской хакерше',
	im:'суровые воронежские хакерши',
	rm:'суровых воронежских хакерш',
	dm:'суровым воронежским хакершам',
	vm:'суровых воронежских хакерш',
	tm:'суровыми воронежскими хакершами',
	pm:'суровых воронежских хакершах',
	rod:1,
	odu:0,
};
lx['точка минимума']={
	ie:'точка минимума',
	re:'точки минимума',
	de:'точке минимума',
	ve:'точку минимума',
	te:'точкой минимума',
	pe:'точке минимума',
	im:'точки минимума',
	rm:'точек минимума',
	dm:'точкам минимума',
	vm:'точки минимума',
	tm:'точками минимума',
	pm:'точках минимума',
	rod:1,
	odu:0,
};
lx['точка максимума']={
	ie:'точка максимума',
	re:'точки максимума',
	de:'точке максимума',
	ve:'точку максимума',
	te:'точкой максимума',
	pe:'точке максимума',
	im:'точки максимума',
	rm:'точек максимума',
	dm:'точкам максимума',
	vm:'точки максимума',
	tm:'точками максимума',
	pm:'точках максимума',
	rod:1,
	odu:0,
};
lx['тяжелая атлетика']={
	ie:'тяжелая атлетика',
	re:'тяжелой атлетики',
	de:'тяжелой атлетике',
	ve:'тяжелую атлетику',
	te:'тяжелой атлетикой',
	pe:'тяжелой атлетике',
	im:'тяжелые атлетики',
	rm:'тяжелых атлетик',
	dm:'тяжелым атлетикам',
	vm:'тяжелые атлетики',
	tm:'тяжелыми атлетиками',
	pm:'тяжелых атлетиках',
	rod:1,
	odu:0,
};
lx['упаковка сока']={
	ie:'упаковка сока',
	re:'упаковки сока',
	de:'упаковке сока',
	ve:'упаковку сока',
	te:'упаковкой сока',
	pe:'упаковке сока',
	im:'упаковки сока',
	rm:'упаковок сока',
	dm:'упаковкам сока',
	vm:'упаковки сока',
	tm:'упаковками сока',
	pm:'упаковках сока',
	rod:1,
	odu:0,
};
lx['флакон шампуня']={
	ie:'флакон шампуня',
	re:'флакона шампуня',
	de:'флакону шампуня',
	ve:'флакон шампуня',
	te:'флаконом шампуня',
	pe:'флаконе шампуня',
	im:'флаконы шампуня',
	rm:'флаконов шампуня',
	dm:'флаконам шампуня',
	vm:'флаконы шампуня',
	tm:'флаконами шампуня',
	pm:'флаконах шампуня',
	rod:0,
	odu:0,
};
lx['фунт стерлингов']={
	ie:'фунт стерлингов',
	re:'фунта стерлингов',
	de:'фунту стерлингов',
	ve:'фунт стерлингов',
	te:'фунтом стерлингов',
	pe:'фунте стерлингов',
	im:'фунты стерлингов',
	rm:'фунтов стерлингов',
	dm:'фунтам стерлингов',
	vm:'фунты стерлингов',
	tm:'фунтами стерлингов',
	pm:'фунтах стерлингов',
	rod:0,
	skl:2,
	odu:0,
};
lx['цветочный горшок']={
	ie:'цветочный горшок',
	re:'цветочного горшка',
	de:'цветочному горшку',
	ve:'цветочный горшок',
	te:'цветочным горшком',
	pe:'цветочном горшке',
	im:'цветочные горшки',
	rm:'цветочных горшков',
	dm:'цветочным горшкам',
	vm:'цветочные горшки',
	tm:'цветочными горшками',
	pm:'цветочных горшках',
	rod:0,
	skl:2,
	odu:0,
};
lx['транспортное средство']={
	ie:'транспортное средство',
	re:'транспортного средства',
	de:'транспортному средству',
	ve:'транспортное средство',
	te:'транспортным средством',
	pe:'транспортном средстве',
	im:'транспортные средства',
	rm:'транспортных средств',
	dm:'транспортным средствам',
	vm:'транспортные средства',
	tm:'транспортными средствами',
	pm:'транспортных средствах',
	rod:2,
	skl:2,
	odu:0,
};
//}}Словосочетания с главным словом - существительным


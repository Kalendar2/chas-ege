(function(){'use strict';

window.vopr.txt='В каком варианте ответа выделенное слово употреблено неверно?<br/>';

var ver=[//Список (на самом деле массив) правильных словосочетаний

	"1 апреля Воронежская филармония откроет продажу АБОНЕМЕНТОВ на новый концертный сезон.",
	"«Гигантизм» на Алтае встречается не только в растительном, но и в ЖИВОТНОМ мире: даже широко распространённые в Западной и Восточной Сибири бурый медведь и марал достигают здесь иногда очень внушительных размеров.",
	"А.&nbsp;Н.&nbsp;Радищев в прозе и стихах обращается к сокровищнице народного творчества и народного языка, поэтому его можно считать ЗАЧИНАТЕЛЕМ того процесса, который нашёл своё завершение в произведениях А.&nbsp;С.&nbsp;Пушкина.",
	"АБОНЕМЕНТЫ на концерты, проходящие в Концертном заме имени П.И. Чайковского, можно приобрести во всех кассах Московской государственной академической филармонии.",
	"АБОНЕНТСКАЯ плата составляет сто двадцать рублей в месяц.",
	"АДРЕСАТ должен сам прийти на почту, как только узнает о том, что для него пришло заказное письмо.",
	"Абитуриенты до назначенного дня должны ПРЕДСТАВИТЬ все необходимые для приёма в выбранное учебное учреждение документы.",
	"Адвокат произнёс обдуманную, артистически разыгранную ЗАЩИТИТЕЛЬНУЮ речь, благодаря которой подсудимый был помилован присяжными.",
	"Альпинисты не раз видели в горах следы ЧЕЛОВЕКОПОДОБНОГО существа, которое непальцы называют Йети.",
	"Аналитики утверждают, что в наступившем году на рынке ценных бумаг можно ОЖИДАТЬ значительных изменений.",
	"Ассортимент продукции, ПРЕДСТАВЛЕННЫЙ на нашем сайте, необычайно широк.",
	"Благие цели никогда не могут быть достигнуты тайными ПРОИСКАМИ.",
	"Бойкий ЯЗЫКАСТЫЙ парень, продававший неподалёку книги и календари, время от времени сочувственно поглядывал на молоденькую продавщицу, у которой никак не получалось привлечь покупателей.",
	"Большинство отрицательных героев Н. Гоголя можно собрать в ЕДИНЫЙ образ пошлости.",
	"Братья его были настолько наивными и ДОВЕРЧИВЫМИ, что обмануть их было совсем нетрудно.",
	"Будьте уверены, за свой ПРОСТУПОК мальчик ещё ответит.",
	"В БОЛОТИСТОЙ почве содержится мало кислорода и питательных веществ, необходимых растениям.",
	"В 1918 году издательство «Всемирная литература» поставило перед собой задачу ОЗНАКОМИТЬ читателя с лучшими произведениями мировой классики.",
	"В 1917 году Цветаева остаётся в Москве одна с двумя маленькими детьми в совершенно БЕДСТВЕННОМ положении.",
	"В годы репрессий за допущенную ОПЕЧАТКУ работники типографии могли поплатиться жизнью.",
	"В его голосе звучала УБЕЖДЕННОСТЬ в правоте людей, попросивших о помощи.",
	"В ИГОРНОМ зале казино было уже много людей.",
	"В НЕПРОГЛЯДНОЙ тьме невозможно было различить даже очертания домов.",
	"В начале XVIII века с развитием во Франции паркового дела и пейзажной дендрологии ЖИВЫЕ изгороди нашли широкое применение.",
	"В неясном, рассеянном свете ночи открылись перед нами ВЕЛИЧЕСТВЕННЫЕ и прекрасные перспективы Петербурга: Нева, набережная, каналы, дворцы.",
	"В опустевшем после эвакуации городе продолжали формироваться ДОБРОВОЛЬЧЕСКИЕ батальоны.",
	"В период заморозков растениям необходимо ЖИВИТЕЛЬНОЕ тепло, поэтому садоводы должны заранее обдумать, какой тип теплиц использовать, чтобы сохранить нежные всходы.",
	"В парке было устроено несколько ИСКУССТВЕННЫХ водоемов причудливой формы.",
	"В первый же день Иван легко ОСВОИЛ новый музыкальный инструмент.",
	"В предвыборную борьбу выступила не так давно сформированная ДЕМОКРАТИЧЕСКАЯ партия.",
	"В предстоящем чемпионате Второго дивизиона зону «Восток» ПОПОЛНИТ команда из Якутска.",
	"В пресс-релизе указано на возросшее значение объединения всех прогрессивных и ДЕМОКРАТИЧЕСКИХ сил.",
	"В процессе реформы хозяйственной системы Китая КОРЕННЫЕ перемены затронули и рынок страхования.",
	"В пушкинские времена щёголи НАДЕВАЛИ несколько жилетов одновременно, причём нижний должен был выглядывать из-под верхнего.",
	"В районах ВЕЧНОЙ мерзлоты дома строятся по специальным проектам.",
	"В своих письмах Гоббс оставался противником ДЕМОКРАТИЧЕСКОГО образа правления.",
	"В соответствии с «Правилами предоставления услуг почтовой связи» заказное письмо только тогда считается доставленным, когда АДРЕСАТ лично расписался в уведомлении о вручении.",
	"В течение ДЛИТЕЛЬНОГО времени наша команда готовилась к восхождению на гору.",
	"В течение последних лет опытные тренеры подготовили сильных игроков, которые в ближайшее время будут готовы ПОПОЛНИТЬ сборную России.",
	"ВЕЛИКИЙ учёный внес огромный вклад в мировую науку.",
	"ВОДНЫЙ стадион — гордость района и излюбленное место горожан, куда они приходят семьями в выходные дни.",
	"ВЫДАЧА коньков производится при наличии у посетителя катка паспорта или любого другого документа, который может быть оставлен в залог.",
	"Важное значение для дальнейшей жизни имеют ПРАКТИЧЕСКИЕ навыки, приобретённые в раннем детстве.",
	"Ведущие банкиры страны уверены в том, что надвигается очередной ЭКОНОМИЧЕСКИЙ кризис.",
	"ВЗРЫВНОЙ волной были выбиты все стёкла соседнего дома.",
	"Вечерами дедушка часто сидел на берегу моря, занимаясь починкой РЫБАЦКИХ сетей.",
	"ВЗРЫВНОЙ характер Ильи мешал гостям сосредоточиться и понять, что он хочет им сказать.",
	"Вихрев в ПРАКТИЧЕСКОЙ жизни отличался редкостным простодушием.",
	"Военные без особых усилий сумели обезвредить ВЗРЫВНОЕ устройство.",
	"Вокруг голубовато-белая пустыня без ЕДИНОЙ складочки — ни бугров, ни впадин.",
	"Волосы стали тусклыми и ЛОМКИМИ.",
	"Вопреки распространённому мнению, ОСВОИТЬ работу в операционной системе Linux под силу даже начинающему пользователю.",//
	"Воспитанные, ласковые и ИГРИВЫЕ котята бывают у тех заводчиков, которые умеют создать для домашних питомцев атмосферу любви и заботы.",
	"Все без исключения производители различных отраслей стараются оригинально ПРЕДСТАВИТЬ свои новинки.",
	"Все дети в семье Ковалёвых увлекаются ВОДНЫМИ видами спорта.",
	"Все мы знаем замечательного ученого Д.С. Лихачева — человека ВЫСОКОЙ культуры и оригинальной мысли.",
	"Все товары, продающиеся в нашем магазине, имеют ГАРАНТИЙНЫЙ срок обслуживания.",
	"Вскоре обнаружились его ЖУЛЬНИЧЕСКИЕ операции с недвижимостью.",
	"Выступление главного редактора оказалось неожиданно уклончивым и ДИПЛОМАТИЧНЫМ.",
	"Выступление юного скрипача было настолько ЭФФЕКТНЫМ, что публика аплодировала стоя.",
	"Вынос Боевого Знамени ВОИНСКОЙ части производится в порядке, установленном Строевым уставом.",
	"Готовые тосты можно украсить базиликом, который нужно предварительно вымыть, хорошо ОТРЯХНУТЬ от капель и нарезать полосками.",
	"Грохот артиллерийской канонады стих, и слышны были только ОДИНОЧНЫЕ выстрелы.",
	"ГУМАННОЕ отношение к детям означает прежде всего понимание духовных усилий ребёнка, уважительное отношение к этим исканиям и ненавязчивую помощь.",
	"ГУМАННЫЕ законы возможны только в зрелом обществе.",
	"ДЕЛОВОЙ обед можно рассматривать как вариант рабочего общения при условии, что вы пришли на этот обед не для того, чтобы утолить голод или жажду.",
	"Девочка резким движением откинула чёлку со лба и неожиданно спокойно и ДОВЕРЧИВО посмотрела Алексею в глаза.",
	"Девочки ОДЕЛИ кукол в новые нарядные платья.",
	"Девочку никто не воспринимал всерьёз, но на ПОВЕРКУ вышло, что она умнее всех.",
	"ДЕМОКРАТИЧНЫЙ стиль управления подразумевает гармоничное распределение инициативы и ответственности между руководством и подчинёнными.",
	"ДИПЛОМАТИЧЕСКИЕ отношения между Россией и США были установлены в 1807 году.",
	"ДЛИТЕЛЬНЫЙ кашель у ребёнка нередко является симптомом серьёзного заболевания.",
	"ДОВЕРИТЕЛЬНАЯ беседа делает отношения в семье более глубокими и прочными, а самих членов семьи — более счастливыми.",
	"Довольно часто устойчивое выражение, имеющее ЦЕЛОСТНЫЙ смысл, переводится на другой язык одним словом.",
	"Дом от цоколя до крыши был украшен ИСКУСНОЙ резьбой.",
        "Для возвышенностей с твёрдыми, нерастворимыми породами типична БОЛОТИСТАЯ местность.",
	"Для настоящего альпиниста штурм этой вершины не ПРЕДСТАВЛЯЕТ затруднений.",
	"Для того чтобы домашний квас получился ИГРИСТЫМ, приятным и освежающим, необходимо соблюдать технологию его приготовления.",
	"До выполнения ремонтных работ по замене повреждённых элементов необходимо в целях безопасности ОГОРОДИТЬ опасную зону.",
	"Долгими осенними вечерами хозяин не выходил из комнаты и в неизменном халате, с ВЕЧНОЮ трубкою в зубах, сидел у окна.",
	"Долгое время в медицине ЕДИНСТВЕННЫМ материалом для опытов по изучению сильнодействующих ядов были мелкие животные.",
	"Дремучее НЕВЕЖЕСТВО посетителя изумило даже видавших виды опытных сотрудников.",
	"Его брат оказался грубым НЕВЕЖЕЙ, не соблюдавшим элементарные правила приличий.",
	"ЕДИНИЧНЫЙ случай в эксперименте не подтверждает гипотезу.",
	"Если АДРЕСАТ не приходит за письмом в течение пяти суток, то почтовое отделение направляет ему повторное уведомление.",
	"Если вы получили денежную НАЛИЧНОСТЬ в банке, то тратить её вы имеете право только по тому целевому назначению, которое указано в банковском чеке.",
	"Если заставить колебаться две одинаково натянутые струны, одна из которых вдвое длиннее другой, возникнет ГАРМОНИЧЕСКОЕ созвучие.",
	"Есть проверенный метод чистки меха с коротким ворсом: загрязнённый мех нужно протереть горячим картофельным пюре, а затем тщательно ОТРЯХНУТЬ.",
	"Еще совсем недавно в этих краях существовали РЫБНЫЕ промыслы.",
	"ЗВУЧНЫЙ голос певца разносился по огромному залу, и слушатели, затаив дыхание, наслаждались прекрасным исполнением известной оперной арии.",
	"ЗЛОСТНЫЙ нарушитель правил размещения наружной рекламы после очередного предупреждения, которое было оставлено им без внимания, был привлечён к административной ответственности.",
	"За административные ПРОСТУПКИ разного характера законодательством предусмотрена различная степень ответственности.",
	"За большие заслуги перед государством артиста ПРЕДСТАВИЛИ к правительственной награде.",
	"За дисциплинарный ПРОСТУПОК работнику завода был вынесен строгий выговор.",
	"Задача гимнастики — ВОСПОЛНИТЬ дефицит движения, а вместе с ним и дефицит питания костей, хрящей, связок и мышц.",
	"Заметив ОПАСЛИВЫЙ взгляд собеседника, я на минуту задумался.",
	"Затопления от наводнений заторного типа, которые мало зависят от уровня водности года, следует ОЖИДАТЬ в апреле и в мае.",
	"Зачем нужна толкующая сны ГАДАТЕЛЬНАЯ книга, если у Татьяны и так достаточно богатое воображение и дар предвидения?",
	"Здесь было так неуютно и страшно, как в заколдованном царстве, где всё уснуло по прихоти ЗЛОЙ феи.",
	"ИГРОВОЕ поле для волейбола должно быть прямоугольным и симметричным и включать площадку для игры и свободную зону.",
	"Из радиоприёмника доносился НЕМУДРЁНЫЙ, однообразный мотивчик.",
	"Из сада хлынул чистый ДОЖДЕВОЙ запах, дурманящий аромат цветущей липы.",
	"Индейцы – общее название КОРЕННОГО населения Америки.",
	"Инновационный технологический рынок в России в ближайшие три года может ОЖИДАТЬ волна неудач, вызванных цикличным характером его развития.",
	"Интерьеры с дизайном в готическом стиле ВЕЛИЧЕСТВЕННЫ и изящны.",
	"Информационная служба городской телефонной сети опубликовала итоги перехода АБОНЕНТОВ на новые тарифные планы.",
	"Информацию о НАЛИЧИИ билетов на детские спектакли, которые будут проходить в дни зимних каникул, можно получить в кассах драматического театра.",
	"Ира тщательно ОДЕЛА малыша, и они отправились на прогулку.",
	"ИСПОЛНИТЕЛЬСКОЕ мастерство актёра достойно восхищения.",
	"Каждый день, выходя из дома, мы ОДЕВАЕМСЯ по погоде.",
	"К ИГРОВОМУ кино относятся практически все произведения кинематографа, за исключением части документального кино.",
	"К сожалению, никакого ПРАКТИЧЕСКОГО значения теория не имела.",
	"Коллеги были уверены, что со временем у неё разовьются ПЕДАГОГИЧЕСКИЕ способности.",
	"КОЛЛЕГИАЛЬНЫЙ — осуществляемый группой лиц.",
	"КОМФОРТ — бытовые удобства; то, что создаёт удобства.",
	"КОНСЕРВАЦИЯ старинной постройки должна предотвратить её дальнейшее разрушение.",
	"КАМЕННОЕ лицо Василия не выражало никаких эмоций.",
	"Каждый ВЕЛИКИЙ поэт является выразителем духа народа, его истории.",
	"Каждый настоящий музыкант должен интересоваться вековыми традициями народной и классической ИСПОЛНИТЕЛЬСКОЙ культуры.",
	"Конечно, тот самый ИГРИСТЫЙ русский квас, который пили наши предки, приготовить в современных условиях практически невозможно, но можно попробовать приготовить неплохие квасные напитки.",
	"Компьютеры нередко ошибочное рассматриваются в современном кинематографе как ВРАЖДЕБНАЯ человеку сила.",
	"Константин — человек мягкий, тонкий, весьма ДИПЛОМАТИЧНЫЙ.",
	"Кошек принято считать необычайно ЖИВУЧИМИ, но на самом деле за этими домашними животными требуется серьёзный уход, и прежде всего они нуждаются в наблюдении ветеринара, определяющего правильный рацион питания.",
	"Кошки чрезвычайно терпеливы и могут часами ВЫЖИДАТЬ, когда мышь покинет своё убежище.",
	"Красивый голос придавал речи оратора особую УБЕДИТЕЛЬНОСТЬ.",
	"К тому времени Порфирий скопил немалый ОБОРОТНЫЙ капиталец.",
	"Курс культурологии, который изучается на кафедре гуманитарных и социальных наук, был введён с целью ВОСПОЛНИТЬ пробелы в знании требований воинского и гражданского этикета.",
	"Леша ОДЕЛ младшую сестрёнку, и они отправились встречать папу с работы.",
	"Литература — ВЕЛИКОЕ достояние народа.",
	"Малыш проходил мимо гуся, БОЯЗЛИВО на него поглядывая.",
	"Механическая обработка не полностью отвердевшей формованной конструкции бывает ЗАТРУДНИТЕЛЬНОЙ вследствие повышенной вязкости этой конструкции.",
	"Между ветеранами труда и руководством предприятия состоялся ДОВЕРИТЕЛЬНЫЙ разговор, в ходе которого были затронуты самые различные темы.",
	"Между школьниками и учителями уже в первые дни установились добрые и ДОВЕРИТЕЛЬНЫЕ отношения.",
	"Мне дорог и ПАМЯТЕН каждый уголок родного дома.",
	"Многие женщины посмотрели на новую гостью с завистью и НЕДОБРОЖЕЛАТЕЛЬНОСТЬЮ.",
	"Мои родители всю жизнь работали в ВОЕННОЙ промышленности.",
	"Молодая, прекрасная ЧЕРКЕШЕНКА пожертвовала собой ради спасения пленного офицера.",
	"Молодой модельер был счастлив ПРЕДСТАВИТЬ взыскательным экспертам в области свежих тенденций в мире моды свою первую коллекцию одежды весеннее-летнего сезона.",
	"Молодой учитель с волнением ловил на себе ПРИЗНАТЕЛЬНЫЕ взгляды ребят и продолжал проникновенно говорить обо всём, что накопилось у него на душе.",
	"На вопросы об одноклассниках мой товарищ отвечал немногословно и ДИПЛОМАТИЧНО умолчал о бывших между ними разногласиях.",
	"На известном портрете М. Н. Ермоловой особенно привлекает взгляд ГОРДЕЛИВО посаженная голова актрисы, благородные черты её одухотворённого лица.",
	"На книжном фестивале всем желающим будет ПРЕДОСТАВЛЕНА возможность встретиться с любимыми современными писателями и задать им вопросы.",
	"На летние месяцы школьников отправляют в международный ЯЗЫКОВОЙ лагерь, одно из основных направлений деятельности которого&nbsp;— изучение иностранных языков.",
	"На месте ВОДНОЙ глади часто возникает грязная болотная трясина, которая постепенно зарастает лесом.",
	"На ОБОРОТНОЙ стороне листа был написан телефон.",
	"На полотнах ЗАЧИНАТЕЛЯ крестьянского бытового жанра в русском искусстве М. Шибанова академическая условность композиции и сдержанность характеристик персонажей сочетаются с любовной обрисовкой крестьянского быта.",
	"На прогулку Катя НАДЕЛА тёплую шапку.",
	"На пути к победе солдаты готовы были ПРЕТЕРПЕТЬ все бедствия, преодолеть все преграды.",
	"На совещании нам ПРЕДСТАВИЛИ нового сотрудника.",
	"На темном листе блестела одна-единственная ДОЖДЕВАЯ капля.",
	"На этот раз открытую лекцию в музее читал ДЕЙСТВИТЕЛЬНЫЙ член Академии наук.",
	"НАДЕЛА дочка платок, взяла корзинку и отправилась в лес.",
	"Называя его НЕВЕЖДОЙ в сердечных делах, автор подчёркивает искренность и чистоту героя, не способного воспринимать любовь как науку.",
	"Наиболее ПРИЗНАННЫМ из ранних рассказов И. А. Бунина стал его этюд «Антоновские яблоки».",
	"Наполеон проявил ОСОБОЕ уважение к Сперанскому, подарив ему табакерку с собственным портретом.",
	"Народу было ВЕЛИКОЕ множество, как будто весь город пожелал увидеть поэта и услышать его удивительный голос.",
	"Настоящий педагог должен стремиться ОХВАТИТЬ вниманием всех своих учеников.",
	"Нас поселили в доме для КОМАНДИРОВАННЫХ.",
	"Настя НАДЕЛА бальное платье и, напевая мелодию вальса, легко закружилась перед зеркалами, представляя себя героиней любимого балета, виденного ею в театре.",
	"Настя помогла мне ОДЕТЬ сестренку перед концертом.",
	"Наутро была назначена встреча с императрицей, но на рассвете посол неожиданно ПРЕСТАВИЛСЯ.",
	"Наша страна может гордиться цирковым исполнительским искусством.",
	"Не по ЗЛОЙ воле он допускал промахи и ошибки.",
	"Не следует ПРИНИЖАТЬ значение победы нашей сборной в чемпионате мира по тяжёлой атлетике.",
	"Не следует искать в каждой строчке письма СКРЫТЫЙ смысл.",
	"Не стоит ПРИНИЖАТЬ заслуг тренера в победе его воспитанников&nbsp;— юных футболистов&nbsp;— в матче с более опытным соперником.",
	"Невозможно было ОЖИДАТЬ более тёплого приёма, чем тот,  который был организован для гостей фестиваля.",
	"Недостаток кальция в организме черепахи можно легко ВОСПОЛНИТЬ при кормлении животного мелкой рыбой с костями.",
	"Необходимая принадлежность многих игр — это ИГРАЛЬНЫЙ кубик.",
	"Неожиданно ВРАЖДЕБНЫЙ тон удивил и огорчил приятелей.",
	"Несколькими яркими, КРАСОЧНЫМИ мазками художник изобразил разбежавшуюся по лужайке детвору.",
	"Несмотря на учёную степень, мой собеседник оказался редкостным НЕВЕЖДОЙ, мало что знающим в области науки.",
	"Нефролепис может расти и при ИСКУССТВЕННОМ освещении, но, как и все папоротники, нуждается в повышенной влажности воздуха.",
	"Никакая работа не ПРЕДСТАВЛЯЛА для этого блестяще образованного и высокоорганизованного человека больших затруднений.",
	"Никто из нас не ожидал такого холодного и даже ВРАЖДЕБНОГО приёма.",
	"Новая фирма была зарегистрированная под красивым, ЗВУЧНЫМ именем.",
	"Новоиспечённому коммерсанту постоянно везло, и все вокруг заговорили о его необыкновенной УДАЧЛИВОСТИ.",
	"Новый медицинский препарат стимулирует МОЗГОВОЕ кровообращение.",
	"Но я был бодр духом и ПРЕИСПОЛНЕН самых радужных надежд.",
	"Нужно стараться обращать внимание на явление в целом, а не на ЕДИНИЧНЫЕ его проявления.",
	"Обширные территории Сибири и Дальнего Востока расположены в зоне ВЕЧНОЙ мерзлоты.",
	"Огромный ВРАЖДЕБНЫЙ мир, пугающий своей неизвестностью, осваивается ребёнком шаг за шагом.",
	"Одиночный альпинизм – РИСКОВАННОЕ занятие.",
	"Окончив сбор лекарственных трав, не забудьте тщательно ОТРЯХНУТЬ одежду и вымыть руки с мылом.",
	"Он был СКРЫТНЫМ человеком и никому не доверял своих секретов.",
	"Она установила ЖЕСТКИЙ контроль за расходом электричества.",
	"Опытные садоводы считают, что правильно выращенная ЖИВАЯ изгородь намного долговечнее и надёжнее самых крепких заборов.",
	"Ответ был составлен в ДИПЛОМАТИЧНЫХ выражениях.",
	"Очень скоро ПОДТВЕРДИЛИСЬ худшие мои опасения.",
	"Очередное ВОИНСКОЕ звание мой дед получил уже на войне.",
	"ПАМЯТНЫЕ дни устанавливаются в честь значительных событий в мировой истории или истории России.",
	"ПРЕДОСТАВЬТЕ мне возможность самостоятельно подготовиться к собеседованию.",
	"Патриотизм и верность ВОИНСКОМУ долгу – главные качества защитника Отечества.",
	"Первые КАМЕННЫЕ орудия были изготовлены человеком много веков назад.",
	"Перед тем как использовать суспензию для ингаляции, контейнер необходимо ВСТРЯХНУТЬ лёгким вращательным движением.",
	"Перед усталыми путниками по-прежнему расстилалась НЕОГЛЯДНАЯ даль.",
	"По мнению многих психологов, ЕДИНСТВЕННЫЙ ребенок в семье чаще всего чувствует себя одиноким и плохо адаптируется в обществе.",
	"По мнению Толстого, исторический роман должен ОХВАТЫВАТЬ общий ход событий, проникая в глубины их внутреннего смысла.",
	"Попадая в ЗАТРУДНИТЕЛЬНОЕ положение, каждый из нас действует обычно в соответствии со своим характером.",
	"Посадка ЖИВОЙ изгороди — одно из лучших решений проблемы ограждения сада, которое предлагает ландшафтное проектирование.",
	"Потенциальные инвесторы продолжают ВЫЖИДАТЬ подходящего момента для вложений денежных средств, оценивая наиболее перспективные направления инвестиций.",
	"Поторопитесь приобрести АБОНЕМЕНТЫ Воронежской филармонии на новый концертный сезон, чтобы насладиться встречами с талантливыми российскими и зарубежными артистами.",
	"Под ЗАТРУДНЕННЫМ дыханием подразумевается неприятное ощущение сложности выполнения вдоха или выдоха.",
	"После стольких дней и ночей, проведённых в БЕСПЛОДНЫХ поисках пропавшей экспедиции, все члены спасательной группы чувствовали смертельную усталость.",
	"После того как отправленное АДРЕСАНТОМ заказное письмо достигнет адресата, отправитель получит уведомление о вручении.",
	"После того как рой полностью привьётся, под собравшийся клуб подводят роевню и в неё СТРЯХИВАЮТ основную массу пчёл.",
	"Правильная и своевременная КОРНЕВАЯ подкормка растений является гарантией высокого урожая.",
	"Предлагаемый студентам дополнительный курс лекций позволит им ВОСПОЛНИТЬ пробелы в знаниях.",
	"При раскатывании теста необходимо периодически СТРЯХИВАТЬ лишнюю муку со скалки.",
	"Приятель моего соседа изобретательный и ДЕЛОВИТЫЙ, он никогда не бывает без дела сам и не позволяет скучать окружающим",
	"Приятель посмеивался над моей ИНТЕЛЛИГЕНТСКОЙ мягкотелостью и призывал к решительным действиям.",
	"Проблема ЭКОНОМИЧЕСКОГО роста и его темпов – одна из важнейших в макроэкономике.",
	"Просветители XVIII века считали, что права и обязанности гражданина должны быть ЕДИНЫМИ для всех.",
	"Простите, как вы попали на этот завод? Вы КОМАНДИРОВАННЫЙ?",
	"Прошедший год был отмечен ВПЕЧАТЛЯЮЩИМИ событиями в культурной жизни страны.",
	"Пушистый снег ОДЕЛ в серебристые наряды вековые сосны, устремившие свои вечнозелёные вершины в чистое небо.",
	"РЕЗЮМИРОВАТЬ — кратко обобщить.",
	"Работа с денежной НАЛИЧНОСТЬЮ — вопрос серьёзный для каждого предприятия.",
	"Работы, ПРЕДСТАВЛЕННЫЕ на выставке, были оценены критиками по достоинству.",
	"Ранимый, ВПЕЧАТЛИТЕЛЬНЫЙ ребёнок тяжело переносит неудачи в играх, поражения в соревнованиях, и, попадая в такие ситуации, он долго плачет и сердится.",
	"Ришелье выбрал КАРДИНАЛЬНЫЙ способ решения проблемы.",
	"Роза Львовна поднялась с кресел и ЦАРСТВЕННОЙ походкой направилась к двери.",
	"Ромен Роллан, близко знавший Фритьофа Нансена, назвал его ЕДИНСТВЕННЫМ европейским героем своего времени.",
	"Российские дипломаты должны принимать ДЕЙСТВЕННЫЕ меры по защите интересов наших соотечественников за рубежом.",
	"Руки истончились и ПОХОДИЛИ на прутики.",
	"Русская армия должна была встретиться с ПРЕВОСХОДЯЩИМИ её в четыре раза войсками Наполеона.",
	"СЫТНЫЙ тётушкин суп понравился всем детям.",
	"СЫТОЕ брюхо к ученью глухо.",
	"СЫТЫЙ волк смирнее завистливого человека.",
	"СЫТЫЙ голодного не разумеет.",
	"Самыми ГУМАННЫМИ профессиями на земле являются те, от которых зависит духовная жизнь и здоровье человека.",
	"Самыми ГУМАННЫМИ профессиями на земле являются те, от которых зависит духовная жизнь и физическое здоровье человека.",
	"Сдвигая вековые камни, обрушились вниз ДОЖДЕВЫЕ потоки.",
	"Система ПРАКТИЧЕСКИХ занятий широко распространена в высшей школе.",
	"Слова Рудина – это не более чем слова и никогда не станут ПОСТУПКАМИ.",
	"Со временем ВОДНАЯ поверхность озера становится зеленоватой или красноватой: в ней поселяются мириады клеток микроводорослей.",
	"Со мною в гостинице жил КОМАНДИРОВАННЫЙ — приятный человек с рыжей бородой.",
	"Соль и спички на кухонной полке были объявлены НЕПРИКОСНОВЕННЫМ запасом, а значит, пользоваться этим хозяйским добром мне воспрещалось.",
	"Составленный руководителем проекта план в процессе его разработки ПРЕТЕРПЕЛ большие изменения.",
	"Среди ВЕЧНЫХ человеческих ценностей наиболее важной для него была честность.",
	"Среди ДОВЕРЧИВЫХ людей нередко встречаются те, кто поплатился за свою доверчивость.",
	"Старинный КАМЕННЫЙ особняк был фамильной гордостью этой семьи.",
	"Статья оказалась полезной и ИНФОРМАТИВНОЙ.",
	"Стрекочут кузнечики, НЕСТЕРПИМЫЙ зной стоит над лугом.",
	"Существует много возможностей отрешиться от повседневных забот,СТРЯХНУТЬ с плеч груз накопившейся усталости, но, пожалуй, самая действенная из них — встреча со старыми друзьями.",
	"Судьбе великого математика Джона Нэша посвящен фильм «Игры разума», основанный на ФАКТАХ биографии учёного.",
	"Твоя сестра очень АКТИВНАЯ, она никогда не сидит без дела.",
	"Территорию, находящуюся под местом кладки карниза, в целях безопасности необходимо ОГОРОДИТЬ.",
	"Туристическая фирма обязана ПРЕДОСТАВИТЬ потребителю информацию о своей государственной регистрации и наименовании зарегистрировавшего её органа.",
	"УДАЧНЫЙ ход принес победу юному шахматисту.",
	"Уже не в первый раз российская женская сборная по баскетболу одерживает ВПЕЧАТЛЯЮЩУЮ победу над командой соперниц.",
	"Управление ОБОРОТНЫМ капиталом направлено на обеспечение непрерывной деятельности предприятия.",
	"Усадьба была окружена высокой КАМЕННОЙ оградой.",
	"Участие в командных играх и других интересных спортивных мероприятиях дарит нам ЖИВИТЕЛЬНЫЙ заряд бодрости.",
	"Участие в ОТБОРОЧНОМ турнире принесло шахматисту убедительную победу.",
	"Участнику деловой или туристической поездки в США для оформления визы необходимо ПРЕДСТАВИТЬ пакет соответствующих документов.",
	"Фабрика не может класть на депозит ОБОРОТНЫЕ средства.",
	"Хакеры часто обманывают ДОВЕРЧИВЫХ пользователей, убеждая их отправить якобы бесплатное СМС-сообщение.",//
	"Хозяин, не желая показаться НЕВЕЖЕЙ, поспешно вышел из гостиной и первым протянул необычному гостю руку для крепкого рукопожатия.",
	"Хозяин ПРЕДСТАВИЛ гостям вошедшего молодого человека.",
	"Часть комнаты было решено ОТГОРОДИТЬ шифоньером.",
	"Человек он был ЗЛОЙ: ему непременно нужно было кого-то мучить.",
	"Чем больше мы узнаём о ЖИВОЙ природе, тем больше мы познаём самих себя.",
	"Чтобы побеждать в СЛОВЕСНЫХ баталиях, нужно прекрасно владеть родным языком и иметь острый ум.",
	"Чтобы получить ЖИВИТЕЛЬНЫЙ заряд положительной энергии, посмотрите цирковое представление или посетите дельфинарий.",
	"Чтобы человеку, владеющему иностранным языком, научиться свободно общаться с носителями этого языка, ему необходимо преодолеть ЯЗЫКОВОЙ барьер.",
	"Шутки Коли казались нам подчас ОБИДНЫМИ.",
	"ЭФФЕКТИВНЫЙ метод лечения заболеваний верхних дыхательных путей – ингаляция.",
	"Это было очень ПАМЯТНОЕ событие для всей семьи.",
	"Это было существо ДОВЕРЧИВОЕ, робкое и слабое.",
	"Этот ПАМЯТНЫЙ разговор повлиял на мою судьбу.",
	"Этот выдающийся учёный-физик считал себя полным НЕВЕЖДОЙ в литературе.",
	"Этот дом ПРЕДСТАВЛЯЕТ собой историческую ценность.",
	"Этот случай оказался далеко не ЕДИНИЧНЫМ, и почти ежегодно он повторяется.",
	"Я часто вспоминаю Лёшины печальные КАРИЕ глаза.",
];//Лучше их располагать по алфавиту

var nev=[//Список (на самом деле массив) неправильных словосочетаний
	"Анастасия распахнула окно, и комната наполнилась ЖИВУЧИМ дыханием соснового бора.",
	"Археологи исследуют безмолвные руины, таинственные клады, загадочные ОСТАНКИ древних вещей.",
	"В доме Карамзиных бывают поэты, литераторы, музыканты, ДИПЛОМАНТЫ, знатные вельможи, великосветские красавицы.",
	"В Охотском море завершилась СПАСИТЕЛЬНАЯ операция МЧС по выводу судов из ледового плена.",
	"В июле стояла жара, и, когда по зелёной листве сначала медленно и неуверенно, а затем всё настойчивей застучали капли ЖИВУЧЕЙ влаги, вся природа встрепенулась и потянулась навстречу дождю.",
	"В конце мая на экскурсиях в ботаническом саду, рассчитанных на специалистов в области цветоводства, вниманию посетителей будет ПРЕДОСТАВЛЕНА коллекция древовидных пионов.",
	"В музыкальном салоне был представлен огромный ОТБОР дисков с записями известных исполнителей и начинающих певцов.",
	"В наступлении солдатам редко достается СЫТЫЙ обед.",
	"В недавно обнародованном документе это небольшое островное государство угрожало своим соседям разрывом ДИПЛОМАТИЧНЫХ отношений.",
	"В офис юриста каждый клиент приходит со своей проблемой, и внимательный приём и ДОВЕРЧИВАЯ беседа являются залогом установления прочных деловых отношений.",
	"Вам стоит обратить внимание на работу цеха в целом, а не на ЕДИНСТВЕННЫЕ случаи производственных сбоев.",
	"Введение новых требований поставит разработчиков нового проекта в ЗАТРУДНЁННОЕ положение.",
	"Во время переговоров участниками встречи обсуждены ГУМАННЫЕ вопросы.",
	"Вопреки распространённому мнению, ПРИСВОИТЬ работу в операционной системе Linux под силу даже начинающему пользователю.",//
	"ВРАЖДЕБНАЯ оборона была сломлена, и войска вошли в город.",
	"Высокая, стройная, грациозная и ВЕЛИКАЯ, Елена держалась всегда необыкновенно прямо, и это придавало ей царственный вид.",
	"Гость осведомился у хозяина о НАЛИЧНОСТИ свободных номеров в гостинице.",
	"Густые заросли кустарника чередовались с ВЕЧНЫМИ дубовыми рощами и берёзовыми лесочками.",
	"Дефицит кальция в организме помогут ПОПОЛНИТЬ прежде всего такие продукты, как молоко, творог, сыр.",
	"День обещал быть ветреным и ДОЖДЕВЫМ.",
	"Диетологи советуют включать в рацион морскую капусту, или ламинарию, чтобы ПОПОЛНИТЬ недостаток йода в организме, а кроме того, ламинарию можно использовать как средство ухода за кожей лица и тела.",
	"Диетолог выписал пациенту ряд гомеопатических препаратов и помог подобрать ЭФФЕКТНУЮ диету.",
	"Дмитрий оставался самым весёлым, а точнее, ЕДИНИЧНЫМ человеком в группе, который без конца шутил.",
	"До глубокой старости он оставался таким же словоохотливым, ПАМЯТНЫМ и энергичным. ",
	"Жак-Ив Кусто - ЗАЧИНЩИК подводных исследований и киносъемок, ",
	"Железо, хром, марганец, медь и никель являются КРАСОЧНЫМИ веществами, компонентами многих красок, созданных на основе этих минералов.",
	"За месяцы болезни мое лицо приобрело характерный ЗЕМЛЯНОЙ цвет.",
	"Мы кормили наших птиц ОТБОРОЧНЫМ зерном.",
	"Игрушка — одно из ярких проявлений массовой культуры, глубоко жизненное и ДЕМОКРАТИЧЕСКОЕ.",
	"Изучая цикл стихотворений, обратите особое внимание на образ ЛИРИЧНОГО героя.",
	"Из-за СКРЫТОГО характера одноклассника мы нескоро узнали, как трудно ему живется.",
	"Имейте в виду, что ЗЛЫЕ браконьеры являются уголовными преступниками и будут непременно наказаны.",
	"Информацию о НАЛИЧНОСТИ мест на поезд дальнего следования и стоимости железнодорожных билетов можно узнать не ранее, чем за 45 суток до даты его отправления.",
	"Информация о расписании авиарейсов, НАЛИЧНОСТИ мест на самолёт и стоимости авиабилетов является актуальной на момент запроса этой информации на указанном в рекламном проспекте сайте.",
	"Используя специальные термометры, океанологи производят измерения на различных глубинах океана по всей его ВОДЯНОЙ поверхности.",
	"К негативным ЭКОЛОГИЧНЫМ факторам относятся химическое загрязнение воды и уничтожение зелёных насаждений.",
	"Кавалеры этого ордена по уставу должны иметь ВОЕННОЕ звание не ниже генеральского.",
	"Книга ПРЕДОСТАВЛЯЕТ историю космонавтики как остросюжетную повесть о реальных событиях с невымышленными действующими лицами.",
	"КОМАНДИРОВАННОЕ удостоверение инженер положил на стол.",
	"Комната выполняла ДВОЙСТВЕННОЕ назначение: она являлась одновременно и гостиной, и спальней.",
	"Летом в ЛЕСИСТОЙ чащобе появляются полчища комаров.",
	"М. Горький советовал критикам обращать внимание на литературу в целом, а не на ЕДИНЫЕ явления её.",
	"Марина Васильевна очень взволновалась, но всё-таки прислушалась к мудрой и ПРАКТИЧЕСКОЙ своей приятельнице.",
	"Метеорологи не имеют возможности заранее с достоверностью прогнозировать наступление погодных аномалий, но учёные не исключают, что в дальнейшем нашу планету ВЫЖИДАЮТ резкие колебания погоды.",
	"Министерство активно разрабатывает план ЭКОНОМИЧНОГО развития государства.",
	"Многократные пересадки могут перенести только самые ЖИВЫЕ растения.",
	"Моё воображение рисовало мне, что я потомок древнего АРИСТОКРАТИЧНОГО рода, жившего в древнем средневековом замке.",
	"На выставке широко ПРЕДОСТАВЛЕНЫ разнообразные изделия и ма¬териалы для оформления домашнего интерьера.",
	"На краю города сохранился старый ЯБЛОЧНЫЙ сад с раскидистыми деревьями.",
	"На карнавал Вася ОДЕЛ костюм пирата.",
	"Наступило ДЛИННОЕ молчание, прерываемое лишь пощёлкиванием приборов.",
	"Наибольшее непонимание московских АБОНЕМЕНТОВ вызывает необходимость вносить абонентскую плату за пользование линией.",
	"Не так легко было найти выход из ЗАТРУДНЁННОГО положения, в котором мы все оказались.",
	"Невозможно ОБХВАТИТЬ взглядом просторы полей, расстилающиеся вдали.",
	"Незнакомец подарил мне букетик лиловых цветов с ВОДНЫМИ стеблями.",
	"Нужно следить за тем, чтобы дети не играли со ВЗРЫВНЫМИ предметами.",
	"Нужны сведения о НАЛИЧНОСТИ в фондах библиотеки новых поступлений.",
	"Одна из ветвей государственной власти — ИСПОЛНИТЕЛЬСКАЯ.",
	"Оказавшись в глухой псковской деревне, Пушкин постоянно ездит в СОСЕДСКОЕ Тригорское.",
	"Он объяснял сложные явления просто и ПОНЯТЛИВО, что очень нравилось его многочисленным ученикам.",
	"Он постоянно нарушал ДИПЛОМАТИЧНЫЙ этикет, разговаривая с послами без учета требований речевого поведения.",
	"Отношения между начальником и его подчинённым постепенно приобрели более ДОВЕРЧИВЫЙ характер.",
	"ПРЕСЛОВУТЫЙ — широко известный, заслуживающий положительной оценки",
	"Переселенцам в этих краях приходилось очень туго: КАМЕННАЯ почва с трудом поддавалась обработке.",
	"Письма показались графине саркастичными, слишком ОБИДЧИВЫМИ, и она уничтожила их.",
	"Плесень – распространённое ГРИБНОЕ заболевание озимых посевов.",
	"По мнению преподавателей, ЯЗЫКОВЫЙ барьер — это то, что чаще всего мешает взрослому человеку успешно овладевать иностранным языком.",
	"Попандопуло был ОБОРОТНЫМ дельцом с сомнительной репутацией.",
	"По требованию акционера, аудитора или любого заинтересованного лица акционерное общество обязано в разумные сроки ПРЕДСТАВИТЬ им возможность ознакомиться с уставом общества, включая изменения и дополнения к нему.",
	"После бури на море установилось СРАВНИМОЕ затишье.",
	"После мокрого снегопада необходимо ОТРЯХНУТЬ снег с ветвей деревьев, чтобы они не поломались.",
	"После обсуждения радостной новости вся компания пребывала в ИГРИСТОМ настроении, поэтому подготовку к экзамену было единодушно решено перенести на следующий день.",
	"После одного случая моего соседа перестали называть этим ОБИДЧИВЫМ прозвищем.",
	"Работодатель обязан ПРЕДСТАВИТЬ оплачиваемый учебный отпуск работнику, который учится в аспирантуре (адъюнктуре) заочно.",
	"Роясь на чердаке, дети обнаружили КОМАНДИРОВАННЫЕ удостоверения писателя, его дневниковые записи и передали находки в литературный архив.",
	"Родители должны помнить о том, что хороший ЯЗЫКОВЫЙ детский лагерь может находиться не только в Лондоне.",
	"Розовый, багряный и кирпичный цвета являются оттенками красного, но их ЦВЕТНОЙ тон различается по насыщенности и освещённости.",
	"Русский морской офицер Н.&nbsp;Н.&nbsp;Апостоли, известный конструктор фотокамер конца XIX&nbsp;— начала XX веков, по праву считается ЗАЧИНЩИКОМ корабельной фотографии.",
	"Русский язык — это громаднейшее богатство, которое ПРЕДСТАВЛЯЕТ нам необычайные возможности.",
	"СЛОВАРНЫЙ портрет должен быть составлен так, чтобы любой без труда узнал по нему человека, которому он принадлежит.",
	"Сено в стогу — СЫТЫЙ корм скоту.",
	"Система контроля в дальнейшем может ПЕРЕТЕРПЕТЬ значительные изменения.",
	"Соскочив с постели одновременно со звонком будильника, Антон быстро ОДЕЛ спортивный костюм и кроссовки и уже через минуту бежал вниз по лестнице, бодро насвистывая какой-то марш.",
	"Стоунхендж, загадочное сооружение древности, находящееся в Южной Англии, считается астрономами самой СТАРШЕЙ обсерваторией Европы.",
	"Стремясь доставить неприятности другому, ЗЛОСТНЫЙ человек прежде всего вредит самому себе.",
	"Хакеры часто обманывают ДОВЕРИТЕЛЬНЫХ пользователей, убеждая их отправить якобы бесплатное СМС-сообщение.",
	"Человек, искренне любящий свою страну, не позволит, чтобы в его присутствии УНИЖАЛИ заслуги отечественных учёных, новаторов и изобретателей.",
	"Чтобы приготовить маринад для рыбы, запечённой в углях, нужно СТРЯХНУТЬ семена из четырёх-пяти стручков кардамона, добавить щепотку шафрана и растереть их в ступке с солью.",
	"ЭКОНОМИЧНАЯ квартирная хозяйка строго отчитывала меня за не погашенный в коридоре свет.",
	"Эти развалины служат нам скорбным ВОСПОМИНАНИЕМ о событиях прошлого.",
	"Это заболевание носит СКРЫТНЫЙ характер, часто его симптомы незаметны.",
	"Это одно из известнейших произведений ВЕЛИЧЕСТВЕННОГО русского поэта.",
	"Юные футболисты ОДЕЛИ спортивную форму и под ободряющие возгласы болельщиков выбежали на поле.",
];//Внимание: после последнего элемента тоже ставится запятая. Её можно и не ставить, но так удобнее.

window.vopr.ver=nev;
window.vopr.nev=ver;
AtoB();

})();

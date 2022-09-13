var categories = ['Shooter', 'Platformer', 'Horror', 'Puzzle', 'Sandbox'];

var games = [
    {
        category: 'Shooter',
        title: 'Bioshock',
        publishYear: '2007',
        developer: '2K',
        publisher: '2K',
        description: 'Действие BioShock происходит в 1960 году. Главный герой, молодой человек по имени Джек, в результате авиакатастрофы попадает в подводный город Восторг, скрытый на дне Атлантического океана. Восторг был создан миллионером Эндрю Райаном в качестве идеального, с его точки зрения, общества. Однако, открытие вещества под названием «АДАМ», дающего людям сверхчеловеческие силы, а также все более сомнительная политика Райана, установившего вопреки собственной философии в городе жестокую диктатуру, раскололо общество Восторга и в конечном счёте привело к гражданской войне и падению утопии.',
        poster: 'Images/Bioshock_poster.jpg'
    },
    {
        category: 'Shooter',
        title: 'Hotline miami',
        publishYear: '2012',
        developer: 'Dennaton',
        publisher: 'Devolver Digital',
        description: 'Игра повествует о безымянном герое, с которым происходят необычные вещи. Однажды он начинает получать сообщения на автоответчик, со странными и невинными просьбами, по типу отвезти посылку, убраться в квартире. Но приехав по адресу, герой находит толпы гангстеров, которых нужно убить. После каждого задания, он может заехать в бар, магазин, пиццерию или кинопрокат, но в любом заведении, за кассой стоит один и тот же человек, с длинными волосами и густой рыжей бородой. Герою предстоит разобраться что с ним происходит.',
        poster: 'Images/HM_poster.jpg'
    },
    {
        category: 'Shooter',
        title: 'Hotline miami 2: Wrong number',
        publishYear: '2015',
        developer: 'Dennaton',
        publisher: 'Devolver Digital',
        description: 'Собитыя второй части разворачиваются до, во время и после событий первой части. Игра рассказывает множество историй других персонажей серии, которые очень грамотно переплетаются и создают полную картину. Так же мы узнаем что случилось с героем первой части, а так же его предысторию.',
        poster: 'Images/HM2_poster.jpg'
    },
    {
        category: 'Platformer',
        title: 'Katana zero',
        publishYear: '2019',
        developer: 'Askiisoft',
        publisher: 'Devolver Digital',
        description: 'Главый герой - мечник, который превосходно владеет катаной, изящно разрубая своих врагов на мелкие куски. Еще одна особенность героя - способность предвидеть будущее, чтобы эффективнее планировать зачистку локации, а так же способность замедлять время, чтобы уклоняться или отбивать пули.',
        poster: 'Images/KZ_poster.jpg'
    },
    {
        category: 'Puzzle',
        title: 'Portal 2',
        publishYear: '2011',
        developer: 'Valve',
        publisher: 'Valve',
        description: 'Главная героиня - девушка по имени Челл, просыпается в камере долгосрочной консервации в центре развития, через 50 дней после событий первой части. Она выполняет минимальные физические упражнения для поддержания физических и умственных способностей. После выполнения инструкций диктора, она опять ложится в гибернацию. В следующий момент она просыпается через неопределенное количество времени. Неизвестно сколько точно времени прошло, но судя по внешнему виду комплекса, очень даже много. Она встречает модуль по имени Уитли, который предлагает бежать из комплекса. В ходе поиска аварийного лифта они случайно включают ГЛАДОС, которая очень зла на героиню, изза того что последняя ее убила. ГЛАДОС выкидывает Уитли, а Челл вновь помещает в испытательные камеры.',
        poster: 'Images/Portal2_poster.jpg'
    },
    {
        category: 'Horror',
        title: 'SOMA',
        publishYear: '2015',
        developer: 'Frictional Games',
        publisher: 'Frictional Games',
        description: 'Главный герой - Саймон Джаретт, обычный парень из Торронто, попадает в аварию, в которой погибает его девушка, а сам Саймон получает серьезные повреждения головного мозга, из-за которых медленно умирает. Внезапно с ним связывается ученый Дэвид Мунши, который предлагает пройти сканирование мозга, по новой технологии, которое может помочь понять, как вылечить героя. Саймон соглашается. В назначенный день он приходит в лабораторию, его подключают к аппарату сканирования. Сканирование запускается. Три... Два... Один... Саймон просыпается в темной и незнакомой комнате, вокруг ни кого. Выбравщись из комнаты, он понимает что находится совсем не в Торронто, а на подводной исследовательской базе PATHOS-II, в корпусе Эписон. Найдя пару записок, Саймон узнает, что с момента его сканирования прошло более ста лет, Сам саймон умер через месяц после сканирования, а мир полностью уничтожен падением метеорита. Из выживщих на всей планете осталось лишь 30 сотрудников станции PATHOS-II, однако в следствии некой аварии сотрудники станции так же мертвы. Герой находит выживщую ученую по имени Кэтрин. Вместе с ней ему и предстоит разобраться что тут происходит.',
        poster: 'Images/SOMA_poster.jpg'
    },
    {
        category: '',
        title: '',
        publishYear: '',
        developer: '',
        publisher: '',
        description: '',
        poster: 'Images/.jpg'
    },
    {
        category: '',
        title: '',
        publishYear: '',
        developer: '',
        publisher: '',
        description: '',
        poster: 'Images/.jpg'
    },
    {
        category: '',
        title: '',
        publishYear: '',
        developer: '',
        publisher: '',
        description: '',
        poster: 'Images/.jpg'
    },
    {
        category: '',
        title: '',
        publishYear: '',
        developer: '',
        publisher: '',
        description: '',
        poster: 'Images/.jpg'
    },
    {
        category: '',
        title: '',
        publishYear: '',
        developer: '',
        publisher: '',
        description: '',
        poster: 'Images/.jpg'
    }
];
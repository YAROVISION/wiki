// Columns data loaded from додаток_1.xlsx (РР)
const COLUMNS_DATA = [
  {
    "col_index": "1, 2",
    "col_letter": "РР_1_2",
    "category": "1. Проведено навчань, семінарів, тренінгів з питань запобігання та виявлення корупції для працівників органів Установи**:",
    "title_main": "кількість тем / кількість заходів",
    "title_sub": "Результати роботи",
    "full_title": "1. Проведено навчань, семінарів, тренінгів з питань запобігання та виявлення корупції для працівників органів Установи**: — кількість тем / кількість заходів",
    "instruction": "Вкажіть показники за звітний період:\n- кількість тем (ціле число) (кількість тем повинна відповідати кількості тем у плані);\n- кількість заходів (ціле число)."
  },
  {
    "col_index": 3,
    "col_letter": "РР_3",
    "category": "Основні заходи",
    "title_main": "2. Кількість проведених семінарів, засідань круглих столів та нарад з питань запобігання та протидії корупції",
    "title_sub": "Результати роботи",
    "full_title": "2. Кількість проведених семінарів, засідань круглих столів та нарад з питань запобігання та протидії корупції",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 4,
    "col_letter": "РР_4",
    "category": "3. Розглянуто на колегії стан протидії корупції (дата проведення)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "3. Розглянуто на колегії стан протидії корупції (дата проведення)",
    "instruction": "Вкажіть дату у форматі «ДД.ММ.РРРР»."
  },
  {
    "col_index": 5,
    "col_letter": "РР_5",
    "category": "4. Опубліковано матеріалів, роз`яснень, коментарів антикорупційної спрямованості у друкованих засобах масової інформації (кількість)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "4. Опубліковано матеріалів, роз`яснень, коментарів антикорупційної спрямованості у друкованих засобах масової інформації (кількість)",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": "6, 7, 8, 9",
    "col_letter": "РР_6_9",
    "category": "5. Отримано повідомлень від викривачів:",
    "title_main": "а) усних (отриманих під час особистого прийому громадян (працівників органів Установи) та через окрему телефонну лінію):\n- анонімних (кількість)\n- не анонімних (кількість)\n\nб) письмових (отриманих поштовим відправленням, електронною поштою Установи або через вебпортал Установи (розділ \"Повідомити про корупцію\"), під час особистого прийому громадян або працівників органів Установи):\n- анонімних (кількість)\n- не анонімних (кількість)",
    "title_sub": "Результати роботи",
    "full_title": "5. Отримано повідомлень від викривачів",
    "instruction": "Вкажіть показники за звітний період:\n- анонімних усних повідомлень (ціле число);\n- не анонімних усних повідомлень (ціле число);\n- анонімних письмових повідомлень (ціле число);\n- не анонімних письмових повідомлень (ціле число)."
  },
  {
    "col_index": "10, 11, 12, 13",
    "col_letter": "РР_10_13",
    "category": "6. Розглянуто повідомлень, отриманих від викривачів:",
    "title_main": "а) усних (отриманих під час особистого прийому громадян (працівників органів Установи) та через окрему телефонну лінію):\n- анонімних (кількість)\n- не анонімних (кількість)\n\nб) письмових (отриманих поштовим відправленням, електронною поштою Установи або через вебпортал Установи (розділ \"Повідомити про корупцію\"), під час особистого прийому громадян або працівників органів Установи):\n- анонімних (кількість)\n- не анонімних (кількість)",
    "title_sub": "Результати роботи",
    "full_title": "6. Розглянуто повідомлень, отриманих від викривачів",
    "instruction": "Вкажіть показники за звітний період:\n- анонімних усних повідомлень (ціле число);\n- не анонімних усних повідомлень (ціле число);\n- анонімних письмових повідомлень (ціле число);\n- не анонімних письмових повідомлень (ціле число)."
  },
  {
    "col_index": "14, 15, 16, 17",
    "col_letter": "РР_14_17",
    "category": "7. Кількість повідомлень (звернень) викривачів, під час перевірки яких підтверджено ознаки корупційного або пов’язаного з корупцією правопорушення (іншого порушення Закону***):",
    "title_main": "а) усних (отриманих під час особистого прийому громадян (працівників органів Установи) та через окрему телефонну лінію):\n- анонімних (кількість)\n- не анонімних (кількість)\n\nб) письмових (отриманих поштовим відправленням, електронною поштою Установи або через вебпортал Установи (розділ \"Повідомити про корупцію\"), під час особистого прийому громадян або працівників органів Установи):\n- анонімних (кількість)\n- не анонімних (кількість)",
    "title_sub": "Результати роботи",
    "full_title": "7. Кількість повідомлень (звернень) викривачів, під час перевірки яких підтверджено ознаки корупційного або пов’язаного з корупцією правопорушення",
    "instruction": "Вкажіть показники за звітний період:\n- анонімних усних повідомлень (ціле число);\n- не анонімних усних повідомлень (ціле число);\n- анонімних письмових повідомлень (ціле число);\n- не анонімних письмових повідомлень (ціле число)."
  },
  {
    "col_index": 18,
    "col_letter": "РР_18",
    "category": "8. Кількість встановлених фактів несвоєчасного подання декларації особи, уповноваженої на виконання функцій держави (далі - декларація)****",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "8. Кількість встановлених фактів несвоєчасного подання декларації особи, уповноваженої на виконання функцій держави (далі - декларація)****",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": "19, 20, 21",
    "col_letter": "РР_19_21",
    "category": "9. Кількість повідомлень, направлених до НАЗК, про несвоєчасне подання:****",
    "title_main": "- декларації типу «щорічна» (з позначкою «я продовжую виконувати функції держави або органу місцевого самоврядування»)\n- декларації суб`єкта декларування, який припиняє діяльність, пов’язану з виконанням функцій держави\n- декларації типу «щорічна» (з позначкою «я припинив(ла) виконувати функції держави або органу місцевого самоврядування (після звільнення))",
    "title_sub": "Результати роботи",
    "full_title": "9. Кількість повідомлень, направлених до НАЗК, про несвоєчасне подання:****",
    "instruction": "Вкажіть показники за звітний період:\n- кількість повідомлень про несвоєчасне подання щорічної декларації (ціле число);\n- кількість повідомлень про несвоєчасне подання перед звільненням (ціле число);\n- кількість повідомлень про несвоєчасне подання після звільнення (ціле число)."
  },
  {
    "col_index": 22,
    "col_letter": "РР_22",
    "category": "10. Кількість встановлених фактів неподання декларацій особи, уповноваженої на виконання функцій держави****",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "10. Кількість встановлених фактів неподання декларацій особи, уповноваженої на виконання функцій держави****",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": "23, 24, 25",
    "col_letter": "РР_23_25",
    "category": "11. Кількість повідомлень, направлених до НАЗК, про неподання:****",
    "title_main": "- декларації типу «щорічна» (з позначкою «я продовжую виконувати функції держави або органу місцевого самоврядування»)\n- декларації суб`єкта декларування, який припиняє діяльність, пов’язану з виконанням функцій держави\n- декларації типу «щорічна» (з позначкою «я припинив(ла) виконувати функції держави або органу місцевого самоврядування (після звільнення))",
    "title_sub": "Результати роботи",
    "full_title": "11. Кількість повідомлень, направлених до НАЗК, про неподання:****",
    "instruction": "Вкажіть показники за звітний період:\n- кількість повідомлень про неподання щорічної декларації (ціле число);\n- кількість повідомлень про неподання перед звільненням (ціле число);\n- кількість повідомлень про неподання після звільнення (ціле число)."
  },
  {
    "col_index": 26,
    "col_letter": "РР_26",
    "category": "12. Кількість службових розслідувань, проведених з метою встановлення причин та умов, що призвели до вчинення корупційного або пов’язаного з корупцією правопорушення, невиконання вимог Закону в інший спосіб",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "12. Кількість службових розслідувань, проведених з метою встановлення причин та умов, що призвели до вчинення корупційного або пов’язаного з корупцією правопорушення, невиконання вимог Закону в інший спосіб",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 27,
    "col_letter": "РР_27",
    "category": "13. Участь у проведенні внутрішнього аудиту ССП Головного управління та територіальних органів Установи регіону",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "13. Участь у проведенні внутрішнього аудиту ССП Головного управління та територіальних органів Установи регіону",
    "instruction": "Вкажіть відповідні показники за звітний період згідно з підтвердними документами."
  },
  {
    "col_index": 28,
    "col_letter": "РР_28",
    "category": "14. Участь у розгляді проєктів наказів, що видавались органом Установи (кількість)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "14. Участь у розгляді проєктів наказів, що видавались органом Установи (кількість)",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 29,
    "col_letter": "РР_29",
    "category": "15. Кількість проєктів наказів органу Установи, в яких усунуто корупційні ризики",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "15. Кількість проєктів наказів органу Установи, в яких усунуто корупційні ризики",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 30,
    "col_letter": "РР_30",
    "category": "16. Кількість проведених (спільно з підрозділами персоналу) спеціальних перевірок стосовно осіб, які претендують на зайняття посад, які передбачають зайняття відповідального або особливо відповідального становища, а також посад з підвищеним корупційним ризиком*****",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "16. Кількість проведених (спільно з підрозділами персоналу) спеціальних перевірок стосовно осіб, які претендують на зайняття посад, які передбачають зайняття відповідального або особливо відповідального становища, а також посад з підвищеним корупційним ризиком*****",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 31,
    "col_letter": "РР_31",
    "category": "17. Кількість матеріалів (повідомлень), направлених до правоохоронних органів, про встановлені факти вчинення кримінального або адміністративного правопорушення посадовими та службовими особами органів Установи (крім повідомлень про порушення Закону, пов’язаних з е-декларуванням)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "17. Кількість матеріалів (повідомлень), направлених до правоохоронних органів, про встановлені факти вчинення кримінального або адміністративного правопорушення посадовими та службовими особами органів Установи (крім повідомлень про порушення Закону, пов’язаних з е-декларуванням)",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 32,
    "col_letter": "РР_32",
    "category": "18. Кількість матеріалів, направлених до правоохоронних органів, про факти вчинення посадовими особами Установи кримінального або адміністративного правопорушення, зібраних за результатами перевірки повідомлень викривачів",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "18. Кількість матеріалів, направлених до правоохоронних органів, про факти вчинення посадовими особами Установи кримінального або адміністративного правопорушення, зібраних за результатами перевірки повідомлень викривачів",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": "33, 34, 35",
    "col_letter": "РР_33_35",
    "category": "19. Кількість осіб, притягнутих до відповідальності за пов’язані з корупцією правопорушення (порушення вимог фінансового контролю)",
    "title_main": "- кримінальної\n- адміністративної\n- дисциплінарної",
    "title_sub": "Результати роботи",
    "full_title": "19. Кількість осіб, притягнутих до відповідальності за пов’язані з корупцією правопорушення (порушення вимог фінансового контролю)",
    "instruction": "Вкажіть показники за звітний період:\n- кількість осіб, притягнутих до кримінальної відповідальності (ціле число);\n- кількість осіб, притягнутих до адміністративної відповідальності (ціле число);\n- кількість осіб, притягнутих до дисциплінарної відповідальності (ціле число)."
  },
  {
    "col_index": "36, 37, 38",
    "col_letter": "РР_36_38",
    "category": "20. Кількість осіб притягнутих до відповідальності за корупційні або пов’язані з корупцією правопорушення (крім порушень вимог фінансового контролю)",
    "title_main": "- кримінальної\n- адміністративної\n- дисциплінарної",
    "title_sub": "Результати роботи",
    "full_title": "20. Кількість осіб притягнутих до відповідальності за корупційні або пов’язані з корупцією правопорушення (крім порушень вимог фінансового контролю)",
    "instruction": "Вкажіть показники за звітний період:\n- кількість осіб, притягнутих до кримінальної відповідальності (ціле число);\n- кількість осіб, притягнутих до адміністративної відповідальності (ціле число);\n- кількість осіб, притягнутих до дисциплінарної відповідальності (ціле число)."
  },
  {
    "col_index": 39,
    "col_letter": "РР_39",
    "category": "21. Кількість зафіксованих фактів надходження пропозицій щодо неправомірної вигоди або подарунків (повідомлення здійснені працівниками органів Установи)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "21. Кількість зафіксованих фактів надходження пропозицій щодо неправомірної вигоди або подарунків (повідомлення здійснені працівниками органів Установи)",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 40,
    "col_letter": "РР_40",
    "category": "22. Кількість складених актів про виявлення майна, що може бути неправомірною вигодою або подарунком (частина друга статті 24 Закону)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "22. Кількість складених актів про виявлення майна, що може бути неправомірною вигодою або подарунком (частина друга статті 24 Закону)",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": "41, 42, 43",
    "col_letter": "РР_41_43",
    "category": "23. Кількість фактів прямого підпорядкування між працюючими в органі близькими особами, встановлених:",
    "title_main": "- уповноваженою особою\n- особисто посадовими та службовими особами, в яких виникла ситуація \"прямого підпорядкування\"\n- іншими особами",
    "title_sub": "Результати роботи",
    "full_title": "23. Кількість фактів прямого підпорядкування між працюючими в органі близькими особами, встановлених:",
    "instruction": "Вкажіть показники за звітний період:\n- кількість фактів, встановлених уповноваженою особою (ціле число);\n- кількість встановлених особисто посадовими та службовими особами (ціле число);\n- кількість встановлених іншими особами (ціле число)."
  },
  {
    "col_index": "44, 45, 46, 47",
    "col_letter": "РР_44_47",
    "category": "24. Вжиті заходи для усунення випадків прямого підпорядкування між працюючими в органі близькими особами шляхом (кількість):",
    "title_main": "- самостійного вжиття заходів щодо усунення обставин прямого підпорядкування\n- переведення у встановленому порядку на іншу посаду, що виключає пряме підпорядкування\n- звільнення із займаної посади близької особи, яка перебувала у підпорядкуванні\n- вжиттям інших заходів",
    "title_sub": "Результати роботи",
    "full_title": "24. Вжиті заходи для усунення випадків прямого підпорядкування між працюючими в органі близькими особами шляхом (кількість):",
    "instruction": "Вкажіть показники за звітний період:\n- кількість випадків самостійного вжиття заходів (ціле число);\n- кількість випадків переведення на іншу посаду (ціле число);\n- кількість випадків звільнення близької особи (ціле число);\n- кількість випадків вжиття інших заходів (ціле число)."
  },
  {
    "col_index": 48,
    "col_letter": "РР_48",
    "category": "25. Кількість повідомлень про конфлікт інтересів, які надійшли керівництву територіальних органів (підрозділів територіальних органів) Установи від підлеглих працівників (стаття 28 Закону)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "25. Кількість повідомлень про конфлікт інтересів, які надійшли керівництву територіальних органів (підрозділів територіальних органів) Установи від підлеглих працівників (стаття 28 Закону)",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 49,
    "col_letter": "РР_49",
    "category": "26. Кількість виявлених уповноваженою особою випадків конфлікту інтересів",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "26. Кількість виявлених уповноваженою особою випадків конфлікту інтересів",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": "50, 51, 52, 53, 54, 55",
    "col_letter": "РР_50_55",
    "category": "27. Вжиті заходи для усунення випадків конфлікту інтересів (кількість) відповідно до вимог частини першої статті 29 Закону:",
    "title_main": "- усунення особи від виконання завдання, вчинення дій, прийняття рішення чи участі в його прийнятті в умовах реального чи потенційного конфлікту інтересів\n- застосування зовнішнього контролю за виконанням особою відповідального завдання, вчиненням нею певних дій чи прийняттям рішень\n- обмеження доступу особи до певної інформації\n- перегляд обсягу службових повноважень особи\n- переведення особи на іншу посаду\n- звільнення особи",
    "title_sub": "Результати роботи",
    "full_title": "27. Вжиті заходи для усунення випадків конфлікту інтересів (кількість) відповідно до вимог частини першої статті 29 Закону:",
    "instruction": "Вкажіть показники за звітний період:\n- усунення особи від виконання завдання (ціле число);\n- застосування зовнішнього контролю (ціле число);\n- обмеження доступу до інформації (ціле число);\n- перегляд службових повноважень (ціле число);\n- переведення на іншу посаду (ціле число);\n- звільнення особи (ціле число)."
  },
  {
    "col_index": 56,
    "col_letter": "РР_56",
    "category": "28. Кількість випадків самостійного вжиття заходів щодо врегулювання конфлікту інтересів шляхом позбавлення відповідного приватного інтересу (частина друга статті 29 Закону)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "28. Кількість випадків самостійного вжиття заходів щодо врегулювання конфлікту інтересів шляхом позбавлення відповідного приватного інтересу (частина друга статті 29 Закону)",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 57,
    "col_letter": "РР_57",
    "category": "29. Кількість виявлених уповноваженою особою випадків порушення правил етичної поведінки (розділ VІ Закону)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "29. Кількість виявлених уповноваженою особою випадків порушення правил етичної поведінки (розділ VІ Закону)",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 58,
    "col_letter": "РР_58",
    "category": "30. Кількість опрацьованих пакетів документів, поданих претендентом на посаду державної служби під час призначення без конкурсного відбору (на період воєнного стану в Україні)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "30. Кількість опрацьованих пакетів документів, поданих претендентом на посаду державної служби під час призначення без конкурсного відбору (на період воєнного стану в Україні)",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 59,
    "col_letter": "РР_59",
    "category": "31. Кількість проведених перевірок контрагентів органів Установи під час проведення публічних закупівель",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "31. Кількість проведених перевірок контрагентів органів Установи під час проведення публічних закупівель",
    "instruction": "Вкажіть загальну кількість (ціле число) за звітний період."
  },
  {
    "col_index": 60,
    "col_letter": "РР_60",
    "category": "32. Наявність вакансії головного спеціаліста з питань запобігання та виявлення корупції у Головному управлінні Установи (так/ні)",
    "title_main": "",
    "title_sub": "Результати роботи",
    "full_title": "32. Наявність вакансії головного спеціаліста з питань запобігання та виявлення корупції у Головному управлінні Установи (так/ні)",
    "instruction": "Вкажіть «так» або «ні»."
  }
];

// Helper to determine item number from category or title
const getItemNum = (col) => {
  const catMatch = col.category.match(/^(\d+)\./);
  if (catMatch) return parseInt(catMatch[1]);
  
  const titleMatch = col.title_main.match(/^(\d+)\./);
  if (titleMatch) return parseInt(titleMatch[1]);
  
  return null;
};

// Helper to get group name for an item number
const getGroup = (itemNum) => {
  if (!itemNum) return 'other';
  if (itemNum >= 1 && itemNum <= 4) return 'education';
  if (itemNum >= 5 && itemNum <= 7) return 'whistleblowers';
  if (itemNum >= 8 && itemNum <= 11) return 'declaring';
  if (itemNum === 12) return 'declaring'; 
  if (itemNum >= 13 && itemNum <= 16) return 'education'; 
  if (itemNum === 17 || itemNum === 18) return 'whistleblowers'; 
  if (itemNum === 19 || itemNum === 20) return 'declaring'; 
  if (itemNum === 21 || itemNum === 22) return 'whistleblowers'; 
  if (itemNum >= 23 && itemNum <= 29) return 'conflicts'; 
  if (itemNum >= 30 && itemNum <= 32) return 'education'; 
  return 'other';
};

// Application State
let state = {
  columns: COLUMNS_DATA,
  searchTerm: '',
  activeFilter: 'all', // 'all', 'education', 'whistleblowers', 'declaring', 'conflicts'
  viewMode: 'grid',    // 'grid', 'table'
  theme: 'dark'        // 'dark', 'light'
};

// DOM Elements
const searchInput = document.getElementById('search-input');
const filterAll = document.getElementById('filter-all');
const filterEducation = document.getElementById('filter-education');
const filterWhistleblowers = document.getElementById('filter-whistleblowers');
const filterDeclaring = document.getElementById('filter-declaring');
const filterConflicts = document.getElementById('filter-conflicts');

const btnGridView = document.getElementById('view-grid');
const btnTableView = document.getElementById('view-table');
const resultsContainer = document.getElementById('results-container');
const themeToggle = document.getElementById('theme-toggle');
const backToTopBtn = document.getElementById('back-to-top');

// Modal Elements
const modalOverlay = document.getElementById('details-modal');
const modalClose = document.getElementById('modal-close');
const modalColIndex = document.getElementById('modal-col-index');
const modalColMain = document.getElementById('modal-col-main');
const modalColSub = document.getElementById('modal-col-sub');
const modalColInstruction = document.getElementById('modal-col-instruction');
const modalCopyBtn = document.getElementById('modal-copy-btn');
const toastNotification = document.getElementById('toast');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Load saved theme
  const savedTheme = localStorage.getItem('coffee-theme') || 'dark';
  setTheme(savedTheme);
  
  // Set up event listeners
  searchInput.addEventListener('input', handleSearch);
  
  filterAll.addEventListener('click', () => setFilter('all'));
  filterEducation.addEventListener('click', () => setFilter('education'));
  filterWhistleblowers.addEventListener('click', () => setFilter('whistleblowers'));
  filterDeclaring.addEventListener('click', () => setFilter('declaring'));
  filterConflicts.addEventListener('click', () => setFilter('conflicts'));
  
  btnGridView.addEventListener('click', () => setViewMode('grid'));
  btnTableView.addEventListener('click', () => setViewMode('table'));
  
  themeToggle.addEventListener('click', toggleTheme);
  
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  
  // Keyboard esc to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
      closeModal();
    }
  });

  // Back to Top button scroll handler
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Back to Top button click handler
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initial render
  renderLettersNav();
  render();
});

// Theme Logic
function setTheme(theme) {
  state.theme = theme;
  if (theme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
  localStorage.setItem('coffee-theme', theme);
}

// Search Logic
function handleSearch(e) {
  state.searchTerm = e.target.value.toLowerCase().trim();
  render();
}

// Filter Logic
function setFilter(filterType) {
  state.activeFilter = filterType;
  
  // Update UI buttons
  filterAll.classList.toggle('active', filterType === 'all');
  filterEducation.classList.toggle('active', filterType === 'education');
  filterWhistleblowers.classList.toggle('active', filterType === 'whistleblowers');
  filterDeclaring.classList.toggle('active', filterType === 'declaring');
  filterConflicts.classList.toggle('active', filterType === 'conflicts');
  
  render();
}

// View Mode Logic
function setViewMode(mode) {
  state.viewMode = mode;
  btnGridView.classList.toggle('active', mode === 'grid');
  btnTableView.classList.toggle('active', mode === 'table');
  render();
}

// Render Quick Navigation List of Section Numbers
function renderLettersNav() {
  const container = document.getElementById('letters-nav-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  const uniqueNums = [];
  state.columns.forEach(col => {
    const num = getItemNum(col);
    if (num && !uniqueNums.includes(num)) {
      uniqueNums.push(num);
    }
  });
  
  uniqueNums.sort((a, b) => a - b).forEach(num => {
    const a = document.createElement('a');
    a.href = `#col-rr-${num}`;
    a.className = 'letter-nav-link';
    a.textContent = num;
    a.style.width = '32px';
    a.style.height = '32px';
    a.style.fontSize = '0.9rem';
    
    if ([1, 14, 15, 16, 30, 31].includes(num)) {
      a.style.backgroundColor = 'var(--color-accent)';
      a.style.borderColor = 'var(--color-accent-hover)';
      a.style.color = '#FFFFFF';
      a.style.boxShadow = '0 0 8px rgba(139, 94, 60, 0.6)';
      a.style.fontWeight = '800';
    }
    
    a.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Reset state filters so target column is visible
      state.activeFilter = 'all';
      state.searchTerm = '';
      
      // Update UI inputs
      searchInput.value = '';
      filterAll.classList.add('active');
      filterEducation.classList.remove('active');
      filterWhistleblowers.classList.remove('active');
      filterDeclaring.classList.remove('active');
      filterConflicts.classList.remove('active');
      
      render();
      
      // Find the first column element belonging to this item number
      const targetCol = state.columns.find(col => getItemNum(col) === num);
      if (targetCol) {
        const targetId = `col-${targetCol.col_letter}`;
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Apply a highlight animation
          element.classList.add('highlight-flash');
          setTimeout(() => {
            element.classList.remove('highlight-flash');
          }, 1500);
        }
      }
    });
    
    container.appendChild(a);
  });
}

// Helper function to highlight matching search term
function highlightText(text, search) {
  if (!search) return text;
  
  // Escape special regex chars
  const _escaped = search.replace(/[-\/\\^$*+?.()|[\\]{}]/g, '\\$&');
  const regex = new RegExp(`(${_escaped})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

// Render Logic
function render() {
  const filtered = state.columns.filter(col => {
    // Apply group filter
    const itemNum = getItemNum(col);
    const colGroup = getGroup(itemNum);
    const matchesFilter = state.activeFilter === 'all' || colGroup === state.activeFilter;
    
    // Apply search filter
    const matchesSearch = !state.searchTerm || 
      col.col_letter.toLowerCase().includes(state.searchTerm) || 
      col.title_main.toLowerCase().includes(state.searchTerm) ||
      col.instruction.toLowerCase().includes(state.searchTerm) ||
      col.category.toLowerCase().includes(state.searchTerm) ||
      (col.col_index.toString() === state.searchTerm);
      
    return matchesFilter && matchesSearch;
  });

  // Clear previous output
  resultsContainer.innerHTML = '';

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search-minus"></i>
        <h3>Показників не знайдено</h3>
        <p>Спробуйте змінити пошуковий запит або вибрати інший фільтр</p>
      </div>
    `;
    return;
  }

  if (state.viewMode === 'grid') {
    renderGrid(filtered);
  } else {
    renderTable(filtered);
  }
}

// Render Card Grid
function renderGrid(data) {
  const grid = document.createElement('div');
  grid.className = 'columns-grid';
  
  data.forEach((col, index) => {
    const card = document.createElement('div');
    card.className = 'col-card fade-in-item';
    card.style.animationDelay = `${index * 0.012}s`;
    card.id = `col-${col.col_letter}`;
    
    const highlightedMain = highlightText(col.title_main, state.searchTerm);
    const highlightedCat = highlightText(col.category, state.searchTerm);
    const highlightedInstruction = highlightText(col.instruction, state.searchTerm);

    const subtitleColor = (col.col_index === "1, 2") ? 'var(--text-primary)' : (([4, 5, 18, 22, 26, 27, 28, 29, 30, 31, 32, 39, 40, 48, 49, 56, 57, 58, 59, 60].includes(col.col_index) || ["6, 7, 8, 9", "10, 11, 12, 13", "14, 15, 16, 17", "19, 20, 21", "23, 24, 25", "33, 34, 35", "36, 37, 38", "41, 42, 43", "44, 45, 46, 47", "50, 51, 52, 53, 54, 55"].includes(col.col_index)) ? '#ffffff' : 'var(--color-accent)');

    // Group indicators look beautiful with themed categories
    card.innerHTML = `
      <div class="card-header-row">
        <div class="col-badge" style="width: auto; height: auto; padding: 4px 10px; border-radius: var(--radius-md); font-size: 0.8rem; font-weight: 700; background-color: var(--color-accent); color: #F5EBE0; box-shadow: none;">Розділ ${getItemNum(col) || ''}</div>
      </div>
      <div class="col-card-body">
        <div class="col-subtitle" style="font-size: 0.75rem; font-weight: 700; color: ${subtitleColor}; line-height: 1.3; margin-bottom: 6px;">${highlightedCat}</div>
        <div class="col-title-text" style="margin-bottom: var(--spacing-sm); font-size: 0.95rem; font-weight: 600; line-height: 1.4; white-space: pre-line;">${highlightedMain}</div>
        <div class="col-instruction-section">
          <div class="instruction-title">Рекомендація щодо заповнення:</div>
          <div class="instruction-content">${highlightedInstruction}</div>
        </div>
      </div>
      <div class="card-actions">
        <button class="action-btn copy-btn" title="Копіювати опис" data-text="${col.title_main}">
          <i class="far fa-copy"></i>
        </button>
        <button class="action-btn open-details-btn" title="Детальніше">
          <i class="fas fa-expand-alt"></i>
        </button>
      </div>
    `;
    
    // Attach details click
    card.addEventListener('click', (e) => {
      // Ignore click if copy button is clicked
      if (e.target.closest('.copy-btn')) return;
      openDetails(col);
    });
    
    // Attach copy click
    const copyBtn = card.querySelector('.copy-btn');
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyToClipboard(col.title_main, `Опис показника №${col.col_index} скопійовано!`);
    });

    grid.appendChild(card);
  });
  
  resultsContainer.appendChild(grid);
}

// Render Compact Table
function renderTable(data) {
  const container = document.createElement('div');
  container.className = 'table-view-container fade-in-item';
  
  const table = document.createElement('table');
  table.className = 'columns-table';
  
  table.innerHTML = `
    <thead>
      <tr>
        <th style="width: 1%; white-space: nowrap; text-align: center;">№</th>
        <th style="width: 15%; white-space: nowrap;">Розділ</th>
        <th style="width: 40%;">Показник</th>
        <th style="width: 43%;">Рекомендація щодо заповнення</th>
        <th style="width: 1%; white-space: nowrap; text-align: center;">Дії</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  `;
  
  const tbody = table.querySelector('tbody');
  
  data.forEach(col => {
    const tr = document.createElement('tr');
    tr.id = `col-${col.col_letter}`;
    
    const highlightedMain = highlightText(col.title_main, state.searchTerm);
    const highlightedCat = highlightText(col.category, state.searchTerm);
    const highlightedInstruction = highlightText(col.instruction, state.searchTerm);
    const categoryColor = (col.col_index === "1, 2") ? 'var(--text-primary)' : 'var(--color-accent)';
    
    tr.innerHTML = `
      <td style="white-space: nowrap; text-align: center;"><strong>${col.col_index}</strong></td>
      <td style="font-size: 0.75rem; color: ${categoryColor}; font-weight: 600;">${highlightedCat}</td>
      <td><div class="col-title-text" style="font-size: 0.85rem; font-weight: 500; white-space: pre-line;">${highlightedMain}</div></td>
      <td><div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; white-space: pre-line;">${highlightedInstruction}</div></td>
      <td style="text-align: center; white-space: nowrap;">
        <button class="table-action-btn copy-btn" data-text="${col.title_main}" title="Копіювати опис">
          <i class="far fa-copy"></i>
        </button>
      </td>
    `;
    
    // Row click opens details
    tr.addEventListener('click', (e) => {
      if (e.target.closest('.copy-btn')) return;
      openDetails(col);
    });
    
    // Attach copy click
    const copyBtn = tr.querySelector('.copy-btn');
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyToClipboard(col.title_main, `Опис показника №${col.col_index} скопійовано!`);
    });
    
    tbody.appendChild(tr);
  });
  
  container.appendChild(table);
  resultsContainer.appendChild(container);
}

// Open details Modal
function openDetails(col) {
  modalColIndex.textContent = `Розділ ${getItemNum(col) || ''}`;
  modalColMain.textContent = col.title_main;
  modalColSub.textContent = col.category || 'Основні заходи';
  modalColInstruction.textContent = col.instruction;
  
  // Set up copy action inside modal
  modalCopyBtn.onclick = () => {
    const copyTextStr = `Показник № ${col.col_index} (${col.category || 'Основні заходи'})\n\nНазва: ${col.title_main}\n\nРекомендація: ${col.instruction}`;
    copyToClipboard(copyTextStr, `Повний опис показника № ${col.col_index} скопійовано!`);
  };
  
  modalOverlay.classList.add('show');
}

// Close modal
function closeModal() {
  modalOverlay.classList.remove('show');
}

// Theme Logic
function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Toast & Copy Logic
function copyToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg, 'success');
  }).catch(err => {
    console.error('Copy failed: ', err);
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg, 'success');
    } catch (e) {
      showToast('Не вдалося скопіювати текст', 'danger');
    }
    document.body.removeChild(textarea);
  });
}

// Toast notifications
function showToast(message, type = 'success') {
  toastNotification.textContent = message;
  toastNotification.className = 'toast';
  
  if (type === 'success') {
    toastNotification.classList.add('success');
  } else {
    toastNotification.classList.add('danger');
  }
  
  toastNotification.classList.add('show');
  
  // Hide after 3 seconds
  setTimeout(() => {
    toastNotification.classList.remove('show');
  }, 3000);
}

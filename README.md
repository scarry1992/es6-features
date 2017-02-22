# es6-features

- Деструктуризация
    - Деструктуризация позволяет разбивать объект или массив на переменные при присвоении.

    - Синтаксис: let {prop : varName = default, ...} = object
      Здесь двоеточие : задаёт отображение свойства prop в переменную varName, а равенство =default задаёт выражение,
      которое будет использовано, если значение отсутствует (не указано или undefined).

    - Для массивов имеет значение порядок, поэтому нельзя использовать :, но значение по умолчанию – можно:

    - let [var1 = default, var2, ...rest] = array
      Объявление переменной в начале конструкции не обязательно. Можно использовать и существующие переменные.
      Однако при деструктуризации объекта может потребоваться обернуть выражение в скобки.

    - Вложенные объекты и массивы тоже работают, при деструктуризации нужно лишь сохранить ту же структуру,
      что и исходный объект/массив.

- Функции
    - Можно задавать параметры по умолчанию, а также использовать деструктуризацию для чтения приходящего объекта.
    - Оператор spread (троеточие) в объявлении позволяет функции получать оставшиеся аргументы в массив: function f(arg1, arg2, ...rest).
    - Тот же оператор spread в вызове функции позволяет передать её массив как список аргументов (вместо apply).
    - У функции есть свойство name, оно содержит имя, указанное при объявлении функции, либо, если его нет,
      то имя свойства или переменную, в которую она записана. Есть и некоторые другие ситуации, в которых интерпретатор
      подставляет «самое подходящее» имя.
    - Объявление Function Declaration в блоке {...} видно только в этом блоке.
    - Появились функции-стрелки:
        - Без фигурных скобок возвращают выражение expr: (args) => expr.
        - С фигурными скобками требуют явного return.
        - Не имеют своих this и arguments, при обращении получают их из окружающего контекста.
        - Не могут быть использованы как конструкторы, с new.
- Строки
    - Строки-шаблоны – для удобного задания строк (многострочных, с переменными), плюс возможность использовать
      функцию шаблонизации для самостоятельного форматирования.
    - Юникод – улучшена работа с суррогатными парами.
    - Полезные методы для проверок вхождения одной строки в другую.
- Объекты и прототипы
    - Запись name: name можно заменить на просто name
    - Если имя свойства находится в переменной или задано выражением expr, то его можно указать в квадратных скобках [expr].
    - Свойства-функции можно оформить как методы: "prop: function() {}" → "prop() {}".

    В методах работает обращение к свойствам прототипа через super.parentProperty.

    - Для работы с прототипом:
        - Object.getPrototypeOf(obj) - метод получения прототипа.
        - Object.setPrototypeOf(obj, proto) – метод для установки прототипа.
        - obj.__proto__ – ссылка на прототип.

    - Дополнительно:
        - Метод Object.assign(target, src1, src2...) – копирует свойства из всех аргументов в первый объект.
        - Метод Object.is(value1, value2) проверяет два значения на равенство. В отличие от === считает +0 и -0
          разными числами. А также считает, что NaN равно самому себе.
- Классы
    - Классы можно объявлять как в основном потоке кода, так и «инлайн», по аналогии с Function Declaration и Expression.
    - В объявлении классов можно использовать методы, геттеры/сеттеры и вычислимые названия методов.
    - При наследовании вызов конструктора родителя осуществляется через super(...args),
      вызов родительских методов – через super.method(...args).
- Примитив Symbol
    - Символы – новый примитивный тип, предназначенный для уникальных идентификаторов.
    - Все символы уникальны. Символы с одинаковым именем не равны друг другу.
    - Существует глобальный реестр символов, доступных через метод Symbol.for(name).
      Для глобального символа можно получить имя вызовом и Symbol.keyFor(sym).

      Основная область использования символов – это системные свойства объектов, которые задают разные аспекты их
      поведения. Поддержка у них пока небольшая, но она растёт. Системные символы позволяют разработчикам
      стандарта добавлять новые «особые» свойства объектов, при этом не резервируя соответствующие строковые значения.

      Системные символы доступны как свойства функции Symbol, например Symbol.iterator.

      Мы можем создавать и свои символы, использовать их в объектах. Записывать их как свойства Symbol, разумеется,
      нельзя. Если нужен глобально доступный символ, то используется Symbol.for(имя).
- Итераторы
    - Итератор – объект, предназначенный для перебора другого объекта.
    - У итератора должен быть метод next(), возвращающий объект {done: Boolean, value: any}, где value – очередное
      значение, а done: true в конце.
    - Метод Symbol.iterator предназначен для получения итератора из объекта. Цикл for..of делает это автоматически,
      но можно и вызвать его напрямую.
    - В современном стандарте есть много мест, где вместо массива используются более абстрактные «итерируемые»
      (со свойством Symbol.iterator) объекты, например оператор spread ....
    - Встроенные объекты, такие как массивы и строки, являются итерируемыми, в соответствии с описанным выше.
- Set, Map, WeakSet и WeakMap
    - Map – коллекция записей вида ключ: значение, лучше Object тем, что перебирает всегда в порядке вставки и допускает любые ключи.
    - Set – коллекция уникальных элементов, также допускает любые ключи.

      Основная область применения Map – ситуации, когда строковых ключей не хватает
      (нужно хранить соответствия для ключей-объектов), либо когда строковый ключ может быть совершенно произвольным.

      К примеру, в обычном объекте Object нельзя использовать «совершенно любые» ключи. Есть встроенные методы, и уж
      точно есть свойство с названием __proto__, которое зарезервировано системой. Если название ключа даётся
      посетителем сайта, то он может попытаться использовать такое свойство, заменить прототип, а это, при запуске
      JavaScript на сервере, уже может привести к серьёзным ошибкам.

    - WeakMap и WeakSet – «урезанные» по функционалу варианты Map/Set, которые позволяют только «точечно» обращаться
      элементам (по конкретному ключу или значению). Они не препятствуют сборке мусора, то есть если ссылка на объект
      осталась только в WeakSet/WeakMap – он будет удалён.
- Promises
    - Промис – это специальный объект, который хранит своё состояние, текущий результат (если есть) и коллбэки.
    - При создании new Promise((resolve, reject) => ...) автоматически запускается функция-аргумент,
      которая должна вызвать resolve(result) при успешном выполнении и reject(error) – при ошибке.
    - Аргумент resolve/reject (только первый, остальные игнорируются) передаётся обработчикам на этом промисе.
    - Обработчики назначаются вызовом .then/catch.
    - Для передачи результата от одного обработчика к другому используется чейнинг.

      У промисов есть некоторые ограничения. В частности, стандарт не предусматривает какой-то метод для «отмены» промиса,
      хотя в ряде ситуаций (http-запросы) это было бы довольно удобно. Возможно, он появится в следующей версии стандарта JavaScript.

      В современной JavaScript-разработке сложные цепочки с промисами используются редко, так как они куда проще
      описываются при помощи генераторов с библиотекой co, которые рассмотрены в соответствующей главе. Можно сказать,
      что промисы лежат в основе более продвинутых способов асинхронной разработки.
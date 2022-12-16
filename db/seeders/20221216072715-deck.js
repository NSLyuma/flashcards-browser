/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const deck = [
      { title: 'Киношные вопросы' },
      { title: 'Все о животных' },
      { title: 'Random' },
    ];

    const card = [
      { question: 'Каким был первый полнометражный анимационный фильм?', deckId: 1 },
      { question: 'Какого цвета была таблетка, которую принимает Нео в фильме “Матрица”?', deckId: 1 },
      { question: 'За какой фильм Том Хэнкс получил свою первую номинацию на премию “Оскар”?', deckId: 1 },
      { question: 'Кто сыграл детектива Рика Декарда в фильме “Бегущий по лезвию” (1982)?', deckId: 1 },
      { question: 'Этот признанный режиссер, лауреат премии “Оскар”, снял фильмы “Делай ноги”, “Бейб: Поросенок в городе” и “Безумный Макс: Дорога ярости”.', deckId: 1 },
      { question: 'Какие животные воспитывали Маугли в “Книге джунглей”?', deckId: 1 },
      { question: 'В каком диснеевском фильме дебютировала Джули Эндрюс?', deckId: 1 },
      { question: 'Кто является первой цветной женщиной, получившей премию “Оскар” за лучшую женскую роль?', deckId: 1 },
      { question: 'Радость, Страх, Гнев, Брезгливость and Печаль управляют чьими эмоциями в фильме “Головоломка”?', deckId: 1 },
      { question: 'Какой фильм, написанный, снятый и спродюсированный Джеймсом Кэмероном, стал самым кассовым фильмом своего времени?', deckId: 1 },

      { question: 'Какое животное находится под защитой закона в Риме?', deckId: 2 },
      { question: 'Какое млекопитающее известно самым мощным укусом в мире?', deckId: 2 },
      { question: 'Какая птица ассоциируется у вас с миром?', deckId: 2 },
      { question: 'Какая птица является единственной, которая может летать задом наперед?', deckId: 2 },
      { question: 'Какое популярное морское существо обладает способностью клонировать себя?', deckId: 2 },
      { question: 'Какое самое быстрое сухопутное животное?', deckId: 2 },
      { question: 'Как называется самка оленя?', deckId: 2 },
      { question: 'В каком животном можно найти жемчуг?', deckId: 2 },
      { question: 'Сколько костей у акул?', deckId: 2 },
      { question: 'Сколько рогов было у трицератопса?', deckId: 2 },

      { question: 'Какой безалкогольный напиток первым был взят в космос?', deckId: 3 },
      { question: 'Кто написал знаменитый дневник, скрываясь от нацистов в Амстердаме?', deckId: 3 },
      { question: 'Какое самое глубокое место в мире?', deckId: 3 },
      { question: 'Кто написал эпическую поэму “Потерянный рай”?', deckId: 3 },
      { question: 'Из чего сделан самый крепкий дом в “Трех поросятах”?', deckId: 3 },
      { question: 'Как называется маленький пластмассовый кусочек на конце шнурка?', deckId: 3 },
      { question: 'Какая игрушка была первой, которую рекламировали по телевидению?', deckId: 3 },
      { question: 'В какой стране находится Прага?', deckId: 3 },
      { question: 'Как назывался батончик “Сникерс” до его смены названия в 1990 году?', deckId: 3 },
      { question: 'Как зовут родителей Гарри Поттера?', deckId: 3 },
    ];

    const guess = [
      { answer: 'Белоснежка и семь гномов', cardId: 1 },
      { answer: 'Красный', cardId: 2 },
      { answer: 'Большой', cardId: 3 },
      { answer: 'Харрисон Форд', cardId: 4 },
      { answer: 'Джордж Миллер', cardId: 5 },
      { answer: 'Волки', cardId: 6 },
      { answer: 'Мэри Поппинс', cardId: 7 },
      { answer: 'Хэлли Берри', cardId: 8 },
      { answer: 'Райли', cardId: 9 },
      { answer: 'Титаник', cardId: 10 },

      { answer: 'Кошки', cardId: 11 },
      { answer: 'Бегемот', cardId: 12 },
      { answer: 'Голубь', cardId: 13 },
      { answer: 'Колибри', cardId: 14 },
      { answer: 'Медуза', cardId: 15 },
      { answer: 'Гепард', cardId: 16 },
      { answer: 'Лань', cardId: 17 },
      { answer: 'Устрицы', cardId: 18 },
      { answer: 'Ноль', cardId: 19 },
      { answer: '3', cardId: 20 },

      { answer: 'Кока-Кола', cardId: 21 },
      { answer: 'Анна Франк', cardId: 22 },
      { answer: 'Марианская впадина', cardId: 23 },
      { answer: 'Джон Мильтон', cardId: 24 },
      { answer: 'Кирпич', cardId: 25 },
      { answer: 'Аглет', cardId: 26 },
      { answer: 'Мистер Картофельная Голова', cardId: 27 },
      { answer: 'Чехия', cardId: 28 },
      { answer: 'Marathon', cardId: 29 },
      { answer: 'Лили и Джеймс', cardId: 30 },
    ];

    const addTimeStamps = (item) => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await queryInterface.bulkInsert('Decks', deck.map(addTimeStamps));
    await queryInterface.bulkInsert('Cards', card.map(addTimeStamps));
    await queryInterface.bulkInsert('Guesses', guess.map(addTimeStamps));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Guesses');
    await queryInterface.bulkDelete('Cards');
    await queryInterface.bulkDelete('Decks');
  },
};

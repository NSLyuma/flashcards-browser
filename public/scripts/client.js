const userAnswerList = Array.from(document.querySelectorAll('.userAnswer'));

if (userAnswerList) {
  userAnswerList.map((answer, i) => {
    answer.addEventListener('submit', async (event) => {
      event.preventDefault();

      const isTrueList = Array.from(document.querySelectorAll('.isTrue'));

      const url = event.target.action;
      const method = event.target.method;
      const inputValue = event.target.user_answer.value;
      const userAnswer = JSON.stringify({ userAnswer: inputValue });

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: userAnswer,
      });

      const reaction = await response.text();

      isTrueList[i].innerHTML += reaction;
    });
  });
}

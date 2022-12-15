const toMain = document.querySelector('.js-refMain');

if (toMain) {
  toMain.addEventListener('click', async (event) => {
    event.preventDefault();

    const method = 'post';
    const url = event.target.href;
    const doc = document.body;
    const data = JSON.stringify({ doc });

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'text/html' },
        body: data,
      });

      const home = await response.text();
      document.body.innerHTML = home;
    } catch (error) {
      console.log('ERROR IN POST / client.js: ', error.message);
    }
  });
}

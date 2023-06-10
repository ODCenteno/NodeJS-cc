const puppeteer = require('puppeteer');

// crear función autoejecutada convirtiéndola en expresión
(async () => {
  // Lanzar el navegador
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  let titleH1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1').innerText;
    console.log(h1);
    return h1;
  })

  console.log(titleH1);

  // Cerrar el navegador
  browser.close();
})() 
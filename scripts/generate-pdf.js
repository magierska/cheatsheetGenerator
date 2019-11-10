const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.emulateMedia('screen');
    await page.pdf({
      path: './react.pdf', // path (relative to CWD) to save the PDF to.
      printBackground: true,// print background colors
      width: '842px',
      height: '595px',
    });
    await browser.close();
  })()
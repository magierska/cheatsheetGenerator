var express = require('express');
const puppeteer = require('puppeteer');
var router = express.Router();

const generatePdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.emulateMedia('screen');
    const ymlInput = await page.$('#ymlInput');
    const logoInput = await page.$('#logoInput')
    await ymlInput.uploadFile("example/content.yml")
    await logoInput.uploadFile("example/logo.png")
    await page.waitForSelector("#logoInput")
    const pdf = await page.pdf({
        printBackground: true,// print background colors
        width: '842px',
        height: '595px',
    });
    await browser.close();

    return pdf;
}

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const pdf = await generatePdf();
    res.contentType("application/pdf");
    res.send(pdf);
});

module.exports = router;

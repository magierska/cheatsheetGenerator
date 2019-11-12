var express = require('express');
var cors = require('cors');
const puppeteer = require('puppeteer');
var router = express.Router();
var formidable = require('formidable');

const generatePdf = async (ymlConfig, logoFile) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.emulateMedia('screen');
    const ymlInput = await page.$('#ymlInput');
    const logoInput = await page.$('#logoInput');
    await ymlInput.uploadFile(ymlConfig);
    await logoInput.uploadFile(logoFile);
    await page.waitForSelector("#logoInput");
    const pdf = await page.pdf({
        printBackground: true,// print background colors
        width: '842px',
        height: '595px',
    });
    await browser.close();

    return pdf;
}


router.options('/', cors());
router.post('/', async function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        const pdf = await generatePdf(files['yamlConfigFile'].path, files['logoInput'].path);
        res.contentType("arraybuffer")
        res.type("arraybuffer");
        res.send(Buffer.from(pdf.buffer));
    });

    return;
});

module.exports = router;

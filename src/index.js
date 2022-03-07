const puppeteer = require('puppeteer');

const init = async (str) => {
  const startTime = new Date().getTime()
  console.log('startTime', startTime)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');
  await page.screenshot({ path: 'example.png' });
  await browser.close();
  console.log('endTime', new Date().getTime() - startTime)
}

module.exports = init
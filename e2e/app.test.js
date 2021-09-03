/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable spaced-comment */

import puppetteer from 'puppeteer';

const childProcess = require('child_process');

let server = null;

jest.setTimeout(60000);
describe('TEST', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    server = await childProcess.fork(`${__dirname}/test-server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', () => {
        reject();
      });
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
      /* headless: true,
      slowMo: 100,
      devtools: false,*/
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  describe('Test form', () => {
    test('Creating item', async () => {
      await page.goto(baseUrl);
      const button = await page.$('.btn');
      button.click();
      await page.waitForSelector('.tooltip_container', { visible: true });
    });
  });
});

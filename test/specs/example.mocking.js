describe('Mocking', () => {
    it('Mock URL', async () => {
        const pageMock = await browser.mock('https://the-internet.herokuapp.com/login')
        await pageMock.respond('https://webdriver.io')

        await browser.url(`https://the-internet.herokuapp.com/login`);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });
});


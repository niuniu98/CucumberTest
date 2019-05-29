
import { browser, promise, By, WebElementPromise } from 'protractor';
import { baseUrl } from '../config/siteInfo';

class BasePage {
    private baseUrl = baseUrl;
    private driver = browser.driver;

    protected url = '';
    protected Identifier = '';


    /**
     *
     *
     * @param {string} [url = '']
     * @returns {promise.Promise<void>}
     * @memberof BasePage
     */
    load(url = ''): promise.Promise<void> {
        return this.driver.get(this.baseUrl + this.url + url);
    }

    /**
     *
     * @param {string} [Identifier=this.Identifier]
     * @returns {Promise<boolean>}
     * @memberof BasePage
     */
    async isPageLoaded(Identifier = this.Identifier): Promise<boolean> {
        const elements = await this.driver.findElements(By.xpath(Identifier));
        return elements.length > 0;
    }

    /**
     *
     * @param {string} name
     * @returns {WebElementPromise}
     * @memberof BasePage
     */
    getElementByName(name: string): WebElementPromise {
        return this.driver.findElement(name);
    }
}

export default BasePage;

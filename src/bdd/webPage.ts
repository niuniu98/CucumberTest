import xpathParser from '../util/xpathParser';
import BasePage from '../pages/basepage';
import {browser, By, promise, WebElementPromise} from 'protractor';
import deviceInfo from '../config/deviceInfo';
import { IWebDriverOptionsCookie, WebElement } from 'selenium-webdriver';
import MyWebElement from './webElement';
import { currentDomain } from '../config/siteInfo';
import {logBulkInfo, logError, LoggerLevel, logInfo} from "../util/logger";
import {getFileName} from "../util/util";

const elementMap: Map<string, MyWebElement> = new xpathParser(browser.params.xpathFilesDir).getElementMap();

const SCROLL_FILTER =
    'filter-attribute,srp-map-v2,srp-map-location-tooltip,la imagen,icon-entertainment';

const FILE_IDENTIFIER = getFileName(__filename);

const driver = browser.driver;
const params = browser.params;
const site = browser.params.site.toLowerCase() + '-';
const prekey = params.device === 'desktop'
        ? site + params.device + '-'
        : site + deviceInfo[browser.params.mobileName].platform + '-';

export async function loadPage(pageName: string, url = ''): Promise<void> {
    const {
        default: Page
    }: { default: typeof BasePage } = await import(`../pages/${pageName.toLowerCase()}page`);
    // logInfo(FILE_IDENTIFIER, "starting load url: "+pageName);
    await new Page().load(url);
}

export function openPage(url: string): PromiseLike<void> {
    return browser.driver.get(url);
}

export async function isPageLoaded(pageName: string): Promise<boolean> {
    const {
        default: Page
    }: { default: typeof BasePage } = await import(`../pages/${pageName.toLowerCase()}page`);

    return new Page().isPageLoaded();
}

export async function isElementDisplayed(elementName: string): Promise<boolean> {
    const element = await getElementByName(elementName);
    return element.isDisplayed();
}

export async function isElementEnabled(elementName: string): Promise<boolean> {
    const element = await getElementByName(elementName);
    return element.isEnabled();
}

export function waitWebPage(time: number): PromiseLike<void> {
    return browser.sleep(time * 1000);
}

export async function scrollElementIntoViewByXpath(xpath: string): Promise<WebElement> {
    const webElement = driver.findElement(By.xpath(xpath));
    if (!goScroll(xpath)) return webElement;
    await scrollElementIntoView(webElement);
    return webElement;
}

export function scrollToEnd(): PromiseLike<void> {
    return browser.executeScript(
        'window.scrollTo(0, document.body.scrollHeight - 150)',
        ''
    );
}

export function scrollElementIntoView(webElement: WebElementPromise) {
    return driver.executeScript(
        // tslint:disable-next-line: max-line-length
        'var offset = document.documentElement.clientHeight/6;arguments[0].scrollIntoView(); window.scrollBy(0,-offset)',
        webElement
    );
}

export function goScroll(elementName: string) {
    return SCROLL_FILTER.indexOf(elementName) < 0;
}

export function getElementByName(elementName: string): PromiseLike<WebElement> {
    return driver.findElement(
        elementMap.get(prekey + elementName.toLowerCase())!.elementBy
    );
}

export function getElementsByName(elementName: string): promise.Promise<WebElement[]> {
    return driver.findElements(
        elementMap.get(prekey + elementName.toLowerCase())!.elementBy
    );
}

export function getElementByXpath(elementXpath: string) {
    return driver.findElement(By.xpath(elementXpath));
}

export function getElementByTagName(elementTag: string) {
    return driver.findElement(By.tagName(elementTag));
}

export function getPageTitle() {
    return driver.getTitle();
}

// TODO Clean up this function. The hard code is suspicious.
export async function getPageDescription(): Promise<string> {
    const element = await getElementByName('srp_lblSEODescription');
    return element.getAttribute('content');
}

export function getXPath(xpathId: string) {
    return elementMap.get(prekey + xpathId.toLowerCase())!.value;
}

export async function addCookie(cookieName: string, cookieValue: string): Promise<void> {
    await loadPage("home","");
    if(cookieName === "bt_auth"){
        cookieValue= '"' + cookieValue + '"';
    }
    const cookie: IWebDriverOptionsCookie = { name: cookieName, value: cookieValue,
        path: "/", domain:currentDomain, secure: true, httpOnly: false};
    await driver.manage().addCookie(cookie);
}

export async function delectAllCookie(): Promise<void> {
    await driver.manage().deleteAllCookies();
}

// export async function addCookieByName(cookieName: string): Promise<void> {
//     await loadPage("home","");
//     const cookie: IWebDriverOptionsCookie = { name: cookieName, value: cookies[cookieName],
//         path: "/", domain: currentDomain, secure: true, httpOnly: false};
//     await driver.manage().addCookie(cookie);
// }

export async function getCookies(): Promise<void> {
    const cookies = await driver.manage().getCookies();
    for (const cookie of cookies){
        logInfo(FILE_IDENTIFIER,'cookie:'+JSON.stringify(cookie));
    }
}

export async function checkScreenType(): Promise<'portrait' | 'landscape'> {
    const height = (await driver
        .manage()
        .window()
        .getSize()).height;
    const width = (await driver
        .manage()
        .window()
        .getSize()).width;

    if (width < height) {
        return 'portrait';
    } else {
        return 'landscape';
    }
}

export async function isScreenType(screenType: string): Promise<boolean> {
    if (screenType === 'both') {
        return Promise.resolve(true);
    }

    const currentScreenType = await checkScreenType();
    return currentScreenType === screenType;
}

// export async function getHarLog(): Promise<void> {
//     const logs = await driver
//         .manage()
//         .logs()
//         .get('performance');
//     setRawHar(logs);
// }

export function refresh(): PromiseLike<void> {
    return driver.navigate().refresh();
}

export async function scrollElementIntoViewByName(
    elementName: string
): Promise<WebElement> {
    const xpath = getXPath(elementName);
    return scrollElementIntoViewByXpath(xpath);
}

export function getPageUrl() {
    return driver.getCurrentUrl();
}

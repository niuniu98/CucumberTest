'use strict';
import * as webPage from '../bdd/webPage';
import { Given } from 'cucumber';

Given(
    /^"([^"]*)" page is opened$/,
    async(pageName: string) => {
        await webPage.loadPage(pageName);
    });

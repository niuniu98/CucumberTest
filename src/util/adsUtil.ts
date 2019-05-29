import {getFileName} from "./util";

/**
 * a collection of ad util
 */

const FILE_IDENTIFIER = getFileName(__filename);

export const findAd = async (site: string, adName = 'post_ad') => {
    const { default: ad }: { default: { [index: string ]: string } } = await import('../../ads/' + site + '/' + adName);
    return ad;
};

export const findDefaultAd = async (site: string) => {
    return await findAd(site, undefined);
};

export const findAdByType = async (site: string, adType: string) => {
    return await findAd(site, 'postad_' + adType);
};

export const findAdByTypeAndLocation = async (site: string, adType: string) => {
    const ad = await findAd(site, `postad_${adType}`);
    // @ts-ignore
    ad.location = {
        "address": "Bryanston",
        "latitude": -26.0563986,
        "longitude": 28.0244639,
        "radius": 0
    };
    return ad;
};

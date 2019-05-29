export const createRandom = () => {
    const str = Math.round(Math.random() * (99999 - 10000)).toString() + new Date().getTime().toString();
    return parseInt(str, 10);
};

export const trim = (para: string) => {
    return para.replace(/\s+/g, '');
};

export const getFileName = (filePath: string) => {
    const args: string[] = filePath.split('/');
    return args[args.length - 1];
};

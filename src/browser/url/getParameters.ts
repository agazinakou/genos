export const getParameters = (URL: string) => {
    URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
    return JSON.stringify(URL);
};
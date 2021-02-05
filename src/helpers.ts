export const getRef = (name: string): string => {
    const url: string = window.location.href;
    const anchor: string = `${url}#${name}`;
    return anchor;
};
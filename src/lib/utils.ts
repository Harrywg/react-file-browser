export const convertToSlug = (name: string) => {
    return '/' + name.toLowerCase().replace(/ /g, '-');
};
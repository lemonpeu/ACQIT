export const myLoader = (src, width, quality) => {
    return `https://3dimpresion.com.ar/${src}?w=${width}&q=${quality || 75}`;
};

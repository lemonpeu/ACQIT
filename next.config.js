module.exports = {
    images: {
        loader: 'custom',
        path: '/Peu',
    },
    basePath: '/Peu',
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
            '/consultoria': { page: '/consultoria' },
            '/disenio': { page: '/disenio' },
            '/equipamiento': { page: '/equipamiento' },
            '/nosotros': { page: '/nosotros' },
            '/seguridadit': { page: '/seguridadit' },
        };
    },
};

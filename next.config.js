module.exports = {
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
            '/consultoria': { page: '/consultoria' },
            '/disenio': { page: '/disenio' },
            '/equipamento': { page: '/equipamento' },
            '/nosotros': { page: '/nosotros' },
            '/seguridadit': { page: '/seguridadit' },
        };
    },
};



const config = {
    hostname: 'freelance-api.e-me.co',
    protocol: "http",
    port: "80",
    api: "/api/front/v1"
};

export const api = `${config.protocol}://${config.hostname}:${config.port}${config.api}`;

export const wss = `${config.protocolWss}://${config.hostname}:${config.port}${config.wss}`;

export default config;
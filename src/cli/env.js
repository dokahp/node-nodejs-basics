export const parseEnv = () => {
    const variables = process.env;
    const filtered = Object.keys(variables).filter(el => {
        return el.startsWith('RSS_')
    });
    filtered.map(el => console.log(`${el}=${process.env[el]}`))
};

parseEnv();
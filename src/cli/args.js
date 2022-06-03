export const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = args.map((el, i) => i % 2? `${el},`: `${el} is`);
    console.log(result.join(' ').slice(0, -1));
};

parseArgs();
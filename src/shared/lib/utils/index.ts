export const cn = (...args: Array<string | null | undefined | Record<string, boolean | undefined | null>>) => {
    let result = "";

    for (let i = 0; i < args.length; i++) {
        const item = args[i];
        if (!item) continue;
        else if (typeof item === "string") {
            result = `${result} ${args[i]}`;
        } else {
            for (const key in item) {
                if (key === "undefined" || key === "null" || !item[key]) continue;
                result = `${result} ${key}`;
            }
        }
    }
    return result.trim();
};

export const shuffleArray = <T>(array: T[]) => {
    const copy = [...array];
    copy.sort(() => Math.random() - 0.5);
    return copy;
};

export const getPluralSuffixForm = (number: number) => {
    if (number === 0) return 0;
    if (number === 1) return 1;
    if (number >= 2 && number <= 4) return 2;
    if (number >= 5 && number <= 20) return 0;
    if (number > 20) {
        const stringifiedNumber = `${number}`;
        const lastChar = +stringifiedNumber[stringifiedNumber.length - 1];
        if (lastChar === 1) return 1;
        if (lastChar >= 2 && lastChar <= 4) return 2;
    }
    return 0;
};

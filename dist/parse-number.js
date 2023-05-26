const digitOnly = (s) => s.replace(/\D/g, '');
/**
 * 从字符串转成数字
 * 主要功能：
 * 1. 忽略非数字字符
 * 2. 可识别出百分数
 */
export const parseNumber = (text) => {
    // .123 => 0.123
    if (text.startsWith('.'))
        text = `0${text}`;
    const hasDot = text.includes('.');
    const [left, ...others] = text.split('.');
    // replace non-digit string[s]
    const numberString = [left, others.join('')].map(digitOnly).join(hasDot ? '.' : '');
    const number = parseFloat((text.startsWith('-') ? '-' : '') + numberString);
    // 1% => 0.01
    if (text.endsWith('%')) {
        return +(number / 100).toPrecision(numberString.split('.').join('').length);
    }
    return number;
};

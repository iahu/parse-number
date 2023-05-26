import { parseNumber } from './parse-number';

describe('parseNumber', function () {
    it('is a function', () => {
        expect(typeof parseNumber).toBe('function');
    });
    it('should transform a number string to number', () => {
        expect(parseNumber('1')).toEqual(1);
        expect(parseNumber('123')).toEqual(123);
        expect(parseNumber('0.123')).toEqual(0.123);
    });

    it('should retain the navigate sign', () => {
        expect(parseNumber('-1')).toEqual(-1);
        expect(parseNumber('-123')).toEqual(-123);
        expect(parseNumber('-1.23')).toEqual(-1.23);
        expect(parseNumber('-0.123')).toEqual(-0.123);
    });

    it('can accept float number string starts width "."', () => {
        expect(parseNumber('.123')).toEqual(0.123);
        expect(parseNumber('-.123')).toEqual(-0.123);
    });

    it('should retain the first dot', () => {
        expect(parseNumber('.1.2.3')).toEqual(0.123);
        expect(parseNumber('0.1.2.3')).toEqual(0.123);
        expect(parseNumber('1.2.3')).toEqual(1.23);

        expect(parseNumber('-.1.2.3')).toEqual(-0.123);
        expect(parseNumber('-0.1.2.3')).toEqual(-0.123);
        expect(parseNumber('-1.2.3')).toEqual(-1.23);
    });

    it('should remove non-digit characters', () => {
        expect(parseNumber('1a2b3c')).toEqual(123);
        expect(parseNumber('-1a2b3c')).toEqual(-123);

        expect(parseNumber('.1a2b3')).toEqual(0.123);
        expect(parseNumber('-.1a2b3')).toEqual(-0.123);

        expect(parseNumber('0.1a2b3')).toEqual(0.123);
        expect(parseNumber('-0.1a2b3')).toEqual(-0.123);

        expect(parseNumber('0.abc123')).toEqual(0.123);
        expect(parseNumber('-0.abc123')).toEqual(-0.123);

        expect(parseNumber('0.123abc')).toEqual(0.123);
        expect(parseNumber('-0.123abc')).toEqual(-0.123);

        expect(parseNumber('abc.123')).toEqual(0.123);
        expect(parseNumber('-abc.123')).toEqual(-0.123);

        expect(parseNumber('abc123.456')).toEqual(123.456);
        expect(parseNumber('-abc123.456')).toEqual(-123.456);

        expect(parseNumber('123abc.456')).toEqual(123.456);
        expect(parseNumber('-123abc.456')).toEqual(-123.456);

        expect(parseNumber('1a2b3c.456')).toEqual(123.456);
        expect(parseNumber('-1a2b3c.456')).toEqual(-123.456);

        expect(parseNumber('1a2b3c.abc456')).toEqual(123.456);
        expect(parseNumber('1a2b3c.456abc')).toEqual(123.456);
        expect(parseNumber('1a2b3c.4a5b6c')).toEqual(123.456);
    });

    it('should transform percent number string to float number', () => {
        expect(parseNumber('1%')).toEqual(0.01);
        expect(parseNumber('10%')).toEqual(0.1);
        expect(parseNumber('100%')).toEqual(1);
        expect(parseNumber('111%')).toEqual(1.11);
        expect(parseNumber('111.234%')).toEqual(1.11234);

        expect(parseNumber('-1%')).toEqual(-0.01);
        expect(parseNumber('-10%')).toEqual(-0.1);
        expect(parseNumber('-100%')).toEqual(-1);
        expect(parseNumber('-111%')).toEqual(-1.11);
        expect(parseNumber('-111.234%')).toEqual(-1.11234);

        expect(parseNumber('a1%')).toEqual(0.01);
        expect(parseNumber('1a%')).toEqual(0.01);
        expect(parseNumber('a1a%')).toEqual(0.01);

        expect(parseNumber('1a11.234%')).toEqual(1.11234);
        expect(parseNumber('1a1a1.234%')).toEqual(1.11234);
        expect(parseNumber('1a1a1.2a3a4%')).toEqual(1.11234);
    });
});

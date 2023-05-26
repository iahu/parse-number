# parse-number

parse number from string

examples:

```ts
expect(parseNumber('0.123')).toEqual(0.123);
expect(parseNumber('-123')).toEqual(-123);
expect(parseNumber('-.123')).toEqual(-0.123);
expect(parseNumber('-1.2.3')).toEqual(-1.23);
expect(parseNumber('-1a2b3c')).toEqual(-123);
expect(parseNumber('1a1a1.2a3a4%')).toEqual(1.11234);
```

more example see [test case](./src/parse-number.test.ts);

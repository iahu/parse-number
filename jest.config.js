/**
 * Sync object
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
    verbose: false,
    roots: ['<rootDir>'],
    projects: ['<rootDir>'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'cjs', 'mjs'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@@/(.+)$': '<rootDir>/src/$1'
    },
    moduleDirectories: ['node_modules', '<rootDir>/node_modules'],
    globals: {
        navigator: { userAgent: '' }
    },
};

module.exports = config;

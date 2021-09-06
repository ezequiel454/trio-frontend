module.exports = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	bail: 1,
	clearMocks: true,
	testEnvironment: 'jsdom',
	collectCoverage: true,
	collectCoverageFrom: [
		'src/pages/**/*.tsx',
		'!src/**/_document.tsx',
		'!src/**/_app.tsx'
	],
	coverageReporters: ['lcov', 'text'],
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1'
	}
}

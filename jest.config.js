module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**', '!**/node_modules/**'],
	coverageDirectory: './coverage/',
	coverageReporters: ['lcov'],
};

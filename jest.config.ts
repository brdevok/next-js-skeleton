import type { Config } from 'jest';
import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const createJestConfig = nextJest({
	dir: '.',
});

const config: Config = {
	testEnvironment: 'jsdom',
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/csp.ts',
		'!src/**/*.types.ts',
		'!src/**/*.mocks.{ts,tsx}',
		'!src/**/*.stories.{ts,tsx}',
		'!src/data/**/*',
		'!src/types/**/*',
		'!src/storybook/**/*',
		'!src/components/styleguide/**/*',
	],
	coverageProvider: 'v8',
	coverageDirectory: 'coverage',
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
		'^.+\\.s?css$': '<rootDir>/jest-setup/emptySetup.ts',
	},
};

export default createJestConfig(config);

import type { Config } from 'jest';

const config: Config = {
   verbose: true,
   preset: 'ts-jest',
   testEnvironment: 'jsdom',
   transform: {
      '^.+\\.tsx?$': [
         'ts-jest',
         {
            tsconfig: 'tsconfig.test.json',
         },
      ],
   },
   moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
   },
   setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;

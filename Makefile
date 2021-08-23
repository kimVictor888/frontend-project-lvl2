install:
	npm ci

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage

test-watch:
	cross-env NODE_OPTIONS=--experimental-vm-modules npx jest --bail --watch

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

gendiff:
	node bin/gendiff.js

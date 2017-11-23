install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

even:
	npm run babel-node -- src/bin/brain-even.js

calc:
	npm run babel-node -- src/bin/brain-calc.js

publish:
	npm publish

lint:
	npm run eslint

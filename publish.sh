yarn build
rm -rf dist/
mkdir dist
cp ./package.json ./dist/package.json
cp ./README.md ./dist/README.md
yarn build
cd dist
# npm publish
# babel-plugin-prepend-shebang

prepend node env shebang to a file

# Installation

npm i babel-plugin-prepend-shebang

# Usgae

add this to your package.json file\
<em>"add-shebang": "babel --plugins prepend-shebang dist/some-file.js --out-dir ./dist"</em>

and after the compilation process, run "add-shebang" script with the output file name

package.json build ex:\
<em>"build": "npm run compile && npm run add-shebang"</em>

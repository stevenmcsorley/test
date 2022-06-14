const autoprefixer = require("autoprefixer");
const cssnanoPlugin = require("cssnano");

if(process.env.NODE_ENV === 'production') {
    module.exports = {
    plugins: [
        autoprefixer,
        cssnanoPlugin,
        'rucksack-css',
        ],
    }
} else {
    module.exports = {
        plugins: [
        autoprefixer,
        'rucksack-css',
        ],
    }
}   
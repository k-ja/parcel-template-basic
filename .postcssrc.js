/*
//ESM

import autoprefixer from 'autoprefixer'
export {
    plugins:[
        autoprefixer
    ]
}

//node js
const autoprefixer = require('autoprefixer') //import

module.exports = { //export
    plugins: [
        autoprefixer
    ]
}
*/

//node js 간소화
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
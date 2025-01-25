//npm init
//npm init -y
//npm i lodash i for install w hada esem l package that i want to install
//


//external modules ana i downloaded them
const __=require('lodash');

const items=[1,[2,[3,[4]]]];
const newItems=__.flattenDeep(items);//hay function bi aleb l lodash bet raje3 l elements bi 1 array
console.log(newItems);

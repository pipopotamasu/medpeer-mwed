import 'babel-polyfill'

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = Object.assign(obj1, obj2); // IEだといい感じに変換してくれる

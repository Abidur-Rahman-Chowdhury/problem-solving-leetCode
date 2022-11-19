const quote =
  'React is a js framework & this framework is the most popular front-end framework right now';

console.log(quote.replace(/framework/g, 'library'));

const startTime = performance.now()
const library1 = 'jQuery';
const library2 = 'React';
const endTime = performance.now()

console.log({ library1 });
console.log({ library2 });

console.log(`${endTime- startTime}`);
import fs from 'fs';

// const todos = {
//   todos: [
//     {
//       todoid: 34,
//       content: '타입스크립트 공부',
//     },
//     {
//       todoid: 35,
//       content: '타운홀 참석',
//     },
//   ],
// };

// const todosJSON = JSON.stringify(todos);

const dataBuffer = fs.readFileSync('../data/todos.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data);
// fs.writeFileSync('../data/todos.json', todosJSON);

// fs.writeFile('sample.txt', 'content', 'utf8', function (err) {
//   if (err) throw err;
//   console.log('write Success');
// });

// fs.readFile('./sample.txt', 'utf8', function (err, data) {
//   console.log(data);
// });

// fs.unlink('filepath', 'newFile.txt', function (err) {
//   if (err) throw err;
//   console.log('delete Success!');
// });

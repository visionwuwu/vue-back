const { createServer } = require('http');

const users = [
  { id: 1, name: 'Visionwuwu', age: 18, sex: '男', cart: '劳斯莱斯' },
  { id: 2, name: 'yan', age: 18, sex: '女', cart: '红旗' },
  { id: 3, name: 'lisi', age: 18, sex: '女', cart: '宝马' },
];

const server = createServer((req, res) => {
  const { url, method } = req;
  if (method.toUpperCase() === 'GET' && url === '/api/users') {
    const result = JSON.stringify({
      code: 200,
      data: users
    });
    res.end(result);
  } else {
    res.end('Not Found！！！');
  }
});

server.listen(3000, () => {
  console.log('server is running 3000 port');
});

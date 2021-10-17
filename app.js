const { createServer } = require('http');

const users = [
  { id: 11, name: 'Visionwuwu', age: 18, sex: '男', cart: '劳斯莱斯' },
  { id: 22, name: 'yan', age: 18, sex: '女', cart: '红旗' },
  { id: 33, name: 'lisi', age: 18, sex: '女', cart: '宝马' },
  { id: 44, name: '张三', age: 18, sex: '男', cart: '蔚来' },
];

const server = createServer((req, res) => {
  const { url, method } = req;
  res.setHeader('Access-Control-Allow-Origin', '*');
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

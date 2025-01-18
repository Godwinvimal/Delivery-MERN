import express from 'express';

const app = express();

app.get('/', (res, req) => {
    req.send('Server is Ready...');
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});

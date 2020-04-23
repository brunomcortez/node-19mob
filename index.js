const express = require('express');
const routes = require('./routes');

// express
const app = express();
app.use(routes);

// app.get('/', (request, response) => {
//     response.send('Cheguei na minha rota de GET');
// });

// server running
const port = process.env.PORT || 3000;
app.listen(port, () => { 
    console.log(`App listening on port ${port}`); 
});
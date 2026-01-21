const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) =>{
    res.send('Home page');
})

app.get('/api/hello', (req, res) => {
  res.send({name: 'Kaushik',
    message: 'started learning RESTfull APIs'
  });
})


app.listen(port, () => {
    console.log(`App started on port http://localhost:${port}`);
    
});

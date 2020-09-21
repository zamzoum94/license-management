const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./api/routes');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({extended : 'false'}));
app.use(bodyParser.json());
app.use('/', routes.license);

app.listen(PORT, ()=>{
    console.log(`Server is listening ${PORT}`);
})
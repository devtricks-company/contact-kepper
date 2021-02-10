const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
app.get('/',(req,res) => {
    res.json({msg:"Welcome To Contact Keeper Api"});
});

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts',require('./routes/contacts'));
app.use('/api/auth',require('./routes/auth'));


app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})
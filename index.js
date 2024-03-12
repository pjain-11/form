const express = require("express");
const User =require('./Models/user');
const sequelize = require('./database');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });


app.use(express.json());

//syncying all models (here whatever model we named all the columns will created at our database)
sequelize.sync({ force: false}).then(() => {
    console.log('All models were synchronized successfully.');
}).catch(error => {
    console.log('Error occured: ', error);
});

//Get all users
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

//Add a user
app.post('/users', async (req, res) => {
    const { name, email, message, department } = req.body;
    const newUser = await User.create({ name, email, message, department});
    res.json(newUser);
});

//update a user by id
app.put('/users/:id', async (req, res) => {
    const { name, email, message, department } = req.body;
    const user = await User.findByPk(req.params.id);
    if(user){
        user.name = name;
        user.email = email;
        user.message = message;
        user.department = department;
        await user.save();
        res.json(user);
    } else  {
        res.status(404).send('user not found');
    }
});

//delete by user id

app.delete('/users/:id', async(req, res) => {
    const user = await User.findByPk(req.params.id);
    if(user) {
        await user.destroy();
        res.status(204).send('User Deleted Done');
    } else {
        res.status(404).send('User NOT found');
    }
});
const express = require('express');
const fs = require('fs');

const router = express.Router();

//validation(Yulia.H)
const validateUser = require('../validation/validation')

// 1
router.post('/createNewUser', async function(req, res) {
    try{
        const usersJSON = JSON.parse( fs.readFileSync('./db/users.json', 'utf-8'))
        let users = usersJSON.users;
        let newUser = {};
        //users keys (Yulia.H)
        newUser.id = Math.random();
        newUser.firstname = req.body.firstname;
        newUser.lastname = req.body.lastname;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        validateUser(req.body);
        users.push( newUser )
        usersJSON.users = users;
        fs.writeFileSync('./db/users.json', JSON.stringify( usersJSON ) );
        return res.json(users)
    } catch (err){
        // console.log(`newUser error: ${err}`)
        return res.status(err.status||500).json(err)
    }
});

// 2
router.get('/allUsers', async function(req, res) {
    try{
        const usersJSON = JSON.parse( fs.readFileSync('./db/users.json', 'utf-8'))
        return res.json( usersJSON );
    } catch (err){
        // console.log(`all users error: ${err}`)
        return res.status(err.status||500).json(err)
    }
});

// 3
router.delete('/:id',async function(req, res) {
    try{
        const usersJSON = JSON.parse( fs.readFileSync('./db/users.json', 'utf-8'))
        let users = usersJSON.users;
        let id = req.params.id.toString();
    
        usersJSON.users = users.filter(u => u.id.toString() !== id);
    
        fs.writeFileSync('./db/users.json', JSON.stringify( usersJSON ) );
        return res.json(usersJSON.users)
    } catch (err){
        // console.log(`delete user error: ${err}`)
        return res.status(400).json(err);
    }
});

// 4
router.put('/:id',async function (req, res) {
    // req.body.id should contain id of user for edit
    // all other parameters will be data that should be added
    // for example ---->>>> let {id, ...data} = req.body
    // after it you should get data from JSON
    // find user by id in this data
    // update fields (replace the value)
    // and save new data
    // don't forget about validation, etc
   
});

module.exports = router;
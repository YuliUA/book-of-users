const isEmail = function(email){
    let result=/\S+@\S+\.\S+/.test(email)
    // \S no spaces
    return result
}

const isValidPassword = function(password){
    let result = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password)
    // ^ string starts with this
    //(?=.*[a-z]) password contains at least one symbol from a to z(lowercase)
    //(?=.*[A-Z]) password contains at least one symbol from A to Z(uppercase)
    //(?=.*[0-9]) password contains at least one symbol from 0 to 9
    //(?=.{8,}) password length must be 8 or more symbols
    return result
} 

const isEmpty = function(value){
   return value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0)
   || (typeof value === 'string' && value.trim().length === 0);

}

module.exports={
    isEmail,
    isValidPassword,
    isEmpty
}
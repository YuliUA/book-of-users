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
const isValidTime = function(time){
    // time format YYYY-MM-DD,HH:MM
    let result = /^\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1]),[01]?[0-9]|2[0-3]:[0-5][0-9]$/.test(time);
    return result
}
module.exports={
    isEmail,
    isValidPassword,
    isEmpty,
    isValidTime
}
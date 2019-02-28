// put all common staff here
const { isEmail, isValidPsssword, isEmpty } = require('./common');
// messages and errors in one place
const UserEnum = require('../enums/user');
// errors in one place, we will define them
const { ValidationError } = require('../errors/Errors');

module.exports = function validateRegisterInput(data) {
  const errors = {};

  if (isEmpty(data.firstname)) {
    errors.firstname = UserEnum.error.firstNameEmpty;
  }
  if (isEmpty(data.lastname)) {
    errors.lastname = UserEnum.error.lastnameEmpty;
  }
  if (isEmpty(data.email)) {
    errors.email = UserEnum.error.emailEmpty;
  } else if (!isEmail(data.email)) {
    errors.email = UserEnum.error.emailInvalid;
  }
  if (isEmpty(data.password)) {
    errors.password = UserEnum.error.passwordEmpty;
  } else if (isValidPsssword(data.password) !== true) {
    errors.password = UserEnum.error.passwordInvalid;
  }
  if (isEmpty(data.password2)) {
    errors.password2 = UserEnum.error.password2Empty;
  } else if (data.password !== data.password2) {
    errors.password2 = UserEnum.error.password2NotMatch;
  }

  if (!isEmpty(errors)) {
    throw new ValidationError('Errors during validation of input fields', errors);
  }
};
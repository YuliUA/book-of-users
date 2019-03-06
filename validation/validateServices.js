const {isValidTime, isEmpty} = require('./common');

const ServiceEnum = require('../enums/services');
const ValidationError = require('../errors/Errors');

module.exports = function validateServices(data) {
    const errors = {};

    if (isEmpty(data.title)) {
        errors.title = ServiceEnum.error.titleEmpty
    }
    if (isEmpty(data.description)) {
        errors.description = ServiceEnum.error.descriptionEmpty
    }
    if (isEmpty(data.time)) {
        errors.time = ServiceEnum.error.timeEmpty
    } else if (isValidTime !== true) {
        errors.time = ServiceEnum.error.timeInvalid
    }

    if (isEmpty(errors)) {
        throw new ValidationError('Errors during validation of input fields', errors)
    }
}
const mongoose = require('mongoose');


const validateUserId = (id) => {
     const isValid = mongoose.Types.ObjectId.isValid(id);
     if(!isValid)  throw new Error("Invalid Id or not found");
}

module.exports = validateUserId;
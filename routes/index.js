const express = require('express');

const { 
  getUserDataById,
  updateUserAddressById,
  createuserid,
  deleteuserid
 } = require('../controllers');

const router = express.Router();

router.get('/get-user-data/:id', getUserDataById);
router.put('/update-user-address/:id', updateUserAddressById);
router.get('/get-create-user',createuserid);
router.delete('/delete-user/:id',deleteuserid);


module.exports = {
  router
}
const express = require('express');
const router = express.Router();
const { createAdminValidation, findByIdValidation, updateAdminValidation, deleteAdminValidation, loginAdminValidation } = require('../middleware/validators/adminValidator');
const { adminRegister, fetchAdmins, fetchAdminById, updateAdmin, deleteAdmin, adminLogin } = require('../controllers/adminController');

router.post('/create', createAdminValidation, adminRegister);
router.get('/fetchAdmins', fetchAdmins);
router.get('/fetchAdmin/:id?', findByIdValidation, fetchAdminById);
router.put('/updateAdmin/:id?', updateAdminValidation, updateAdmin);
router.delete('/deleteAdmin/:id?', deleteAdminValidation, deleteAdmin);
router.post('/adminLogin', loginAdminValidation, adminLogin);

module.exports = router;
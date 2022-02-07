const express = require('express');
const router = express.Router();

const actions = require('../actions/actions');

//pobieranie menu
router.get('/menu', actions.getMenu);
//pobieranie dania
router.get('/menu/:id', actions.getDish);
//zapisywanie
router.post('/menu', actions.saveMenu);
//edytowanie
router.put('/menu/:id', actions.updateDish);
//usuwanie
router.delete('/menu/:id', actions.deleteDish);

//Order
router.get('/order', actions.getAllOrder);
router.get('/order/:id', actions.getOrder);
router.post('/order', actions.createOrder);
router.post('/order/:id', actions.addToOrder);
router.put('/order/:id', actions.updateOrder);
router.delete('/order/:id', actions.deleteOrder);

module.exports = router;
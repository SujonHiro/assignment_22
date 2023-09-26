const express=require('express');
const router=express.Router();

const adminController=require('../controllers/adminController');
const cartController=require('../controllers/cartController');
const CategoryController=require('../controllers/categoryController');
const customerController=require('../controllers/customerController');
const orderController=require('../controllers/orderController');
const productController=require('../controllers/productController');
const postController=require('../controllers/postController');
const paymentController=require('../controllers/paymentController');
const order_itemController=require('../controllers/order_itemController');
const shipmentController=require('../controllers/shipmentController');
const userController=require('../controllers/userController');
const subAdminController=require('../controllers/subAdminController');
const wishlistController=require('../controllers/wishlistController');

//adminController
router.get('/create',adminController.create);
router.get('/read',adminController.read);
router.get('/update',adminController.update);
router.get('/delete',adminController.delete);

//cartController
router.get('/create',cartController.create);
router.get('/read',cartController.read);
router.get('/update',cartController.update);
router.get('/delete',cartController.delete);

//CategoryController
router.get('/create',CategoryController.create);
router.get('/read',CategoryController.read);
router.get('/update',CategoryController.update);
router.get('/delete',CategoryController.delete);

//customerController
router.get('/create',customerController.create);
router.get('/read',customerController.read);
router.get('/update',customerController.update);
router.get('/delete',customerController.delete);

//orderController
router.get('/create',orderController.create);
router.get('/read',orderController.read);
router.get('/update',orderController.update);
router.get('/delete',orderController.delete);

//paymentController
router.get('/create',paymentController.create);
router.get('/read',paymentController.read);
router.get('/update',paymentController.update);
router.get('/delete',paymentController.delete);

//order_itemController
router.get('/create',order_itemController.create);
router.get('/read',order_itemController.read);
router.get('/update',order_itemController.update);
router.get('/delete',order_itemController.delete);

//productController
router.get('/create',productController.create);
router.get('/read',productController.read);
router.get('/update',productController.update);
router.get('/delete',productController.delete);


//postController
router.get('/create',postController.create);
router.get('/read',postController.read);
router.get('/update',postController.update);
router.get('/delete',postController.delete);

//shipmentController
router.get('/create',shipmentController.create);
router.get('/read',shipmentController.read);
router.get('/update',shipmentController.update);
router.get('/delete',shipmentController.delete);

//subAdminController
router.get('/create',subAdminController.create);
router.get('/read',subAdminController.read);
router.get('/update',subAdminController.update);
router.get('/delete',subAdminController.delete);

//userController
router.get('/create',userController.create);
router.get('/read',userController.read);
router.get('/update',userController.update);
router.get('/delete',userController.delete);


//wishlistController
router.get('/create',wishlistController.create);
router.get('/read',wishlistController.read);
router.get('/update',wishlistController.update);
router.get('/delete',wishlistController.delete);

module.exports=router;
import Product from '../models/product.model.js';
import extend from 'lodash/extend.js';
import errorHandler from './error.controller.js';

const create = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    return res.status(200).json({
      message: "Product successfully created!"
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const productByID = async (req, res, next, id) => {
  try {
    let product = await Product.findById(id);
    if (!product)
      return res.status('400').json({
        error: "Product not found"
      });
    req.product = product;
    next();
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve product"
    });
  }
};

const read = (req, res) => {
  return res.json(req.product);
};

const list = async (req, res) => {
  try {
    let products = await Product.find().select('name description price quantity category updated created');
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const update = async (req, res) => {
  try {
    let product = req.product;
    product = extend(product, req.body);
    product.updated = Date.now();
    await product.save();
    res.json(product);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const remove = async (req, res) => {
  try {
    let product = req.product;
    let deletedProduct = await product.remove();
    res.json(deletedProduct);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const listPublished = async (req, res) => {
    try {
      let products = await Product.find({ published: true });
      res.json(products);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
  };
  
  const findByName = async (req, res) => {
    try {
      let products = await Product.find({ name: { $regex: req.query.name, $options: "i" } });
      res.json(products);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
  };
  export default { create, productByID, read, list, update, remove, listPublished, findByName };

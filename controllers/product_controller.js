const productService = require('../services/product_service');

const getAllProductController = (connection) => async (req, res) => {
  try {
    const services = await productService.getAllProductServices(connection);
    res.status(200).json(services);
    console.log('get all controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error retrieving web design services'
    });
  }
}

const getProductServiceByIdController = (connection) => async (req, res) => {
  try {
    const serviceId = req.params.id;
    const service = await productService.getProductServiceById(connection, serviceId);
    res.status(200).json(service);
    console.log('get one controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error retrieving web design service'
    });
  }
};

const postProductServiceController = (connection) => async (req, res) => {
  try {
    const { name, description, category, price, image_url  } = req.body;
    const newService = {  name, description, category, price, image_url };
    const result = await productService.postProductService(connection, newService);
    res.status(201).json({
      message: 'Web design service created',
      serviceId: result.insertId
    });
    console.log('post controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error creating web design service'
    });
    console.log(req.body);
  }
};

const updateProductServiceController = (connection) => async (req, res) => {
  try {
    const serviceId = req.params.id;
    console.log('serviceId', serviceId)
    const {  name, description, category, price, image_url } = req.body;
    const updatedService = {  name, description, category, price, image_url };
    const result = await productService.updateProductService(connection, serviceId, updatedService);
    res.status(200).json({
      message: 'Web design service updated',
      affectedRows: result.affectedRows
    });
    console.log('update controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating web design service'
    });
    console.log(req.body)
  }
};


const deleteProductServiceController = (connection) => async (req, res) => {
  try {
    const serviceId = req.params.id;
    const result = await productService.deleteProductService(connection, serviceId);
    res.status(200).json({
      message: 'Web design service deleted',
      affectedRows: result.affectedRows
    });
    console.log('delete controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error deleting web design service'
    });
  }
};

module.exports = {
  getAllProductController,
  getProductServiceByIdController,
  postProductServiceController,
  updateProductServiceController,
  deleteProductServiceController
};
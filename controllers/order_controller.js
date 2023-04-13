const orderService = require('../services/order_service');

const getAllOrderController = (connection) => async (req, res) => {
  try {
    const services = await orderService.getAllOrderServices(connection);
    res.status(200).json(services);
    console.log('get all order controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error retrieving order services'
    });
  }
}

const getOrderServiceByIdController = (connection) => async (req, res) => {
  try {
    const serviceId = req.params.id;
    const service = await orderService.getOrderServiceById(connection, serviceId);
    res.status(200).json(service);
    console.log('get one controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error retrieving order service'
    });
  }
};

const postOrderServiceController = (connection) => async (req, res) => {
  try {
    const {
      customer_name,
      customer_email,
      customer_phone,
      payment_method,
      payment_reference,
      order_status,
      product_id,
      order_date,
      country,
      city,
      street_address,
      postal_code
    } = req.body;
    const newService = {
      customer_name,
      customer_email,
      customer_phone,
      payment_method,
      payment_reference,
      order_status,
      product_id,
      order_date,
      country,
      city,
      street_address,
      postal_code
    };
    const result = await orderService.postOrderService(connection, newService);
    res.status(201).json({
      message: 'Order service created',
      serviceId: result.insertId
    });
    console.log('post controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error creating order service'
    });
    console.log(req.body);
  }
};

const updateOrderServiceController = (connection) => async (req, res) => {
  try {
    const serviceId = req.params.id;
    console.log('serviceId', serviceId)
    const {
      customer_name,
      customer_email,
      customer_phone,
      payment_method,
      payment_reference,
      order_status,
      product_id,
      order_date,
      country,
      city,
      street_address,
      postal_code
    } = req.body;
    const updatedService = {
      customer_name,
      customer_email,
      customer_phone,
      payment_method,
      payment_reference,
      order_status,
      product_id,
      order_date,
      country,
      city,
      street_address,
      postal_code
    };
    const result = await orderService.updateOrderService(connection, serviceId, updatedService);
    res.status(200).json({
      message: 'order service updated',
      affectedRows: result.affectedRows
    });
    console.log('update controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating order service'
    });
    console.log(req.body)
  }
};


const deleteOrderServiceController = (connection) => async (req, res) => {
  try {
    const serviceId = req.params.id;
    const result = await orderService.deleteOrderService(connection, serviceId);
    res.status(200).json({
      message: 'order service deleted',
      affectedRows: result.affectedRows
    });
    console.log('delete controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error deleting order service'
    });
  }
};

module.exports = {
  getAllOrderController,
  getOrderServiceByIdController,
  postOrderServiceController,
  updateOrderServiceController,
  deleteOrderServiceController
};
const webDesignService = require('../services/web_design_service');

const getAllWebDesignController = (connection) => async (req, res) => {
  try {
    const services = await webDesignService.getAllWebDesignServices(connection);
    res.status(200).json(services);
    console.log('web-design controller running')
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error retrieving web design services'
    });
  }
}

const getWebDesignServiceByIdController = (connection) => async (req, res) => {
  try {
    const serviceId = req.params.id;
    const service = await webDesignService.getWebDesignServiceById(connection, serviceId);
    res.status(200).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error retrieving web design service'
    });
  }
};

const postWebDesignServiceController = (connection) => async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newService = { name, description, price };
    const result = await webDesignService.postWebDesignService(connection, newService);
    res.status(201).json({
      message: 'Web design service created',
      serviceId: result.insertId
    });
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error creating web design service'
    });
    console.log(req.body);
  }
};

const updateWebDesignServiceController = (connection) => async (req, res) => {
  try {
    const serviceId = req.params.id;
    const updatedService = req.body;
    const result = await webDesignService.updateWebDesignService(connection, serviceId, updatedService);
    res.status(200).json({
      message: 'Web design service updated',
      affectedRows: result.affectedRows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating web design service'
    });
  }
};

const deleteWebDesignServiceController = (connection) => async (req, res) => {
  try {
    const serviceId = req.params.id;
    const result = await webDesignService.deleteWebDesignService(connection, serviceId);
    res.status(200).json({
      message: 'Web design service deleted',
      affectedRows: result.affectedRows
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error deleting web design service'
    });
  }
};

module.exports = {
  getAllWebDesignController,
  getWebDesignServiceByIdController,
  postWebDesignServiceController,
  updateWebDesignServiceController,
  deleteWebDesignServiceController
};
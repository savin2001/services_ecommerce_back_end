const getAllOrderServices = async (connection) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM orders';
      connection.query(query, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
      console.log('order service running')
    });
  };
  
  const getOrderServiceById = async (connection, serviceId) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM orders WHERE order_id = ?';
      connection.query(query, [serviceId], (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
      console.log('order service running')
    });
  };
  
  const postOrderService = async (connection, service) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO orders SET ?';
      connection.query(query, service, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
      console.log('order service running')
    });
  };
  
  const updateOrderService = async (connection, serviceId, updatedService) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE orders SET ? WHERE order_id = ?';
      connection.query(query, [updatedService, serviceId], (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
      console.log('order service running')
    });
  };
  
  const deleteOrderService = async (connection, serviceId) => {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM orders WHERE order_id = ?';
      connection.query(query, serviceId, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
      console.log('order service running')
    });
  };
  
  module.exports = {
    getAllOrderServices,
    getOrderServiceById,
    postOrderService,
    updateOrderService,
    deleteOrderService
  };
const getAllProductServices = async (connection) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM products';
    connection.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    console.log('products service running')
  });
};

const getProductServiceById = async (connection, serviceId) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM products WHERE product_id = ?';
    connection.query(query, [serviceId], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
    console.log('products service running')
  });
};

const postProductService = async (connection, service) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO products SET ?';
    connection.query(query, service, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    console.log('products service running')
  });
};

const updateProductService = async (connection, serviceId, updatedService) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE products SET ? WHERE product_id = ?';
    connection.query(query, [updatedService, serviceId], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    console.log('products service running')
  });
};

const deleteProductService = async (connection, serviceId) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM products WHERE product_id = ?';
    connection.query(query, serviceId, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    console.log('products service running')
  });
};

module.exports = {
  getAllProductServices,
  getProductServiceById,
  postProductService,
  updateProductService,
  deleteProductService
};
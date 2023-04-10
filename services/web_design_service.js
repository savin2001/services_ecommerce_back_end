const getAllWebDesignServices = async (connection) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM web_design';
    connection.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    console.log('web-design service running')
  });
};

const getWebDesignServiceById = async (connection, serviceId) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM web_design WHERE id = ?';
    connection.query(query, [serviceId], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
    console.log('web-design service running')
  });
};

const postWebDesignService = async (connection, service) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO web_design SET ?';
    connection.query(query, service, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    console.log('web-design service running')
  });
};

const updateWebDesignService = async (connection, serviceId, updatedService) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE web_design SET ? WHERE id = ?';
    connection.query(query, [updatedService, serviceId], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    console.log('web-design service running')
  });
};

const deleteWebDesignService = async (connection, serviceId) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM web_design WHERE id = ?';
    connection.query(query, serviceId, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    console.log('web-design service running')
  });
};

module.exports = {
  getAllWebDesignServices,
  getWebDesignServiceById,
  postWebDesignService,
  updateWebDesignService,
  deleteWebDesignService
};
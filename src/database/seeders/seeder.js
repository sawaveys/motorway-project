'use strict';

const carMakes = ['Porche', 'volkswagen', 'Audi', 'Ford', 'SUV', 'BMW'];
const carModels = ['1', '2', '3', '4', '5', '6'];

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vehicles', [{
    make: carMakes[Math.floor(Math.random()*carMakes.length)],
    model: carModels[Math.floor(Math.random()*carMakes.length)],
    createdAt: new Date(). toISOString (),
    updatedAt: new Date(). toISOString ()
     }], {});
    
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehicles');
  }
};





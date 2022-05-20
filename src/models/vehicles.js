import { Model } from 'sequelize';
import { sequelize } from "../models";

const PROTECTED_ATTRIBUTES = ['password'];

export default (sequelize, DataTypes) => {
  class Vehicles extends Model {
    toJSON() {
      // hide protected fields
      const attributes = { ...this.get() };
      // eslint-disable-next-line no-restricted-syntax
      for (const a of PROTECTED_ATTRIBUTES) {
        delete attributes[a];
      }
      return attributes;
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(vehicles) {
      // define association here
    }
  };
  
  Vehicles.init({
    // id: DataTypes.INTEGER,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Vehicles',
  });
  return Vehicles;
};


'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Books', {
    // id: deve ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // title: deve ser do tipo string e não pode ser nulo;
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // author: deve ser do tipo string e não pode ser nulo;
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // pageQuantity: deve ser do tipo integer e pode ser nulo;
    pageQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // createdAt: deve ser do tipo date e não pode ser nulo;
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    // updatedAt: deve ser do tipo date e não pode ser nulo;
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Books');
  }
}


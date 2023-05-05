const { Address, Employee } = require('../models');

const getAll = async () => {
  // O campo include diz ao Sequelize quais serão as configurações da requisição.
  // A propriedade model se refere a qual tabela será utilizada.
  // Já a propriedade as deve ser igual à que declaramos no momento da criação da associação no respectivo model.
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}

module.exports = {
  getAll,
  getById,
};
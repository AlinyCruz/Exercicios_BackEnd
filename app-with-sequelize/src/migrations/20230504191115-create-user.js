'use strict';
// O queryInterface é usado pela biblioteca para modificar o banco de dados.
// O objeto Sequelize armazena os tipos de dados disponíveis no contexto do banco,
// por exemplo varchar, string, integer, date etc.

module.exports = {
  // Podemos criar a tabela Users através da função createTable do queryInterface. 
  // A função createTable recebe dois parâmetros:
  // O primeiro recebe uma string com o nome da tabela;
  // O segundo recebe um objeto com os campos, e suas condições, da tabela.

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
    // allowNull: Define se o campo pode ou não receber um valor null;
    // autoIncrement: Define se o campo vai ter incremento automático;
    // primaryKey: Define se o campo é uma chave primária;
    // type: Define o tipo do campo, por exemplo STRING, INTEGER, DATE, etc.

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fullName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
  },

  // Agora vamos implementar o bloco de reversão (down) com um código que vai apenas apagar a tabela
  // caso seja necessário desfazer a operação de execução (up).
  // Assim escreveremos uma migration perfeitamente reversível!
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return Promise.all([
            queryInterface.addColumn(
                "Classes", // table name
                "numberStudent", // new field brand
                {
                    allowNull: false,
                    type: Sequelize.INTEGER,
                }
            ),
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return Promise.all([
            queryInterface.removeColumn("Classes", "numberStudent"),
        ]);
    },
};

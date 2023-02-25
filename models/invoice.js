module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "invoice",
    {
      invoice_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "client",
          key: "client_id",
        },
      },
      invoice_number: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
      invoice_financial_year: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      invoice_data: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
      },
      query_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: "query",
          key: "query_id",
        },
      },
    },
    {
      sequelize,
      tableName: "invoice",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "invoice_id" }],
        },
        {
          name: "invoice_id_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [{ name: "invoice_id" }],
        },
        {
          name: "client_id_idx",
          using: "BTREE",
          fields: [{ name: "client_id" }],
        },
        {
          name: "query_id_idx",
          using: "BTREE",
          fields: [{ name: "query_id" }],
        },
      ],
    }
  );
};

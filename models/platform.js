module.exports = function(sequelize, DataTypes) {
    const Console = sequelize.define("Console", {
      PS5: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      XboxOne: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      XboxSeries: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Switch: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      PS4: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      PC: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });

    Console.associate = (models) => {
      Console.belongsTo(models.User)
    }
    return Console;
  };
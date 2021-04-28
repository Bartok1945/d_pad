module.exports = function(sequelize, DataTypes) {
    const Genre = sequelize.define("Genre", {
      Action: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Adventure: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      RPG: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Shooter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Strategy: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      Sports: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    });
    return Genre;
  };
  
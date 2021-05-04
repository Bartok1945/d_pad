module.exports = function(sequelize, DataTypes) {
    const Likes = sequelize.define("Likes", {      
      game: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    Likes.associate = (models) => {
      Likes.belongsTo(models.User)
    }

    return Likes;
  };
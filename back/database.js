import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/collection')
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export const Tome = sequelize.define('tome', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img:{
        type: DataTypes.STRING,
        allowNull: false
    },
    resume:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false
    }

});
export const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
});
User.sync();
Tome.sync();
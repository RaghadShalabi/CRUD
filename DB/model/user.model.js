import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
import BlogModel from './blog.model.js';

const UserModel = sequelize.define('User', {
    /*id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },*/
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(90),
        allowNull: false,
    },
    confirmEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    IsAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    age: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false,
});
UserModel.hasMany(BlogModel, {
    onDelete: 'CASCADE',
})
BlogModel.belongsTo(UserModel);

export default UserModel;



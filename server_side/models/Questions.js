import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Questions = db.define('allquestions',{
    userid: {
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    question: {
        type: DataTypes.STRING
    },
    tags: {
        type: DataTypes.STRING
    },
    createdAt: {    
        field: 'createdat', 
        type: DataTypes.DATE
    },
    updatedAt: {   
        field: 'updatedat',
        type: DataTypes.DATE
    }
}, {freezeTableName: true})

export default Questions;




    


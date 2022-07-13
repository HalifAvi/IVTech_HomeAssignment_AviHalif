import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Answers = db.define('allanswers',{
    userid: {
        type: DataTypes.INTEGER
    },
    questionid: {
        type: DataTypes.INTEGER
    },
    nickname: {
        type: DataTypes.INTEGER
    },
    answer: {
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

export default Answers;




    


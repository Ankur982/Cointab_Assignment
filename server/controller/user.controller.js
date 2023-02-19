const userModel = require("../models/userDetails.models");
const axios = require("axios");

const postUsers = async (req, res) => {
    try {
        const { data } = await axios.get("https://randomuser.me/api/?results=100");

        console.log(data);

        const newUser = await userModel.insertMany(data.results)

        res.status(200).send({ status: "success", users: newUser })

    } catch (err) {

        res.status(500).send({ status: "error", message: err.message });

    }
};




const getUsers = async (req, res) => {
    let page = +(req.query.page)
    console.log(page)
    let skipUser = (page-1)*10
    try {

        const allUsers = await userModel.find().limit(10).skip(skipUser)

        res.status(200).send({ status: "success", users: allUsers })

    } catch (err) {

        res.status(500).send({ status: "error", message: err.message })

    }
};



const deleteAllUsers = async (req, res) => {

    try {
        await userModel.deleteMany();

        res.status(200).send({ status: "success" });

    } catch (err) {

        res.status(500).send({ status: "error", message: err.message });

    }
};





module.exports = { postUsers, getUsers, deleteAllUsers };
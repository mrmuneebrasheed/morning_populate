const mongoose = require("mongoose");
const studentModel = require("./models/studentModel");
const addressModel = require("./models/addressModel");
const util = require("util");

const address = {
    streetName: "Rue Henri Janin",
    streetNumber: "7",
    postCode: "94190",
    city: "Villeneuve Saint Georges",
};

// console.log(address, addressID);
const student = {
    name: "Muneeb Rasheed",
    age: 22,
    class: "BTS",
    level: "Bac+2",
    gender: "M",
    mark: "Nothing",
    address: "",
};

function saveStudentData(student, address) {
    const newStudent = new studentModel(student);
    const newAddress = new addressModel(address);
    newStudent.address = newAddress._id;
    newAddress.save().then(console.log("Address Added successfully"));
    newStudent.save().then(console.log("Student added successfully"));
}
// saveStudentData(student, address);
// studentModel.deleteMany().then(console.log("students deleted"));
// addressModel.deleteMany().then(console.log("address deleted"));

studentModel
    .findById("61644475b497ac8137d46e0d")
    .populate("address")
    .then((students) =>
        console.log(util.inspect(students, true, Infinity, false))
    );

mongoose.connect("mongodb://127.0.0.1:27017/mongoose_populate", (error) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("mongodb connected successfully");
});

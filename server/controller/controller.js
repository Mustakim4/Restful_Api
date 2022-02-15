const Userdb = require("../models/model");

// creating new user
exports.create = async (req, res) => {
  const user1 = new Userdb({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    dob: req.body.dob,
  });

  try {
    const userAdded = await user1.save();
    console.log(userAdded);
    res.status(201).send();
  } catch (error) {
    res.status(400).send(error);
  }
};

// finding all user
exports.find = async (req, res) => {
  try {
    const findingUser = await Userdb.find();
    res.send(findingUser);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

// finding single user
exports.findSingle = async (req, res) => {
  try {
    const singleUser = await Userdb.findById(req.params.id);
    console.log(singleUser);
    res.status(200).send(singleUser);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

// finding and updating single user
exports.update = async (req, res) => {
  try {
    const id = req.params.id;

    const updated = await Userdb.findByIdAndUpdate(id, req.body);
    res.status(200).send(updated);
    console.log(updated);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

// finding and deleting single user
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const deleted = await Userdb.findByIdAndDelete(id);
    if (!id) {
      return res.status(400).send();
    }
    res.send(deleted);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
}
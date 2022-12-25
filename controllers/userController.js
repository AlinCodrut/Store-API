const User = require("../models/User")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, UnauthenticatedError, NotFoundError } = require("../errors")

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({ role: "user" }).select("-password")

  res.status(StatusCodes.OK).json({ allUsers })
}

const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password")

  if (!user) {
    throw new NotFoundError("No user whit the selected id")
  }
  res.status(StatusCodes.OK).json({ user })
}

const showCurrentUsers = async (req, res) => {
  res.send("getting all users")
}

const updateUser = async (req, res) => {
  res.send("updating the user")
}

const updateUserPassword = async (req, res) => {
  res.send("getting all users")
}

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  showCurrentUsers,
  updateUserPassword
}

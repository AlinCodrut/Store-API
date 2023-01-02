const User = require("../models/User")
const Product = require("../models/Product")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, UnauthenticatedError, NotFoundError } = require("../errors")
const { attachCookiesToResponse, createTokenuser, checkPermission } = require("../utilitys")

const getAllProducts = async (req, res) => {
  res.send("GET ALL PRODUCTs")
}

const getSingleProduct = async (req, res) => {
  res.send("get single product")
}

const createProduct = async (req, res) => {
  res.status(200).json("product created")
}

const updateProduct = async (req, res) => {
  res.status(200).json("product updated")
}

const deleteProduct = async (req, res) => {
  res.status(200).json("product deleted")
}

const uploadImage = async (req, res) => {
  res.status(200).json("image upload")
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage
}

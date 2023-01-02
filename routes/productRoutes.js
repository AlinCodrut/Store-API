const express = require("express")
const route = express.Router()
const { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct, uploadImage } = require("../controllers/productController")
const { authenticateUser, authorizePermissions } = require("../middleware/authentication")

route.get("/", getAllProducts)
route.get("/:id", getSingleProduct)
route.post("/uploadImage", authenticateUser, authorizePermissions("admin"), uploadImage)
route.post("/", authenticateUser, authorizePermissions("admin"), createProduct)
route.patch("/:id", authenticateUser, authorizePermissions("admin"), updateProduct)
route.delete("/:id", authenticateUser, authorizePermissions("admin"), deleteProduct)

module.exports = route

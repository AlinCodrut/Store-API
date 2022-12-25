// cu acest middleware controlam tokenul si rertunam userul (authenticateUser)
// tot cu acest token vedem dacare userul este admin (authorizePermissions)
// !!!!!! ORDINEA E FOARTE IMPORTANTA, MAI INTAI VERIFICM TOKEN INCAT SA AVEM ACCES LA OBIECTUL USER, APOI DOAR VERIFICA DE ADMIN

const { UnauthenticatedError, UnauthorizedError } = require("../errors")
const { isTokenValid } = require("../utilitys/jwt")

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token

  if (!token) {
    throw new UnauthenticatedError("Authentication invalid")
  }

  try {
    const { name, userId, role } = isTokenValid({ token })

    req.user = { name, userId, role } // aici redefin obiectul user ce venea in req, si ii atribuim aceleasi valori dar dupa ce a fost verificat tokenul
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid")
  }
  next()
}

const authorizePermissions = async (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new UnauthorizedError("Access denied")
  }
  next()
}

module.exports = { authenticateUser, authorizePermissions }

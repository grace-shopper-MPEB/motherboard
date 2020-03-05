const isAdmin = (req, res, next) => {
  if (!req.user || req.user.isAdmin === false) {
    return next('Sorry, admins only!')
  }
  next()
}

module.exports = {
  isAdmin
}

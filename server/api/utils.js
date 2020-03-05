const isAdmin = (req, res, next) => {
  if (!req.user) {
    return next('Sorry, admins only!')
  }
  next()
}

module.exports = {
  isAdmin
}

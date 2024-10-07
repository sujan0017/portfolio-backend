const roleBaseAuth = (role) => {
  return (req, res, next) => {
    if (!req.user.roles.includes(role)) {
      return res.status(403).send("Forbidden");
    }
    next();
  };
};

export default roleBaseAuth;

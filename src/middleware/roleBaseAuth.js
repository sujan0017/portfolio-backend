const roleBaseAuth = (role) => {
  return (req, res, next) => {
    if (!req.user.roles.includes(role)) {
      return res.status(403).send("Forbidden");
    }
    console.log(req.user.roles, role, req.user);
    next();
  };
};

export default roleBaseAuth;

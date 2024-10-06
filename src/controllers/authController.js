import { createAuthToken } from "../helpers/authHelpers.js";
import authServices from "../services/authServices.js";

const register = async (req, res) => {
  const data = req.body;

  if (!data.name) {
    return res.status(422).send("Name is required.");
  }

  if (!data.email) {
    return res.status(422).send("Email is required.");
  }

  if (!data.password) {
    return res.status(422).send("Password is required.");
  }

  if (data.password !== data.confirmPassword) {
    return res.status(400).send("Passwords do not match");
  }

  if (data.password.length < 8) {
    return res.status(400).send("Password must be at least 8 characters long");
  }

  try {
    const user = await authServices.register(data);

    const authToken = createAuthToken(user)

    res.cookie("authToken", authToken)

   
    res.status(201).json({...user, authToken});
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const login = async (req, res) => {
  const data = req.body;

//no data validation required here for login request

  try {
    const user = await authServices.login(data);

    
    const authToken = createAuthToken(user)

    res.cookie("authToken", authToken)

    res.status(201).json({...user, authToken});
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const logOut = (req, res) => {
  res.clearCookie("authToken");
  res.status(200).send("Logged out successfully");
}


export { register, login, logOut };

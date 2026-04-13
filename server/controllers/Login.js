import login_service from "../services/Login.js";
import bcrypt from "bcrypt";

const verifyLogin = async (req, res) => {
  const payload = req.body;

  try {
    console.log(payload);

    const result = await login_service.verifyLogin(payload);

    if (!result) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    const isMatch = await bcrypt.compare(payload.password, result.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    return res.status(200).json({ message: "Login Successful", user: result });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Error occurred", error: err.message });
  }
};

const login_controllers = {
  verifyLogin,
};

export default login_controllers;

// import login_service from "../services/Login.js";

// const verifyLogin = async(req, res) => {
//     const payload = await req.body
//     try {
//         console.log(payload)
//         login_service.verifyLogin(payload)
//         return res.status(200).json({message:"Login Successful"})

//     }
//     catch (err) {
//         return res.status(400).json({message:"Invalid User ",err})
//     }
// }

// const login_controllers = {
//     verifyLogin
// }

// export default login_controllers;

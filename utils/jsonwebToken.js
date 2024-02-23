const jwtwebToken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const adminReg = require("../models/admin.register")

const secret_key = process.env.secret_key;
const refresh_key = process.env.refreshToken

const jwt = ()=>{
    const accessToken = jwtwebToken.sign({ userId: adminReg.id }, secret_key, { expiresIn: '15m' });
    const refreshToken = jwtwebToken.sign({ userId: adminReg.id }, refresh_key);
}

const refresh_Token = async (req, res) => {
    const refreshToken = req.body.refreshToken;
  
    // Verify the refresh token
    jwtwebToken.verify(refreshToken, refresh_key, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid refresh token' });
      }
      // Generate a new access token
      const accessToken = jwtwebToken.sign({ userId: user.userId }, secret_key, { expiresIn: '15m' });
      res.json({ accessToken });
    });
  }
  


module.exports = { jwt,refresh_Token }



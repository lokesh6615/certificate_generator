const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('dotenv').config().parsed;
const User = require('../models/users');

exports.checkLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        role: user.RoleId
      },
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (error, token) => {
      if (error) throw error;
      user["password"] = undefined;
      let userInfo = {
        id: user.id,
        username: user.username,
        role: user.RoleId
      };
      res.json({ token, user});
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  } 
};


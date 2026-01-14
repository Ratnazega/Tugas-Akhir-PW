const jwt = require('jsonwebtoken');
const { User } = require('../models');

/* Halaman login */
exports.loginPage = (req, res) => {
  res.render('login', { error: '' }); // selalu kirim error
};

/* Proses login */
exports.loginProcess = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render('login', { error: 'Username dan password wajib diisi' });
  }

  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.render('login', { error: 'Username atau password salah' });
  }

  if (user.password.trim() !== password.trim()) {
    return res.render('login', { error: 'Username atau password salah' });
  }

  // buat JWT
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );

  // simpan cookie
  res.cookie('token', token, { httpOnly: true });

  // redirect ke dashboard
  res.redirect('/dashboard');
};

/* Logout */
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
};

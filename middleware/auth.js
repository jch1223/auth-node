const { User } = require("../models/user");

let auth = (req, res, next) => {
  // 인증 처리 미들웨어
  // 클라이언트 쿠키에서 토큰을 가져온다
  let token = req.cookies.x_auth;

  // 토큰은 디코드해서 유저를 찾는다
  User.findByToken(token, function (err, user) {
    if (err) return res.status(400).send(err);
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
  // 유저가 있으면 인증 ok
  // 유저가 없으면 인증 no
};

module.exports = { auth };

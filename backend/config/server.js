require("dotenv").config();

module.exports = ({ env }) => ({
  host: env("HOST", process.env.HOST),
  port: env.int("PORT", process.env.PORT || 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", process.env.ADMIN_JWT_SECRET),
    },
  },
});

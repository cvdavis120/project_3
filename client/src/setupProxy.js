const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy(["/api", "/auth/google"], { target: "http://localhost:5000" }));
  app.use(proxy(["/api", "/auth/logout"], { target: "http://localhost:5000" }));
  app.use(
    proxy(["/api", "/login/newadmin"], { target: "http://localhost:5000" })
  );
  app.use(
    proxy(["/api", "/login/checkLoggedIn"], { target: "http://localhost:5000" })
  );
  app.use(
    proxy(["/api", "/event/addevent"], { target: "http://localhost:5000" })
  );
};

//const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);
// Static directory
app.use(express.static("/public"));

// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

httpServer.listen(8080);
httpsServer.listen(8443);
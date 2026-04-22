require("dotenv").config();
const FtpDeploy = require("ftp-deploy");
const path = require("path");

const deploy = new FtpDeploy();

const config = {
  host: process.env.FTP_HOST,
  port: parseInt(process.env.FTP_PORT) || 21,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  remoteRoot: process.env.FTP_REMOTE_PATH || "/",
  localRoot: path.join(__dirname, "../dist"),
  include: ["**/*"],
  exclude: [
    "**/node_modules/**",
    "**/.git/**",
    "**/pagefind/**",
    "**/*.map",
    "**/.DS_Store",
    "**/robots.txt",
  ],
  deleteRemoteAll: false,
  forcePasv: true,
  logLevel: "info",
};

console.log("🚀 Iniciando deploy FTP...");
console.log(`📁 Subiendo contenido de: ${config.localRoot}`);
console.log(`🌐 Servidor: ${config.host}:${config.port}`);
console.log(`📂 Ruta remota: ${config.remoteRoot}`);

deploy.on("uploading", (data) => {
  console.log(
    `📤 Subiendo: ${data.filename} (${data.transferred} / ${data.total})`,
  );
});

deploy.on("uploaded", (data) => {
  console.log(`✅ Subido: ${data.filename}`);
});

deploy
  .deploy(config)
  .then(() => {
    console.log("✅ Deploy completado exitosamente!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Error en el deploy:", err.message);
    process.exit(1);
  });

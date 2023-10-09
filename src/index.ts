import app from "./external/api/config";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import RepositorioUsuarioPrismaPg from "./external/prisma/RepositorioUsuarioPrismaPg";
import ConsultarUsuarios from "./core/usuario/service/ConsultarUsuarios";
import ConsultarUsuariosController from "./adapters/ConsultarUsuariosController";
import ConsultarUsuarioPorId from "./core/usuario/service/ConsultarUsuarioPorId";
import ConsultarUsuarioPorIdController from "./adapters/ConsultarUsuarioPorIdController";


app.get("/", () => "API Rest Cadastro de Usuários");

//Registrar Rotas
const repositorioUsuario = new RepositorioUsuarioPrismaPg();

const registrarUsuario = new RegistrarUsuario(repositorioUsuario);
new RegistrarUsuarioController(app, registrarUsuario);

const consultarUsuarios = new ConsultarUsuarios(repositorioUsuario);
new ConsultarUsuariosController(app, consultarUsuarios);

const consultarUsuarioPorId = new ConsultarUsuarioPorId(repositorioUsuario);
new ConsultarUsuarioPorIdController(app, consultarUsuarioPorId);


app.listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

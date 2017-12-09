import Signin from "./components/signin.js";
import Signup from "./components/signup.js";

class App {
	constructor(body) {
		this.signin = new Signin(body);
		this.signup = new Signup(body);
	}
	init() {                 //renderiza a tela inicial
		this.signin.render();
		this.addEventListener();
	}
	addEventListener() {     //executa os métodos que estão encapsulados
		this.signinEvents();
		this.signupEvents();
	}
	signinEvents() {
		this.signin.on("error", () => alert("Erro de autenticação"));
		this.signin.on("signin", (token) => {
			localStorage.setItem("token", `JWT ${token}`);
			alert("Você esta autenticado!");
		});
		this.signin.on("signup", () => this.signup.render());
	}
	signupEvents() {
		this.signup.on("error", () => alert("Erro no cadastro"));
		this.signup.on("signup", (user) => {
			alert(`${user.name} você foi cadastrado com sucesso!`);
			this.signin.render();
		});
	}
}
module.exports = App;
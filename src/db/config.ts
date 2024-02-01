export default {
	mongo: {
		protocolo: "mongodb+srv:",
		usuario: "helios",
		senha: "b3EYEg5Xj2jw6U3c85o7L6CwWQ2Q8F9tWxJEPK70d1HsW5eAxDXbAQmUiiL7zOU",
		servidor: "elmd-aurora-01.9txz8.mongodb.net",
		banco: "aurora-bbx-dev",
		get url(): string {
			return `${this.protocolo}://${this.usuario}:${this.senha}@${this.servidor}`;
		},
	},
};

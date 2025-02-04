import { Component } from "react";

// Définition du composant de classe RegisterForm
class RegisterForm extends Component {
    constructor(props) {
        super(props);

        // Initialiser l'état avec les champs vides
        this.state = {
            username: "",
            password: "",
            message: "",
        };
    }

    // Méthode pour mettre à jour l'état en fonction de la saisie utilisateur
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // Méthode pour gérer la soumission du formulaire
    handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;

        // Vérifier que le mot de passe n'est pas vide
        if (password.trim() === "") {
            this.setState({ message: "Le mot de passe ne peut pas être vide" });
            return;
        }

        // Mettre à jour l'état avec un message de confirmation
        this.setState({
            message: `Inscription validée pour ${username}`,
            username: "",
            password: "",
        });
    };

    // Méthode de rendu du composant
    render() {
        return (
            <div>
                <h2>Formulaire d'Inscription</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Nom d'utilisateur"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">S'inscrire</button>
                </form>
                {this.state.message && <p>{this.state.message}</p>}
            </div>
        );
    }
}

export default RegisterForm;

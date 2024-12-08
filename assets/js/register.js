document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registerForm');
    const mensagem = document.getElementById('mensagem');

    const apiService = new ApiService('http://localhost:8000/api');
    const userService = new UserService(apiService);
    const formValidator = new FormValidator();

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const user = FormDataHandler.getRegistrationData();

        const validationMessage = formValidator.validateUserRegistration(user);
        if (validationMessage) {
            mensagem.textContent = validationMessage;
            return;
        }

        userService.register(user)
            .then(() => {
                mensagem.textContent = `Usuário ${user.name} foi cadastrado com sucesso! Bem-vindo(a)!`;
                form.reset();
            })
            .catch(error => {
                mensagem.textContent = error.message;
            });
    });
});

// Serviço de API
class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    post(endpoint, data) {
        return fetch(`${this.baseURL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) {
                return response.json().then(err => {
                    throw new Error(err.message || 'Erro na API.');
                });
            }
            return response.json();
        });
    }
}

// Serviço de Usuário
class UserService {
    constructor(apiService) {
        this.apiService = apiService;
    }

    register(user) {
        return this.apiService.post('/cadastrar', user).then(data => {
            if (data.status !== 200) {
                throw new Error(data.message || 'Erro no cadastro.');
            }
        });
    }
}

// Validador de Formulário
class FormValidator {
    validateUserRegistration(user) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(user.password)) {
            return 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.';
        }

        if (user.password !== user.password_confirmation) {
            return 'A confirmação da senha não corresponde à senha.';
        }

        return null;
    }
}

// Manipulação de Dados do Formulário
class FormDataHandler {
    static getRegistrationData() {
        return {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            password_confirmation: document.getElementById('password_confirmation').value
        };
    }
}

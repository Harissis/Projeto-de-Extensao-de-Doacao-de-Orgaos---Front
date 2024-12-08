document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('loginForm');
    const mensagem = document.getElementById('mensagem');

    const apiService = new ApiService('http://localhost:8000/api');
    const authService = new AuthService(apiService);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const loginData = FormDataHandler.getLoginData();

        authService.login(loginData)
            .then(user => {
                mensagem.textContent = `Bem-vindo, ${user.name}! Login realizado com sucesso.`;
                window.location.href = 'dashboard.html'; // Exemplo de redirecionamento
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
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na API: ${response.status}`);
                }
                return response.json();
            });
    }
}

// Serviço de Autenticação
class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
    }

    login(loginData) {
        return this.apiService.post('/login', loginData)
            .then(data => {
                if (data.status !== 200) {
                    throw new Error(data.message || 'Erro no login.');
                }
                this.storeUserData(data.usuario);
                return data.usuario;
            });
    }

    storeUserData(usuario) {
        localStorage.setItem('token', usuario.token);
        localStorage.setItem('userId', usuario.id);
    }
}

// Manipulação de Dados do Formulário
class FormDataHandler {
    static getLoginData() {
        return {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
    }
}

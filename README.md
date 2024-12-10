Documentação do Front-end (HTML, CSS, JS)
 Integrantes do Projeto

1. Rafael Alves Harissis
2. Luiz Felipe Santos Freitas
3. Jamilly De Souza Oliveira
4. Fabricio Pereira da Costa Filho


Quero Doar! - Front-end (HTML, CSS, JavaScript)

Quero Doar! é uma plataforma de doação de órgãos que conecta doadores, pontos de coleta e beneficiários. Esta documentação descreve o processo de configuração e execução do front-end da aplicação, que é desenvolvido com HTML, CSS e JavaScript.

Tecnologias Utilizadas
HTML: Para a estruturação das páginas da web.
CSS: Para a estilização e design responsivo.
JavaScript: Para funcionalidades dinâmicas e interatividade na página.
Axios (opcional): Para realizar requisições à API back-end.
Pré-requisitos
Navegador Web para acessar o aplicativo.
Node.js e NPM para compilar os arquivos front-end (caso utilize ferramentas como Webpack ou Vue.js).
Instalação e Configuração

1. Clonar o Repositório
Clone o repositório do front-end para sua máquina local:

bash
Copiar código
git clone https://github.com/Harissis/Projeto-de-Extensao-de-Doacao-de-Orgaos---Front
cd Quero-Doar-frontend


2. Instalar Dependências (Se necessário)
Se você estiver usando ferramentas como Webpack, Babel ou outras dependências para compilar seu código JavaScript e CSS, execute:

bash
Copiar código
npm install


3. Rodar o Servidor de Desenvolvimento
Se estiver usando ferramentas como Webpack ou Vue.js para desenvolvimento, execute o comando abaixo para iniciar o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Isso compilará e iniciará o servidor em http://localhost:8080 ou em outra porta configurada.

4. Acessar o Projeto
O front-end pode ser acessado diretamente através de um navegador, abrindo o arquivo index.html ou, caso esteja rodando com ferramentas como Webpack, acessando o servidor local.

Estrutura de Diretórios

/assets: Contém arquivos estáticos, como imagens e fontes.
/css: Contém arquivos de estilo CSS.
/js: Contém arquivos JavaScript que interagem com a API e controlam a dinâmica da página.
/index.html: Página principal do front-end.

Principais Funcionalidades no Front-end

Cadastro de Doadores: Formulários para que os usuários se cadastrem como doadores, fornecendo informações como nome, endereço, tipo de órgão a ser doado, entre outros.
Login de Usuários: Tela de login para que usuários (doadores ou beneficiários) possam acessar suas contas e realizar ações como doação ou busca de pontos de coleta.
Formulário de Doação: Formulário que permite ao doador fornecer informações sobre os órgãos que ele deseja doar, incluindo dados de contato e disponibilidade.
Interação com API: O front-end comunica-se com o back-end via requisições HTTP (geralmente utilizando Axios ou fetch) para realizar operações como cadastro, login, e envio de dados do formulário.

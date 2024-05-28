Rick and Morty Explorer
Descrição
Rick and Morty Explorer é um aplicativo móvel desenvolvido em React Native com TypeScript e Expo. O aplicativo consome a API pública de Rick and Morty para exibir informações sobre personagens, locais e episódios da série animada.

Tecnologias Utilizadas
React Native: Biblioteca para construção de interfaces móveis.
TypeScript: Superset do JavaScript que adiciona tipagem estática.
Expo: Ferramenta e biblioteca que facilita o desenvolvimento de aplicativos React Native.
Axios: Cliente HTTP para fazer requisições à API.
Funcionalidades
Listar personagens de Rick and Morty.
Visualizar detalhes de um personagem específico.
Navegar entre personagens, locais e episódios.
Interface amigável e responsiva.
Instalação e Uso
Pré-requisitos
Node.js
Expo CLI (npm install -g expo-cli)
Passos para rodar o projeto
Clone o repositório:

bash
Copiar código
git clone (https://github.com/Victor-Silva01/Rick-And-Morty.git)
cd Rick-And-Morty
Instale as dependências:

bash
Copiar código
npm install
Inicie o aplicativo:

bash
Copiar código
expo start
Use um emulador ou o aplicativo Expo Go em seu dispositivo móvel para visualizar o aplicativo.

Estrutura do Projeto
src/components: Componentes reutilizáveis do projeto.
src/screens: Telas principais do aplicativo (Personagens, Locais, Episódios).
src/navigation: Configurações de navegação do aplicativo.
src/services: Configuração da API e chamadas de rede.
API
O aplicativo consome a Rick and Morty API, que é uma API RESTful pública que fornece informações detalhadas sobre os personagens, locais e episódios da série.

Navegação
O projeto usa @react-navigation para a navegação, incluindo navegação em abas e em pilha:

Tab Navigation: Para navegação entre personagens, locais e episódios.
Stack Navigation: Para navegação dentro da seção de personagens, permitindo visualizar detalhes de um personagem específico.

Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

Contato
Para dúvidas ou sugestões, entre em contato:

Email: vens12silva@gmail.com
LinkedIn: https://www.linkedin.com/in/victor-silva-b61b66213/

# Sudoku Mania

## Descrição do Projeto

Sudoku Mania é um projeto Django que oferece uma experiência envolvente para os amantes de Sudoku. A aplicação proporciona funcionalidades como autenticação de usuários, tutoriais, jogabilidade, perfis de usuários e muito mais. Desafie sua mente, aprimore suas habilidades lógicas e desfrute do Sudoku!

## Funcionalidades

- **Login e Registro de Usuários:** Acesse sua conta para salvar seu progresso e personalizar sua experiência de jogo.
- **Tutorial Interativo:** Aprenda as regras e estratégias do Sudoku por meio de um tutorial informativo.
- **Jogabilidade Desafiadora:** Resolva quebra-cabeças de Sudoku em vários níveis de dificuldade.
- **Perfil do Usuário:** Acesse e atualize seu perfil para acompanhar suas conquistas e estatísticas de jogo.
- **Sobre o Sudoku:** Descubra a história fascinante por trás do Sudoku e sua jornada até se tornar um fenômeno global.

## Estrutura de Rotas

- `/`: Página de login (`user_login`)
- `/about`: Página sobre o projeto (`about`)
- `/tutorial`: Página de tutorial (`tutorial`)
- `/home`: Página inicial com informações e links úteis (`home`)
- `/game`: Página de jogo com quebra-cabeças de Sudoku (`game`)
- `/profile`: Página de perfil do usuário (`profile`)
- `/register`: Página de registro de novos usuários (`register`)
- `/logout`: Rota para realizar logout (`user_logout_view`)

## Ambiente Dockerizado

O projeto utiliza o PostgreSQL como banco de dados, dockerizado para facilitar a instalação e configuração. Certifique-se de ter o Docker instalado e execute o seguinte comando para iniciar o ambiente:

```bash
docker-compose up -d
```

## Como Instalar e Executar

1. Clone o repositório:
```bash
git clone https://github.com/Atarian-ByVoid/sudoku_django
```


2. Navegue até o diretório do projeto:
```bash
cd sudoku
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```
4. Aplique as migrações do banco de dados:
```bash
python manage.py migrate
```

5. Execute o servidor de desenvolvimento:
```bash
python manage.py runserver
```




Acesse a aplicação em:

    http://127.0.0.1:8000/.

## Contribuição
Contribuições são bem-vindas! Se você deseja colaborar com o desenvolvimento deste projeto, sinta-se à vontade para abrir issues ou enviar pull requests.

### Licença
Este projeto está sob a licença MIT.
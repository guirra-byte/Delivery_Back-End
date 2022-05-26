# Delivery Back-End🥙💨
`Projeto prático` para alavancar conhecimentos no Back-End, adquiridos no curso intensivo `Ignite`, trilha `Node.Js`

![image](https://user-images.githubusercontent.com/77081114/168168815-c9362e67-f907-4f29-af7e-4b3887806bfc.png)
<hr>

![Captura de Tela (402)](https://user-images.githubusercontent.com/77081114/170145658-1d9a8b2f-5c69-404c-a95c-4f7b6ab12ab1.png)
![Captura de Tela (403)](https://user-images.githubusercontent.com/77081114/170145661-ac25fc70-1c5e-434b-8802-b52c2cd7cbf5.png)
![Captura de Tela (395)](https://user-images.githubusercontent.com/77081114/169154546-c70def4e-6ede-49f1-8672-4ed2c206232c.png)
![Captura de Tela (396)](https://user-images.githubusercontent.com/77081114/169154553-1dc0022b-1ebc-4184-9102-7f203d7f9258.png)
![Captura de Tela (397)](https://user-images.githubusercontent.com/77081114/169154555-279b005a-8a66-4ec4-95c7-11bbad10b309.png)
![Captura de Tela (398)](https://user-images.githubusercontent.com/77081114/169154556-e1b5b52a-415b-4def-9a60-082f1f2f2a05.png)

### Descrição ☝
> Desafio Prático
> que consiste em um sistema de **Clientes**, **Entregadores** e **Pedidos**. Utilizando o `MySQL` Database  e  `Prisma` como ORM..
> praticando **relacionamentos** entre tabelas Many to Many, praticando implemetação de **Autenticação Permissiva** com `JWT`
> As relações muitos-para-muitos referem-se a relações em que zero ou mais registros em um lado da relação podem ser conectados a zero ou mais registros no outro lado.


## Ajustes e melhorias ⚙🛠

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Cadastrar Clientes verificados por Middleware de autenticação
- [x] Gerar Hash de Password
- [x] Cadastrar Entregadores verificados por Middleware de autenticação
- [x] Inserção no Banco de Dados
- [x] Verificação se o Cliente está autenticado (JWT)
- [x] Verificação se o Entregador está autenticado (JWT)
- [x] Implementação de `JWT`
- [x] Relacionamento entre Cliente e Entregas - Many to Many
- [x] Relacionamento entre Entregadores e Entregas - Many to Many
- [ ] Upload de NF (Nota Fiscal)
- [x] Cadastro de Entregas
- [ ] Estado da Entrega - Entregue ou Pendente
- [ ] Avaliação de Entregador

# 💻 Sobre o projeto

Neste projeto, foi colocado em prática conteúdos aprendidos:

- Princípios **`S.O.L.I.D`** usados:

  -   > S - Princípio da Responsabilidade Única
  -   > L - Princípio da Substituição de Liskov
  -   > D - Princípio da Inversão de Dependência
 
- Integração de **API** com **Banco de Dados Relacional** `MySQL` via ORM **`Prisma.io`**
  > Prisma.io deferentemente dos ORM´s padrão tem uma facilidade maior na criação de **Relacionamentos** entre as tabelas. O objetivo do Prisma.io é tornar nós Dev´s mais **produtivos** ao criarmos `Queries` de consulta **`SQL`**.
- **Autenticação Permissiva** nas rotas com **`JWT`**
<br>

- Implementação de `Testes Unitários`: 
 > Os Teste Unitários são aqueles que são implementados apenas em alguns **pedaços** da aplicação, como **Services**, **UseCases**...
 > Resumindo, o foco central dos Testes Unitários são as **`Regras de Negócios`**.


Isso irá me ajudar a entender e exercitar os diferentes tipos de aplicações e estruturas que podemos fazer.

## Feito Com: ⚒
![Node.Js](https://img.shields.io/badge/Node.js-52b788?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-00b4d8?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-316192?style=for-the-badge&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-0a9396?style=for-the-badge&logo=prisma&logoColor=white)
![Prisma](https://img.shields.io/badge/Jest-ef5e1b?style=for-the-badge&logo=jest&logoColor=white)

# 👑 Desafios:
- [ ] Implementação de **`Testes de Intregação`**
- [ ] Implementação de **`Testes Unitários`**
  - [x] Teste de Criação de Client 
  - [x] Teste de Verificação de Client já existente
  - [x] Teste de Criação de **Client Token `JWT`**
  - [x] Teste de Criação de Deliveryman
  - [x] Teste de Verificação de Deliveryman já existente
  - [ ] Teste de Criação de **Deliveryman Token `JWT`**
- [ ] Front-End com React.Js
- [ ] Integração com GitHub OAuth





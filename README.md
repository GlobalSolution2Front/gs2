# 🌐 Plataforma Futuro do Trabalho - Front-End

Projeto desenvolvido para a disciplina **Front-End Design Engineering** (FIAP) – 2º semestre.  
Este repositório contém a implementação do front-end da plataforma **Futuro do Trabalho**, uma solução digital que utiliza **Inteligência Artificial** para apoiar profissionais na adaptação às **carreiras emergentes**.

A aplicação inclui telas de **login, cadastro, home, diagnóstico (DNA profissional), mapeamento de carreiras, roadmap, gestão de transição, integrantes, sobre, FAQ e contato**, com foco em usabilidade, visual moderno e navegação clara entre os módulos.

---

## 🚀 Tecnologias Utilizadas
- [React](https://react.dev/) com TypeScript  
- [Vite](https://vitejs.dev/) para build e execução  
- [Tailwind CSS](https://tailwindcss.com/) para estilização  
- [React Router DOM](https://reactrouter.com/) para navegação entre páginas  
- [React Hook Form](https://react-hook-form.com/) para formulários e validação  

---

## 👩‍💻 Integrantes
- **Julia Queiroz de Oliveira** – RM 561583 – 1TDSPI  
- **Leticia Santiago e Silva** – RM 565799 – 1TDSPI  
- **Juliana da Silva Stigliani** – RM 561171 – 1TDSPJ  

---

## 🧠 Funcionalidades Principais da Plataforma

- **Login e Cadastro**
  - Tela de login com validação de formulário e modal de “esqueci minha senha”.
  - Tela de cadastro com validação de senha e confirmação.

- **Home**
  - Página inicial com cards de navegação para:
    - Diagnóstico & DNA Profissional  
    - Carreiras & Roadmap  
    - Gestão da Transição  
    - Integrantes, Sobre, FAQ e Contato  

- **Diagnóstico & DNA Profissional**
  - Área para o usuário colar seu currículo ou resumo profissional.
  - Simulação de análise por IA, gerando:
    - Habilidades técnicas  
    - Habilidades comportamentais  
    - Experiências relevantes  

- **Carreiras & Roadmap**
  - Lista de **profissões emergentes** (ex.: Especialista em Ética de IA, Designer de Experiências para Metaverso, Analista de Carbono Digital).  
  - Índice de compatibilidade simulado para cada carreira.  
  - Geração de um roadmap simplificado com:
    - Habilidades dominadas  
    - Habilidades a desenvolver  
    - Cursos e certificações sugeridos  

- **Gestão da Transição Profissional**
  - Módulo de tarefas e metas baseado no roadmap.  
  - Criação, listagem e marcação de tarefas como concluídas.  
  - Barra de progresso mostrando % de conclusão da transição.

- **Páginas Institucionais**
  - **Sobre**: explicação da proposta do projeto, contexto acadêmico e objetivos da solução.  
  - **Integrantes**: lista da equipe com nome, RM, turma, GitHub e LinkedIn (com suporte a foto de cada integrante).  
  - **FAQ**: perguntas e respostas frequentes sobre o funcionamento da plataforma.  
  - **Contato**: formulário para envio de mensagem (nome, e-mail, mensagem) – simulado no front-end.

---

## 🖼️ Imagens do Projeto



### Tela de Login  
![Login](./src/assets/login1.png)


### Tela de Diagnóstico & DNA Profissional  
![Diagnóstico](./src/assets/diagnostico.png)


### Tela de Gestão da Transição  
![Transição](./src/assets/transicao.png)

### Tela de Integrantes  
![Integrantes](./src/assets/integrantes.png)

### Tela de FAQ  
![FAQ](./src/assets/faq.png)

### Tela de Contato  
![Contato](./src/assets/contato.png)

---

## 📂 Estrutura de Pastas (resumo)



```bash
src/
  assets/
    fundo.avif

  components/
    NavBar.tsx
  
  pages/
    login.tsx
    cadastro.tsx
    home.tsx
    diagnostico.tsx
    carreiras.tsx
    transicao.tsx
    integrantes.tsx
    sobre.tsx
    faq.tsx
    contato.tsx
  App.tsx
  main.tsx











 

# Optimistic UI - React Study Project

Uma aplicação React que demonstra a implementação de **Optimistic UI** usando React Query (TanStack Query). Este projeto simula operações de CRUD de usuários com feedback visual imediato, proporcionando uma experiência de usuário mais fluida e responsiva.

## 🚀 Características

- ✨ **Optimistic UI**: Atualizações instantâneas na interface antes da confirmação do servidor
- 🔄 **React Query**: Gerenciamento de estado do servidor e cache inteligente
- 🎨 **Design Moderno**: Interface construída com Tailwind CSS e Radix UI
- 🌙 **Tema Escuro/Claro**: Sistema de temas com persistência local
- 📱 **Responsivo**: Layout adaptável para diferentes tamanhos de tela
- 🔔 **Notificações**: Sistema de toast para feedback do usuário
- ⚡ **Performance**: Otimizada com React 19 e Vite

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** (rolldown-vite) - Build tool otimizada
- **TanStack React Query** - Gerenciamento de estado do servidor
- **Tailwind CSS** - Framework de CSS utilitário
- **Radix UI** - Componentes acessíveis e sem estilo

### Backend (Mock)
- **JSON Server** - API REST simulada

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatador
- **TypeScript** - Verificação de tipos
- **React Query Devtools** - Debug e monitoramento

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd optimistic-ui
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   # Terminal 1 - Frontend
   pnpm dev

   # Terminal 2 - Backend (JSON Server)
   pnpm dev:server
   ```

4. **Acesse a aplicação**
   - Frontend: http://localhost:5173
   - API Mock: http://localhost:3000

## 🔧 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm dev:server` - Inicia o JSON Server (API mock)
- `pnpm build` - Cria a build de produção
- `pnpm preview` - Visualiza a build de produção
- `pnpm lint` - Executa o linter (Biome)

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── contexts/           # Contextos React (Theme)
│   ├── hooks/             # Custom hooks para operações
│   │   ├── useCreateUser.ts
│   │   ├── useUpdateUser.ts
│   │   └── useUsers.ts
│   ├── services/          # Serviços de API
│   │   ├── createUser.ts
│   │   ├── listUsers.ts
│   │   └── updateUser.ts
│   └── types/             # Tipos TypeScript
├── components/
│   ├── ui/               # Componentes base (Radix UI)
│   ├── Header.tsx        # Cabeçalho da aplicação
│   ├── UserForm.tsx      # Formulário de criação de usuário
│   └── UsersList.tsx     # Lista de usuários
└── lib/
    ├── queryClient.ts    # Configuração do React Query
    └── utils.ts          # Utilitários gerais
```

## 🎯 Como Funciona o Optimistic UI

### Conceito
O Optimistic UI assume que as operações do usuário serão bem-sucedidas na maioria das vezes, atualizando a interface imediatamente antes de receber a confirmação do servidor.

### Implementação

1. **Criação de Usuário (useCreateUser.ts)**
   - `onMutate`: Adiciona o usuário temporariamente na lista com status "pending"
   - `onSuccess`: Substitui o usuário temporário pelo retorno do servidor
   - `onError`: Marca o usuário temporário com status "error"

2. **Atualização de Usuário (useUpdateUser.ts)**
   - Atualiza imediatamente o estado local
   - Reverte em caso de erro
   - Confirma com os dados do servidor em caso de sucesso

3. **Estados Visuais**
   - Loading states durante operações
   - Indicadores de erro
   - Animações suaves de transição

## 🎨 Funcionalidades da Interface

### Gerenciamento de Usuários
- ➕ Criar novos usuários
- 📝 Editar informações existentes
- 🚫 Bloquear/desbloquear usuários
- 📋 Visualizar lista completa

### Sistema de Temas
- 🌙 Modo escuro/claro
- 💾 Persistência da preferência
- 🔄 Troca suave entre temas

## 📚 Conceitos Demonstrados

- **Optimistic UI Pattern**
- **Server State Management com React Query**
- **Custom Hooks para encapsulamento de lógica**
- **Context API para gerenciamento de estado global**
- **Composition Pattern com Radix UI**
- **TypeScript para type safety**
- **Modern React patterns (Hooks, Functional Components)**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🔗 Links Úteis

- [React Query Documentation](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

---

Desenvolvido com ❤️ para fins educacionais e demonstração de conceitos modernos de desenvolvimento React.


<div style="text-align: center;">
  <svg aria-label="Next.js logomark" class="next-mark_root__wLeec" height="80" role="img" viewBox="0 0 180 180" width="80"><mask height="180" id=":R0:mask0_408_134" maskUnits="userSpaceOnUse" style="mask-type:alpha" width="180" x="0" y="0"><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#:R0:mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:R0:paint0_linear_408_134)"></path><rect fill="url(#:R0:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect></g><defs><linearGradient gradientUnits="userSpaceOnUse" id=":R0:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id=":R0:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>

   <img src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true" alt="chakra.js Logo" width="200">
</div>




Tecnologias Utilizadas:
- Next.js (v11.1.2): Framework React para renderização do lado do servidor (SSR) e geração de páginas estáticas.
- Chakra UI (v1.6.7): Biblioteca de componentes estilizados para construção de interfaces.
- Socket.IO Client (v4.3.1): Biblioteca para comunicação em tempo real com o servidor usando WebSockets.

Estrutura de Pastas:
```
projeto
└── dev
    └── front-end
        ├── components
        ├── pages
        ├── utils
        ├── public
        ├── styles
        ├── README.md
        └── package.json
```

Instruções para Execução:
------------------------------

1. Certifique-se de ter o Node.js (v16.17.1) instalado em sua máquina.

2. Faça o clone do repositório do projeto front-end:
```
git clone https://github.com/chagas42/challenges
```

3. Acesse a pasta do projeto front-end:
```
cd projeto/dev/front-end
```

4. Instale as dependências do projeto:
```
npm install
```

5. Configure as variáveis de ambiente necessárias. Crie um arquivo `.env.local` na raiz do projeto e defina as variáveis de acordo com suas configurações.

6. Execute o projeto:
```
npm run dev
```

7. O servidor de desenvolvimento será iniciado e o projeto estará acessível em `http://localhost:3000`.

------------------------------------------------------------
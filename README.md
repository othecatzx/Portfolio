# Caick Rigato — Professional Portfolio

Portfólio profissional estático com estética cybersecurity premium, animações suaves, parallax, responsividade e seletor PT/EN.

## Arquivos
- `index.html` — conteúdo e marcação sem frameworks
- `styles.css` — identidade visual, layout, responsividade e animações
- `script.js` — tradução, navegação, parallax, scroll reveal e efeitos
- `assets/favicon.svg` — ícone do site

## Prévia local
Abra `index.html` no navegador. Para um servidor local, execute `npx serve .` nesta pasta (opcional).

## Publicar no Cloudflare Pages
1. Acesse Cloudflare > Workers & Pages > Create application > Pages.
2. Escolha **Upload assets / Direct Upload** e envie o conteúdo desta pasta ou conecte seu repositório GitHub.
3. Se conectar ao GitHub: framework preset **None**, build command em branco, output directory `/` ou a pasta raiz que contém `index.html`.
4. Adicione o domínio `caickrigato.com.br` na seção Custom domains e siga as instruções DNS do Cloudflare.
5. Habilite HTTPS (automático no Pages) e teste PT/EN no desktop e no celular.

## Observações
- O site não realiza requisições ao backend, não contém formulários de coleta de dados e não exige variáveis de ambiente.
- O botão de contato abre o aplicativo de email (`mailto:`).
- O repositório ML Support aponta para a URL fornecida no briefing.
- O site não inclui currículo PDF, porque nenhum currículo foi fornecido. Adicione um botão de download quando existir um arquivo atualizado.
- Os projetos, a formação, cursos e cargos foram descritos conforme os dados fornecidos; atualize-os sempre que necessário.
- Efeitos de movimento são reduzidos automaticamente para usuários com a preferência `prefers-reduced-motion`.

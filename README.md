## OsTicket - API

Desenvolvida para prover acesso ao banco de dados que contém os tickets do suporte da Celtaware.

## Como preparar o servidor

Existem várias formas de rodar o servidor, mas para obter um resultado garantido, farei um passo a passo baseado em comandos
no PowerShell.

Vamos começar pelo gerenciador de pacotes.

- Certifique-se de ter instalado na sua máquina o Windows pelo menos na versão "7"
- PowerShell v2+
- .NET Framework 4

- [Chocolatey](https://chocolatey.org/) - Inicie o PowerShell como administrador (Pode pressionar o atalho Win + X).

Rode o comando `Get-ExecutionPolicy` . Caso o retorno for `Restricted`, então rode
`Set-ExecutionPolicy AllSigned`
Ao concluir, rode: `Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`

Após concluir a instalação, digite `choco`. Deverá ser exibida a versão do Chocolatey:

```
Chocolatey v0.10.15
Please run 'choco -?' or 'choco <command> -?' for help menu.
```

Caso isso não ocorra, reinicie o PowerShell

- [NodeJS](https://nodejs.org/en/)
  Com o PowerShell aberto, digite `choco install -y nodejs.install`. Esse comando fará com que o NodeJS seja instalado e configurado. o -y garante a resposta "SIM" para todas as perguntas feitas pelo gerenciador de pacotes ;)

- [Yarn](https://yarnpkg.com/lang/en/)
  Uma alternativa ao gerenciador de pacotes padrão do Node, o yarn é muito (muuuuito!) mais rápido que seu concorrente e esse projeto foi construído utilizando ele no gerenciamento de bibliotecas, portanto é obrigatório ;)
  Também no PowerShell, digite `choco install yarn`

### Como rodar a aplicação

No PowerShell, navegue até um diretório de sua preferência para baixar o código-fonte do projeto.
Realize o clone desse repositório em sua máquina utilizando o comando `git clone https://github.com/thiagovasconcellos/osTicketAPI.git`

Após a conclusão, navegue até a raiz do projeto e rode o comando `yarn` para realizar o download de todos os módulos e bibliotecas necessários para o funcionamento desta aplicação. Após isso, `yarn dev` para emular o servidor em modo de desenvolvedor.
Caso tudo esteja certo, você deverá ver a mensagem:

```
$ nodemon src/server.js
[nodemon] 1.19.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node -r sucrase/register src/server.js`
Listening on port 3000
```

Agora é uma boa hora pra falar sobre as portas do aplicativo. Caso você deseje alterar a porta, isso deverá ser feito através do arquivo .env alterando a propriedade "PORT" (;|)

### Docker

Existe um arquivo de configuração (Dockerfile) no projeto para auxiliar a configuração dessa aplicação em um ambiente docker.
Para instalar o Docker, siga as instruções muito bem escritas no site da [distribuição](https://www.docker.com/)

Com o Docker instalado e configurado na sua máquina, abra o PowerShell e navegue até o diretório da aplicação.
Digite o comando `docker build -t <nome_da_imagem> .`
Substitua o <nome_da_imagem> por algo da sua preferência. O "." no final da instrução é obrigatório, e indica que o diretório utilizado como raíz para a criação da imagem será o diretório atual.

Após a conclusão da criação da imagem, é hora de subir ela em um contâiner.

`docker run --name <nome_aplicacao> -p 3000:3000 -d <nome_da_imagem>`
Em <nome*aplicacao> entre com o nome que esse contâiner terá. O <nome_da_imagem> deve ser o mesmo utilizado anteriormente pra criar a imagem.
`-p` 3000:3000 faz um redirecionamento de portas entre o host e o contâiner. Dessa forma, tudo que entrar pela porta 3000 do host será redirecionado para a porta 3000 do contâiner.
`-d` roda o contâiner em \_detached mode*. Você não verá a mágica acontecendo.

## Considerações finais

Esse é um projeto simples porém muito funcional e entrega um ótimo valor a empresa, permitindo que seja exibido em qualquer frontend informações em tempo real dos status dos tickets do suporte.

## Built with

<img src="https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png" width=68 height=68 title="NodeJS" alt="NodeJS"> </img>
<img src="https://vertigo.com.br/wp-content/uploads/agile-logo-docker.png" width=68 height=68 title="Docker" alt="Docker"> </img>
<img src="https://under-linux.org/attachment.php?attachmentid=23707&d=1308237529" width=68 height=68 title="MariaDB" alt="MariaDB"> </img>
<img src="https://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png" width=68 height=68 title="Yarn" alt="Yarn"> </img>

## Autor

- **Thiago Vasconcellos**

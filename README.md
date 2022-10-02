# ignite-rockeseat-m1

## Recursos usados

### React
* yarn add react (Adicionar React ao projeto)
* yarn add react-dom (html convertido em sintaxe - arvore de elemtentos html)
* src( código fonte) public(assets)

### Babel
( Transpilar para o navegador os recursos react)
* yarn add @babel/core @babel/cli @babel/preset-env -D
@babel/core (bibiloteca com o core do babel)
@babel/cli  (usar os recursos via terminal)
@babel/present-env (checa o ambiente e informa para o babel conversão)
### Run babel e gerar o bundle 
* yarn babel src/index.js --out-file dist/bundle.js
* yarn add @babel/preset-react  

### webpack
bundle codigo em arquivos compreendidos pelo o browser
* yarn add webpack webpack-cli -D  

### babel-loader
integrar o webpack (ver os arquivos) 
com o babel loader (joga para a conversão)
* yarn add babel-loader -D

### run wepback

yarn webpack

### plugin webpack 
 Usando para remover arvore ao usar o bundle
* yarn add html-webpack-plugin -D
  
### Hot reload
yarn add webpack dev-server -D

### Rodar o modo hot reload
yarn webpack serve  

### Criando o env para definir prod e dev
* yarn add cross-env -D
* 
* ###
* yarn add style-loader css-loader -D     
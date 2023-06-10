# Como iniciar um servidor no node

   1. node -v => para ver a versão do node

   2. npm init -y => para criar o file do package.json
      - JSON = Javascript Object Notation

   3. npm install lite-server => para criar o servidor

   4. Abrir o package.json e:
      - alterar o object "scripts" de:
         "test": "echo \ "Error: no test specified\" && exit 1"
      - para:
         "start": "lite-server" (na string colocar o nome do server)

   5. npm start => para abrir o servidor local que foi criado
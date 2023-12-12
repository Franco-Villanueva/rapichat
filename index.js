// const { conn } = require('./src/DB_connection')
const {server} = require('./server/index')

// server.listen(PORT, () => {
//     //conn.sync({force:true})//elimina las tabla con sus registro y los vuelve a crear
//     //conn.sync({alter:true})//modifica las tablas sin eliminar 
//     console.log('Server raised in port: ' + PORT);
//   });


server.listen(3000, () => {
    console.log('Server raised in port: ' +  3000);
});

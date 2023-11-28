const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from cliente',(err,cliente) =>{
            if(err){
                res.json(err);
            }
            res.json(cliente);
        });

    });

};

controller.edit = (req, res) => {

    const {idcliente}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from cliente where idcliente=?', [idcliente], (err,cliente) => {
            res.json(cliente[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into cliente set?', [data], (err,cliente) => {
        res.json(cliente);
       });
   })
};

controller.update = (req,res) =>{

    const {idcliente}= req.params;
    const nuevo_cliente = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update cliente set ? where idcliente =?', [nuevo_cliente, idcliente], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idcliente}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from cliente where idcliente =?', [idcliente], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
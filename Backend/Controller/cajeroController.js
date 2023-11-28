const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from cajero',(err, cajero) =>{
            if(err){
                res.json(err);
            }
            res.json(cajero);
        });

    });

};

controller.edit = (req, res) => {

    const {idcajero}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from cajero where idcajero=?', [idcajero], (err, cajero) => {
            res.json(cajero[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into cajero set?', [data], (err,cajero) => {
        res.json(cajero);
       });
   })
};

controller.update = (req,res) =>{

    const {idcajero}= req.params;
    const nuevo_cajero = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update cajero set ? where idcajero =?', [nuevo_cajero, idcajero], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idcajero}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from cajero where idcajero =?', [idcajero], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
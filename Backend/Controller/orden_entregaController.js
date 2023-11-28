const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from orden_entrega',(err,orden_entrega) =>{
            if(err){
                res.json(err);
            }
            res.json(orden_entrega);
        });

    });

};

controller.edit = (req, res) => {

    const {idorden_entrega}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from orden_entrega where idorden_entrega=?', [idorden_entrega], (err,orden_entrega) => {
            res.json(orden_entrega[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into orden_entrega set?', [data], (err,orden_entrega) => {
        res.json(orden_entrega);
       });
   })
};

controller.update = (req,res) =>{

    const {idorden_entrega}= req.params;
    const nuevo_orden_entrega = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update orden_entrega set ? where idorden_entrega =?', [nuevo_orden_entrega, idorden_entrega], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idorden_entrega}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from orden_entrega where idorden_entrega =?', [idorden_entrega], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};
//comentario
module.exports =controller;
const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from factura',(err, factura) =>{
            if(err){
                res.json(err);
            }
            res.json(factura);
        });

    });

};

controller.edit = (req, res) => {

    const {idfactura}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from factura where idfactura=?', [idfactura], (err, factura) => {
            res.json(factura[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into factura set?', [data], (err,factura) => {
        res.json(factura);
       });
   })
};

controller.update = (req,res) =>{

    const {idfactura}= req.params;
    const nuevo_factura = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update factura set ? where idfactura =?', [nuevo_factura, idfactura], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idfactura}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from factura where idfactura =?', [idfactura], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
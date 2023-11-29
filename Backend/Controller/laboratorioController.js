const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from laboratorio',(err,laboratorio) =>{
            if(err){
                res.json(err);
            }
            res.json(laboratorio);
        });

    });

};

controller.edit = (req, res) => {

    const {idlaboratorio}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from laboratorio where idlaboratorio=?', [idlaboratorio], (err,laboratorio) => {
            res.json(laboratorio[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into laboratorio set?', [data], (err,laboratorio) => {
        res.json(laboratorio);
       });
   })
};

controller.update = (req,res) =>{

    const {idlaboratorio}= req.params;
    const nuevo_laboratorio = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update laboratorio set ? where idlaboratorio =?', [nuevo_laboratorio, idlaboratorio], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idlaboratorio}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from laboratorio where idlaboratorio =?', [idlaboratorio], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
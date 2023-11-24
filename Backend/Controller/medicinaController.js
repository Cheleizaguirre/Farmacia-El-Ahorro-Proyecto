const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from medicina',(err,medicina) =>{
            if(err){
                res.json(err);
            }
            res.json(medicina);
        });

    });

};

controller.edit = (req, res) => {

    const {idmedicina}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from medicina where idmedicina=?', [idmedicina], (err,medicina) => {
            res.json(medicina[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into medicina set?', [data], (err,medicina) => {
        res.json(medicina);
       });
   })
};

controller.update = (req,res) =>{

    const {idmedicina}= req.params;
    const nuevo_medicina = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update medicina set ? where idmedicina =?', [nuevo_medicina, idmedicina], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idmedicina}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from medicina where idmedicina =?', [idmedicina], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;
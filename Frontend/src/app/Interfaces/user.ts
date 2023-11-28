export interface cliente{
  idcliente?: number | null;
  nombre?: string | null;
  direccion?: string | null;
  telefono?: string | null;
  sexo?: string | null;
  estado?: string;
}

export interface proveedor{
  idproveedor?: number | null;
  nombre?: string | null;
  telefono?: string | null;
  sexo?: string | null;
  estado?: string;
}

export interface medicina{
  idmedicina?: number | null;
  nombre?: string | null;
  precio?: number | null;
  estado?: string;
}

export interface factura {
  idfactura?: number | null;
  idcliente?: number | null;
  idcajero?: number | null;
  total?: string | null;
  impuesto?: string | null;
  fecha?: Date;
}

export interface cajero {
  idcajero?: number | null;
  nombre?: string | null;
  horario?: string | null;
  salario?: number | null;
  estado?: string;
}

export interface User{
  ctipou?: number;
  descripcion?: string;
  estado?: string;
}

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

export interface User{
  ctipou?: number;
  descripcion?: string;
  estado?: string;
}

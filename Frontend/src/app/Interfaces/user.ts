export interface cliente{
  idcliente?: number | null;
  nombre?: string | null;
  direccion?: string | null;
  telefono?: string | null;
  sexo?: string | null;
  estado?: string;
}

export interface orden_entrega{
  idorden_entrega?: number | null;
  idlaboratorio?: number | null;
  idproveedor?: number | null;
  idmedicina?: number | null;
  cantidad_medicina?: number | null;
  fecha?: number | null;
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


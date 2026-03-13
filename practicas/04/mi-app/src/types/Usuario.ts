import type { Direccion } from "./Direccion";

export interface Usuario {
  nombre: string;
  edad: number;
  dir?: Direccion;
}

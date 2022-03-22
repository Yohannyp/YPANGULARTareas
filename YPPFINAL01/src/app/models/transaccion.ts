import { Type } from "./Type";
import { Types } from "./Types";

export interface Transaccion{
    id: string;
    amount: number;
    date: Date;
    cuenta: Type;
    categoria:string;
}
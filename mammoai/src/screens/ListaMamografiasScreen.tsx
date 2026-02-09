import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import icon_header from "../assets/icon_header.png";
import { Search, SquarePen, TextAlignJustify } from "lucide-react";

export const ListaMamografiasScreen = () => {
  return (
    <div className="bg-white w-screen h-screen">
      <header className="w-full h-10 bg-pink-600 flex items-center px-3 gap-2">
        <img src={icon_header}></img>
        <p className="text-start text-sm font-bold">MammoAI</p>
      </header>
      <div>
        <h1 className="text-black font-bold text-xl">Lista de mamografías</h1>
        <p className="text-black text-xs">Cargar mamografías</p>
        <Table>
          <TableHeader>
            <TableRow />
            <TableRow>
              <TableHead className="w-[100px]">N°</TableHead>
              <TableHead>Nombre de Paciente</TableHead>
              <TableHead>N° Documento</TableHead>
              <TableHead className="text-right">Telefono</TableHead>
              <TableHead className="text-right">Correo</TableHead>
              <TableHead className="text-right">Opciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Nombre Apellido</TableCell>
              <TableCell>72727272</TableCell>
              <TableCell className="text-right">989898765</TableCell>
              <TableCell className="text-right">ejemplo@gmail.com</TableCell>
              <TableCell className="text-right flex gap-2 justify-end">
                <SquarePen className="h-4 w-4 cursor-pointer" />
                <TextAlignJustify className="h-4 w-4 cursor-pointer" />
                <Search className="h-4 w-4 cursor-pointer" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

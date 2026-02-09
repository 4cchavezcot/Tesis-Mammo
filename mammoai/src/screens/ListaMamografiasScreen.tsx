import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import icon_header from "../assets/icon_header.png";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormRegistrarMamografia } from "@/components/mammoai/FormRegistrarMamografia";
import { FormAnalizarMamografía } from "@/components/mammoai/FormAnalizarMamografía";
import { FormDetalleMamografia } from "@/components/mammoai/FormDetalleMamografia";
import { AppSidebar } from "@/components/mammoai/AppSidebar";

export const ListaMamografiasScreen = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <header className="w-full h-10 bg-pink-600 flex items-center px-3 gap-2">
        <img src={icon_header}></img>
        <p className="text-start text-sm font-bold text-white">MammoAI</p>
      </header>
      <div className=" flex ">
        <div className="pt-5">
          <AppSidebar />
        </div>
        <div className="flex-1 min-w-0 p-4">
          <h1 className="text-black font-bold text-xl">Lista de mamografías</h1>
          <p className="text-black text-xs">Cargar mamografías</p>
          <div className="flex justify-start gap-2">
            <FormRegistrarMamografia editar={false} />
            <Button className="flex justify-cente bg-transparent shadow-none text-pink-600 hover:bg-gray-200 hover:border-0">
              <RotateCcw />
              Actualizar
            </Button>
          </div>
          <div className="w-screen h-[0.5px] bg-pink-600"></div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">N°</TableHead>
                  <TableHead>Nombre de Paciente</TableHead>
                  <TableHead>N° Documento</TableHead>
                  <TableHead>Teléfono</TableHead>
                  <TableHead>Correo</TableHead>
                  <TableHead>Opciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell>Nombre Apellido</TableCell>
                  <TableCell>72727272</TableCell>
                  <TableCell>989898765</TableCell>
                  <TableCell>ejemplo@gmail.com</TableCell>
                  <TableCell className="flex justify-start">
                    <FormRegistrarMamografia editar={true} />
                    <FormDetalleMamografia />
                    <FormAnalizarMamografía />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

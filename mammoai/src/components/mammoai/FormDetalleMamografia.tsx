import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus , TextAlignJustify } from "lucide-react";
import { ArchivoCargado } from "./ArchivoCargado";
import { InputFileUpload } from "./InputFileUpload";



export function FormDetalleMamografia() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex justify-cente bg-transparent shadow-none text-pink-600 hover:bg-gray-200 hover:border-0">
          <TextAlignJustify/>       
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-xl w-[70%] h-full">
        <div className="flex flex-col h-full">
          <SheetHeader>
            <SheetTitle className="flex justify-start items-center text-center gap-2">
              <Plus className="text-pink-600" /> Registro de nueva Mamografía
            </SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-auto grid auto-rows-min gap-6 px-2 mt-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Nombre del paciente</Label>
              <Input
                id="sheet-demo-name"
                placeholder="Ingrese el nombre completo del paciente"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="sheet-demo-username">DNI</Label>
                <Input id="sheet-demo-username" placeholder="Ejm. 77223344" />
              </div>
              <div>
                <Label htmlFor="sheet-demo-username">
                  Teléfono de contacto
                </Label>
                <Input id="sheet-demo-username" placeholder="Ejm. 929292234" />
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Correo de contacto</Label>
              <Input
                id="sheet-demo-name"
                placeholder="Ejm. clara.chavez@gmail.com"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Dirección</Label>
              <Input id="sheet-demo-name" placeholder="Ejm. Calle 123" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Contacto de emergencia</Label>
              <Input
                id="sheet-demo-name"
                placeholder="Ejm. Ingrese el nombre completo del contacto de emergencia"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">
                Teléfono del contacto de emergencia
              </Label>
              <Input id="sheet-demo-name" placeholder="Ejm. 929292234" />
            </div>

            <div className="flex justify-center">
              <InputFileUpload/>
            </div>

            <ArchivoCargado nombreArchivo="Prueba" analizar={false}/>
          </div>

          <SheetFooter className="mt-3">
            <SheetClose asChild>
              <Button className="bg-transparent border-[0.5px] border-black text-black hover:bg-gray-200">
                Cancelar
              </Button>
            </SheetClose>
            <Button
              type="submit"
              className="bg-pink-600 hover:bg-pink-400 text-white"
            >
              Registrar
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

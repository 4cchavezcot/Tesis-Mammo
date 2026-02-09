import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";
import { ArchivoCargado } from "./ArchivoCargado";

export function FormAnalizarMamografía() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex justify-cente bg-transparent shadow-none text-pink-600 hover:bg-gray-200 hover:border-0">
          <Search className="h-4 w-4 cursor-pointer text-pink-600" />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-xl w-[70%] h-full">
        <div className="flex flex-col h-full">
          <SheetHeader>
            <SheetTitle className="flex justify-start items-center text-center gap-2">
              <Search className="text-pink-600" /> Analizar mamografía
            </SheetTitle>
            <SheetDescription>
              Haga click en el botón de analizar para obtener la clasificación
              en el sistema BI-RADS. Recuerde confirmar su resultados con la
              opinión de un profesional.
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-auto grid auto-rows-min gap-3 px-2 mt-4">
            <ArchivoCargado nombreArchivo="Prueba" analizar={true} />
            <ArchivoCargado nombreArchivo="Prueba" analizar={true} />
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
              Finalizar
            </Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

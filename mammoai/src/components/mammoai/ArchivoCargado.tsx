import { FileSearchCorner, Trash } from "lucide-react";
import { Button } from "../ui/button";

interface IArchivoCargado {
  nombreArchivo: string;
  analizar: boolean;
}
export const ArchivoCargado = ({ nombreArchivo, analizar }: IArchivoCargado) => {
  return (
    <div className="h-12 bg-pink-300 flex items-center justify-between pl-5 rounded-full text-white font-semibold">
      <span className="truncate">{nombreArchivo}</span>
      <Button className="rounded-full h-12 w-12 bg-pink-600 hover:bg-pink-700">
        {analizar ? <FileSearchCorner className="text-white" /> : <Trash className="text-white" />}
      </Button>
    </div>
  );
};

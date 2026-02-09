import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";

export const InputFileUpload = () => {
  return (
    <div className="flex justify-center">
      <label
        htmlFor="file-upload"
        className="w-80 h-48 cursor-pointer flex flex-col items-center justify-center gap-3
        rounded-3xl border-2 border-dashed border-pink-600
        text-pink-600 hover:bg-pink-100 transition"
      >
        <Upload className="w-10 h-10" />
        <p className="text-sm font-medium">
          Arrastra tus archivos aquí
        </p>
        <p className="text-xs text-muted-foreground">
          o haz clic para seleccionar
        </p>

        {/* Input real (oculto) */}
        <Input
          id="file-upload"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );
}

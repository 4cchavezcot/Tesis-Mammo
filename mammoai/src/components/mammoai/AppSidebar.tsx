import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react"

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

export function AppSidebar() {
  const fileTree: FileTreeItem[] = [
    // {
    //   name: "components",
    //   items: [
    //     {
    //       name: "ui",
    //       items: [
    //         { name: "button.tsx" },
    //         { name: "card.tsx" },
    //         { name: "dialog.tsx" },
    //         { name: "input.tsx" },
    //         { name: "select.tsx" },
    //         { name: "table.tsx" },
    //       ],
    //     },
    //     { name: "login-form.tsx" },
    //     { name: "register-form.tsx" },
    //   ],
    // },
    {
      name: "Inicio",
      items: [{ name: "Sobre MammoAI" }],
    },
    {
      name: "Gestionar mamografías",
      items: [
        { name: "Cargar mamografías" },
      ],
    },    
  ]

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="group hover:bg-accent hover:text-accent-foreground w-full justify-start transition-none bg-transparent"
            >
              <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
              <FolderIcon />
              {fileItem.name}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="style-lyra:ml-4 mt-1 ml-5">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        className="text-foreground w-full justify-start gap-2 bg-transparent"
      >
        <FileIcon />
        <span>{fileItem.name}</span>
      </Button>
    )
  }

  return (
    <Card className="mx-auto w-full max-w-[16rem] gap-2 border-0 shadow-none" >
      <CardContent>
        <div className="flex flex-col gap-1 bg-transparent">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  )
}

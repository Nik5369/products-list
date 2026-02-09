import { Button, Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui'
import { PlusCircleIcon } from 'lucide-react'
import { AddProductForm } from './AddProductFrom'

export function AddProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-1.5">
          <PlusCircleIcon size={22} />
          <p className="font-semibold text-l">Добавить</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-lg">Добавление товара</DialogTitle>
        </DialogHeader>

        <AddProductForm />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="submit"
              className="w-full bg-destructive/80 text-primary-foreground py-2.5 px-4 rounded-lg hover:bg-destructive transition-opacity font-medium"
            >
              Отменить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

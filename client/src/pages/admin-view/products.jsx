import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import React, { Fragment } from 'react'

const AdminProducts = () => {
    const [openCreateProductsDialog, setOpenCreateProductsDialog] = React.useState(false);

  return (
   <Fragment>
 <div className="mb-5 w-full flex justify-end">
    <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
 </div>
 <sheet 
    open={openCreateProductsDialog} 
    onOpenChange={() => {
      setOpenCreateProductsDialog(false);
   }}>
    <SheetContent>
<SheetHeader>
  <SheetTitle>Add New Product</SheetTitle>
</SheetHeader>
      </SheetContent>

 </sheet>

   </Fragment>
  )
}

export default AdminProducts
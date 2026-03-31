import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { Fragment, useState } from 'react'
import { Button } from '@/components/ui/button';
import { addProductFormElements } from '@/config';
import CommonForm from '@/components/common/form';
import ProductImageUpload from "@/components/admin-view/image-upload";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

const AdminProducts = () => {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={setOpenCreateProductsDialog}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}

          />
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={"Add"}
              // buttonText={currentEditedId !== null ? "Edit" : "Add"}
              formControls={addProductFormElements}
            // isBtnDisabled={!isFormValid()}
            />
          </div>

        </SheetContent>

      </Sheet>

    </Fragment>
  )
}

export default AdminProducts
import React from 'react'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const CommonForm = (  
  {
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled
}
) => {
   function renderInputsByComponentType(getControlItem) {
 
       const value = formData[getControlItem.name] || "";

  switch (getControlItem.componentType) {

    case "input":
      return (
        <input
          name={getControlItem.name}
          type={getControlItem.type}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
          value={value}
          onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
        />
      );

    case "textarea":
      return (
        <Textarea
         name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
             onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
        />
      );
      
    case "select":
      return (
        <select 
         onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            } name={getControlItem.name} id={getControlItem.name} value={value}>
        <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>
              <SelectContent>

               {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>

        </select>
      );

    case "checkbox":
      return (
        <input
          type="checkbox"
          name={getControlItem.name}
          id={getControlItem.name}
        />
      );

    case "radio":
      return (
        <>
          {getControlItem.options?.map((option) => (
            <label key={option.id}>
              <input
                type="radio"
                name={getControlItem.name}
                value={option.value}
              />
              {option.label}
            </label>
          ))}
        </>
      );

    case "date":
      return (
        <input
          type="date"
          name={getControlItem.name}
          id={getControlItem.name}
        />
      );

    case "number":
      return (
        <input
          type="number"
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
        />
      );

    default:
      return (
        <input
          name={getControlItem.name}
          type="text"
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
        />
      );
  }
}

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm
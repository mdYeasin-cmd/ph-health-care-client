import PHDatePicker from "@/components/Forms/PHDatePicker";
import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { dateFormatter } from "@/utils/dateFormater";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await createSpecialty(data).unwrap();
      console.log(res, "create specialty");
      if (res?.id) {
        toast.success("Specialty created successfully!");
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create A New Specialty">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput label="Title" name="title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name={"file"} label={"File Uploader"} />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialtyModal;

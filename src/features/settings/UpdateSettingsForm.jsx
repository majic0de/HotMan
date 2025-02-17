/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Form from "../../ui/Form";

import useUpdateSettings from "./useUpdateSettings";

const UpdateSettingsForm = ({ settings }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: settings });

  const { isPending: isUpdating, updateSettings } = useUpdateSettings();

  const onSubmit = (data) => updateSettings(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Minimum booking length"
        error={errors?.minBookingLength?.message}
      >
        <Input
          type="number"
          disabled={isUpdating}
          {...register("minBookingLength", {
            required: "Minimum booking length is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Maximum booking length"
        error={errors?.maxBookingLength?.message}
      >
        <Input
          type="number"
          disabled={isUpdating}
          {...register("maxBookingLength", {
            required: "Maximum booking length is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Maximum guests per booking"
        error={errors?.maxGuestsPerBooking?.message}
      >
        <Input
          type="number"
          disabled={isUpdating}
          {...register("maxGuestsPerBooking", {
            required: "Maximum guests per booking",
          })}
        />
      </FormRow>

      <FormRow label="Breakfast price" error={errors?.breakfastPrice?.message}>
        <Input
          type="number"
          disabled={isUpdating}
          {...register("breakfastPrice", {
            required: "Breakfast price is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button size="medium" variation="secondary" type="reset">
          Cancel
        </Button>
        <Button size="medium" variation="primary" type="submit">
          Update settings
        </Button>
      </FormRow>
    </Form>
  );
};

export default UpdateSettingsForm;

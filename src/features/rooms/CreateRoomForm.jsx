import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";

import useCreateRoom from "./useCreateRoom";

const CreateRoomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const { createRoom, isCreating } = useCreateRoom();

  function onSubmit(data) {
    createRoom({ ...data, image: data.image[0] }, { onSuccess: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Room name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "Room name is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "Maximum capacity is required",
            min: {
              value: 1,
              message: "Minimum capacity is 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "Regular price is required",
            min: { value: 1, message: "Minimum price is 1" },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="text"
          id="discount"
          disabled={isCreating}
          {...register("discount", {
            required: "Discount is required",
            validate: (value) => {
              Number(value) >= Number(getValues("regularPrice")) ||
                "Discount must be less than regular price";
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          defaulValue=""
          disabled={isCreating}
          {...register("description", {
            required: "Description is required",
          })}
        />
      </FormRow>

      <FormRow label="Room photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          type="file"
          accept="image/*"
          disabled={isCreating}
          {...register("image", {
            required: "Room photo is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          size="medium"
          type="reset"
          variation="secondary"
          disabled={isCreating}
        >
          Cancel
        </Button>
        <Button
          size="medium"
          disabled={isCreating}
          variation="primary"
          type="submit"
        >
          {isCreating ? "Is creating..." : "Add room"}
        </Button>
      </FormRow>
    </Form>
  );
};

export default CreateRoomForm;

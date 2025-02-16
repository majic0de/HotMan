import { Form } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRoom } from "../../services/apiRooms";

const CreateRoomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("Room created successfully");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Room name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "Room name is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
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
          {...register("image", {
            required: "Room photo is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button size="medium" type="reset" variation="secondary">
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

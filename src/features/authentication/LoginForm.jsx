import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { login, isLoging } = useLogin();

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onError: () => {
          setValue("password", "");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Email address"
        orientation="vertical"
        error={errors?.email?.message}
      >
        <Input
          type="email"
          id="email"
          autoComplete="username"
          {...register("email", {
            required: "Email is required",
          })}
        />
      </FormRow>
      <FormRow
        label="Password"
        orientation="vertical"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password", {
            required: "Password is required",
          })}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button variation="primary" size="large" disabled={isLoging}>
          {isLoging ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;

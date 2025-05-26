//https://www.youtube.com/watch?v=u6PQ5xZAv7Q&list=PLK5U0tyd34tBYZ1L6rplNfFNNQPwgCRR0&index=17&ab_channel=ByteGrad

import { useForm, type FieldValues } from "react-hook-form";

const SimpleReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return (
    <div className="grid place-items-center min-h-screen w-screen">
      <form
        className="w-full max-w-96 space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <input
            {...register("name", {
              required: "Required field",
            })}
            type="text"
            placeholder="Name"
          />
          {errors.name && (
            <p role="alert" className="text-s text-red-600">
              {`${errors.name.message}`}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("password", {
              required: "Required field",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
            })}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p role="alert" className="text-s text-red-600">
              {`${errors.password.message}`}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("confirmPassword", {
              required: "Required field",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
            type="password"
            placeholder="Confirm password"
          />
          {errors.confirmPassword && (
            <p role="alert" className="text-s text-red-600">
              {`${errors.confirmPassword.message}`}
            </p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="disabled:!bg-gray-400"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default SimpleReactHookForm;

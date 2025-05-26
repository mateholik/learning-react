//https://www.youtube.com/watch?v=u6PQ5xZAv7Q&list=PLK5U0tyd34tBYZ1L6rplNfFNNQPwgCRR0&index=17&ab_channel=ByteGrad

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  password: string;
  confirmPassword: string;
};

const VALIDATION_MESSAGES = {
  required: (fieldName?: string) =>
    fieldName ? `${fieldName} is required` : "This field is required",
  minLength: (length: number, fieldName?: string) =>
    `${fieldName || "This field"} must be at least ${length} characters`,
  maxLength: (length: number, fieldName?: string) =>
    `${fieldName || "This field"} must not exceed ${length} characters`,
  pattern: (fieldName: string, requirement: string) =>
    `${fieldName} ${requirement}`,
  passwordsMatch: () => "Passwords do not match",
} as const;

const ComplexReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      reset();
    } catch (error) {
      console.log("Submission failed:", error);
    }
  };

  return (
    <div className="grid place-items-center min-h-screen w-screen bg-gray-50">
      <form
        className="w-full max-w-96 space-y-6 p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        <div className="space-y-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register("name", {
              required: VALIDATION_MESSAGES.required("name"),
              minLength: {
                value: 2,
                message: VALIDATION_MESSAGES.minLength(2, "name"),
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: VALIDATION_MESSAGES.pattern(
                  "Name",
                  "can only contain letters and spaces"
                ),
              },
            })}
            type="text"
            placeholder="Enter your name"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
              errors.name
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p role="alert" className="text-sm text-red-600 mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            {...register("password", {
              required: VALIDATION_MESSAGES.required("Password"),
              minLength: {
                value: 8,
                message: VALIDATION_MESSAGES.minLength(8, "Password"),
              },
              maxLength: {
                value: 128,
                message: VALIDATION_MESSAGES.maxLength(128, "Password"),
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/,
                message: VALIDATION_MESSAGES.pattern(
                  "Password",
                  "must contain at least one letter and one number"
                ),
              },
            })}
            type="password"
            placeholder="Enter your password"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
              errors.password
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p role="alert" className="text-sm text-red-600 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            id="confirmPassword"
            {...register("confirmPassword", {
              required: VALIDATION_MESSAGES.required("Confirm Password"),
              validate: (value) => {
                const password = getValues("password");
                return (
                  value === password || VALIDATION_MESSAGES.passwordsMatch()
                );
              },
            })}
            type="password"
            placeholder="Confirm your password"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
            aria-invalid={!!errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <p role="alert" className="text-sm text-red-600 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-200"
          } text-white focus:outline-none`}
        >
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default ComplexReactHookForm;

import { useState } from "react";
import InputStateOutside from "./InputStateOutside";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputStateOutside
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
        placeholder="Name"
      />
      <InputStateOutside
        type="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

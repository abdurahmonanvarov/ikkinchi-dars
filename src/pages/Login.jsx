import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Inputdagi o'zgarishlarni ushlab olish
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dinamik ravishda qiymatlarni o'zgartiramiz
    });
  };

  // Formani yuborish funksiyasi
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yuborilgan ma'lumotlar:", formData);
    if (!formData.password.trim()) {
      //alert(`Email: ${formData.email} \nParol: ${formData.password}`);
      toast.warn("Iltimos, parolni to'ldiring!");
    }

    if (!formData.email.trim()) {
      //alert(`Email: ${formData.email} \nParol: ${formData.password}`);
      toast.warn("Iltimos, email to'ldiring!");
    }
  };

  return (
    <div className="h-screen grid place-items-center w-full">
      <form onSubmit={handleSubmit} className="max-w-96 mx-auto w-full">
        <h1 className="text-4xl mb-5 text-center font-bold">Login</h1>

        <FormInput
          type="email"
          placeholder="Enter your email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <FormInput
          type="password"
          placeholder="Enter your password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="my-5">
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </div>

        <div className="text-center">
          <p>
            If you have not account, Register{" "}
            <Link to="/register" className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;

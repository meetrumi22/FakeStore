import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components";
import { createAccount } from "../../lib/appwrite/api";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const SubmitHandler = async (data) => {
    setError("");
    try {
      const userData = await createAccount(data);
      if (userData) {
        console.log(userData);
        navigate("/");
      }
    } catch (error) {
      setError(error?.message);
      console.log(error);
      throw error;
    }
  };
  return (
    <>
      <div className="flex flex-col space-y-4">
        {error && <p>{error}</p>}
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="flex flex-col space-y-4"
        >
          <Input
            type={"text"}
            placeholder={"Enter Name"}
            {...register("name", { required: true })}
          />
          <Input
            type={"email"}
            placeholder={"Enter Email"}
            {...register("email", { required: true })}
          />
          <Input
            type={"password"}
            placeholder={"Enter Password"}
            {...register("password", { required: true })}
          />
          <Input type={"submit"} value={"Submit"} />
        </form>
      </div>
    </>
  );
};

export default Signup;

"use client";
import React from "react";
import useLineMutations from "../hooks/useLineMutations";
import { useForm } from "react-hook-form";
import { LineType } from "@/types/types";
import toast from "react-hot-toast";
const FormComponent = () => {
  const { createLineMutation } = useLineMutations();
  const { handleSubmit, register, reset } = useForm<LineType>();
  const onSubmit = (data: LineType) => {
    createLineMutation.mutate(data, {
      onError: () => {
        toast.error("Kuch toh galat hua hai🥲!");
      },
      onSuccess: () => {
        toast.success("Dua lagegi aapko singles ki❤️!");
        reset();
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("pickupLine")} required  placeholder="Pickup line here" />
        <input type="text" {...register("contributor")} required placeholder="Your name here" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default FormComponent;

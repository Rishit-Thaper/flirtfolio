import React, { useEffect } from "react";
import useLineMutations from "../hooks/useLineMutations";
import { useForm } from "react-hook-form";
import { LineType } from "@/types/types";
import toast from "react-hot-toast";
import { toggleProps } from "./Footer";
import { MdClose } from "react-icons/md";
const FormComponent: React.FC<toggleProps> = ({ onClose }) => {
  const { createLineMutation } = useLineMutations();
  const { handleSubmit, register, reset } = useForm<LineType>();

  const onSubmit = (data: LineType) => {
    createLineMutation.mutate(data, {
      onError: () => {
        toast.error("Kuch toh galat hua hai🥲!");
      },
      onSuccess: () => {
        toast.dismiss();
        toast.success("Dua lagegi aapko singles ki❤️!");
        reset();
        onClose!();
      },
    });
  };
  useEffect(() => {
    if (createLineMutation.isPending) {
      toast.loading("Ruko zara, Sabar karo😏!");
    }
  }, [createLineMutation.isPending]);
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h2>Submit Pickup Line</h2>
        <span className="close-button" onClick={onClose}>
          <MdClose />
        </span>
      </div>
      <form className="modal-body" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("pickupLine")}
          required
          placeholder="Pickup line here"
        />
        <input
          type="text"
          {...register("contributor")}
          required
          placeholder="Your name here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;

import toast from "react-hot-toast";

export const handleCopy = (pickupLine: string) => {
  navigator.clipboard
    .writeText(pickupLine)
    .then(() => {
      toast.success("Copy Hogya, ab bhejde usee 😁❤️!");
    })
    .catch((error) => {
      console.error("Failed to copy pickup line:", error);
    });
};

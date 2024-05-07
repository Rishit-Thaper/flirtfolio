"use client";
import React from "react";
import useLineQuery from "@/hooks/useLineQuery";
import { toggleProps } from "./Footer";
import { MdClose } from "react-icons/md";
const LineComponent: React.FC<toggleProps> = ({ onClose }) => {
  const { getRandomQuery } = useLineQuery();
  const { data } = getRandomQuery;
  return (
    <>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{data?.text}</h2>
          <span className="close-button" onClick={onClose}>
            <MdClose />
          </span>
        </div>
      </div>
    </>
  );
};

export default LineComponent;

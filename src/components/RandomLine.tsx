"use client";
import React from "react";
import useLineQuery from "@/hooks/useLineQuery";
import { toggleProps } from "./Footer";
import { MdClose } from "react-icons/md";
import { handleCopy } from "@/conf/Copy";
const LineComponent: React.FC<toggleProps> = ({ onClose }) => {
  const { getRandomQuery } = useLineQuery();
  const { data } = getRandomQuery;
  return (
    <>
      <div className="modal-content">
        <div className="modal-header">
          <div className="line-random" onClick={() => handleCopy(data?.text)}>
            <h4>{data?.text}</h4>
            <p>Click to copy</p>
          </div>
          <span className="close-button" onClick={onClose}>
            <MdClose />
          </span>
        </div>
      </div>
    </>
  );
};

export default LineComponent;

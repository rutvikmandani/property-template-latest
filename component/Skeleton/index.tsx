import React from "react";

const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div className={`rounded-xl bg-gray-200 animate-pulse ${className}`} />
  );
};

export default Skeleton;

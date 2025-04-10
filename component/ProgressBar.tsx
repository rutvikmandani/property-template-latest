"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#28599d"
        options={{
          showSpinner: false,
        }}
        nonce="progress-bar"
      />
    </>
  );
};

export default ProgressProvider;

"use client";
import { useIsFetching } from "@tanstack/react-query";

export const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="loader"></div>
    </div>
  );
};

const QueryLoader = () => {
  const isFetching = useIsFetching({
    predicate: (query) => query.queryKey[0] !== "excludedQueryKey",
  });

  if (!isFetching) return null;

  return <FullPageLoader />;
};

export default QueryLoader;

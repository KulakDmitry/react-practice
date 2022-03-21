import React, { lazy, Suspense } from "react";

const LoadingComponent = lazy(() => import("../LazyLoading/LoadingComponent"));

export default function LazyLoadingPage() {
  return (
    <Suspense fallback={<div className="text-6xl text-center">Loading...</div>}>
      <LoadingComponent />
    </Suspense>
  );
}

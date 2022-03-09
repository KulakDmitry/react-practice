import React, { lazy, Suspense } from "react";

const LoadingComponent = lazy(() => import("../LazyLoading/LoadingComponent"));

export default function LazyLoadingPage() {
  return (
    <div>
      <Suspense
        fallback={<div className="text-6xl text-center">Loading...</div>}
      >
        <div className="App">
          <LoadingComponent />
        </div>
      </Suspense>
    </div>
  );
}

"use client";

import { useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Hero from "@/components/sections/Hero";

export default function LoadingWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <Hero isLoaded={!isLoading} />
    </>
  );
}
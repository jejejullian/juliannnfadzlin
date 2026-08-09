"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Hero from "@/components/sections/Hero";

export default function LoadingWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Hero isLoaded={!isLoading} />
    </>
  );
}
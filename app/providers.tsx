'use client'

import { useEffect } from "react";

// TODO: Do we need this or can it be moved to Layout client component?
export function Providers({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return children
}

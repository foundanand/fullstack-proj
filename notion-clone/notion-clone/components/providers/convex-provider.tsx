"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { convexProviderWithClerk } from "convex/react-cleark";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const ConvexClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <convexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </convexProviderWithClerk>
    </ClerkProvider>
  );
};

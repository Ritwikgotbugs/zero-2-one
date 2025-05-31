import { AuthComponent } from "@/components/constants/auth/login";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<any>(null);
  const [verified, setverified] = React.useState<boolean>(false); // for testing

  return (
    <div className={verified ? "" : "relative"}>
      {!verified && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <AuthComponent/>
        </div>
      )}
      
      <div className={verified ? "" : "pointer-events-none opacity-80 blur-xs"}>
        {children}
      </div>
    </div>
  );
};

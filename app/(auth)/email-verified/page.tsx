import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { ArrowRight, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EmailVerified = () => {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 animate-pulse">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <CardTitle className="text-2xl text-green-700">
          Email Verified
        </CardTitle>
        <CardDescription className="text-base">
          {/* {description}
          {userEmail && (
            <>
              <br />
              <span className="font-medium text-foreground mt-2 block">
                {userEmail}
              </span>
            </>
          )} */}
          <span className="font-medium text-foreground mt-2 block">
            example@email.com
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="bg-green-50 border border-green-200">
          <AlertTitle className="text-green-600">
            Verification Complete
          </AlertTitle>
          <AlertDescription className="text-green-700">
            You can now access all features of your account and enjoy the full
            experience.
          </AlertDescription>
        </Alert>
        <div className="space-y-3">
          <Button className="w-full" asChild>
            <Link href="/dashboard">Proceed to Dashboard</Link>
          </Button>

          <Button variant="outline" className="w-full" asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default EmailVerified;

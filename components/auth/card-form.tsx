import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardFormProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  buttonDescription: string;
  children: React.ReactNode;
}

export const CardForm = ({
  title,
  description,
  children,
  buttonLabel,
  buttonHref,
  buttonDescription,
}: CardFormProps) => {
  return (
    <Card className="mx-auto w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <div className="mt-4 text-center text-sm">
          {buttonDescription}
          <Link href={buttonHref} className="ml-2 hover:underline">
            {buttonLabel}
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

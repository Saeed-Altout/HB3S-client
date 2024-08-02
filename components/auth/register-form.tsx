"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { CardForm } from "@/components/auth/card-form";
import { FieldForm } from "@/components/auth/field-form";

import { FieldType } from "@/config";
import { registerSchema } from "@/schemas";
import { register } from "@/actions/register";

export function RegisterForm() {
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    startTransition(() => {
      register(values).then((data) => {
        if (data?.success) {
          router.push("/auth/login");
        }
        if (data?.error) {
          toast.error(data?.error || "Something went wrong!");
        }
      });
    });
  };

  return (
    <CardForm
      title="Register"
      description="Create a new account"
      buttonHref="/auth/login"
      buttonLabel="Sign in"
      buttonDescription="Already have an account?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FieldForm
            name="name"
            type="text"
            label="Name"
            placeholder="name"
            control={form.control}
            fieldType={FieldType.INPUT}
            isLoading={isLoading}
          />
          <FieldForm
            name="email"
            type="email"
            label="Email"
            placeholder="email"
            control={form.control}
            fieldType={FieldType.INPUT}
            isLoading={isLoading}
          />
          <FieldForm
            name="password"
            type="password"
            label="Password"
            placeholder="******"
            control={form.control}
            fieldType={FieldType.INPUT}
            isLoading={isLoading}
          />
          <Button disabled={isLoading} type="submit" className="w-full">
            Sign up
          </Button>
        </form>
      </Form>
    </CardForm>
  );
}

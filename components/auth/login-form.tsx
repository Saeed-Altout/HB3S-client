"use client";

import Link from "next/link";

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

import { loginSchema } from "@/schemas";
import { FieldType } from "@/config";
import { login } from "@/actions/login";

export function LoginForm() {
  const [isLoading, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    startTransition(() => {
      login(values).then((data) => {
        if (data?.success) {
          toast.success(data?.success);
        }
        if (data?.error) {
          toast.error(data?.error);
        }
      });
    });
  };

  return (
    <CardForm
      title="Login"
      description="Enter your email below to login to your account"
      buttonHref="/auth/register"
      buttonLabel="Sign up"
      buttonDescription="Don't have an account?"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
          <Link
            href="/auth/reset-password"
            className="text-sm hover:underline block"
          >
            Forget password?
          </Link>
          <Button disabled={isLoading} type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Form>
    </CardForm>
  );
}

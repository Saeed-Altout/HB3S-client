"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { CardForm } from "@/components/auth/card-form";
import { FieldForm } from "@/components/auth/field-form";

import { loginSchema } from "@/schemas";
import { FieldType } from "@/config";

export function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  return (
    <CardForm
      title="Login"
      description="Enter your email below to login to your account"
      buttonHref="/register"
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
            isLoading={false}
          />
          <FieldForm
            name="password"
            type="password"
            label="Password"
            placeholder="******"
            control={form.control}
            fieldType={FieldType.INPUT}
            isLoading={false}
          />
          <Link
            href="/auth/reset-password"
            className="text-sm hover:underline block"
          >
            Forget password?
          </Link>
          <Button disabled={false} type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Form>
    </CardForm>
  );
}

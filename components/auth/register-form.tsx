"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { CardForm } from "@/components/auth/card-form";
import { FieldForm } from "@/components/auth/field-form";

import { registerSchema } from "@/schemas";
import { FieldType } from "@/config";

export function RegisterForm() {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
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
            isLoading={false}
          />
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
          <Button disabled={false} type="submit" className="w-full">
            Sign up
          </Button>
        </form>
      </Form>
    </CardForm>
  );
}

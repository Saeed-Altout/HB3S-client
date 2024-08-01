"use client";

import { Control } from "react-hook-form";
import { FieldType } from "@/config";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FieldFormProps {
  control: Control<any>;
  fieldType: FieldType;
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
}

export const FieldForm = (props: FieldFormProps) => {
  const { control, fieldType, name, label } = props;

  const renderField = (
    fieldType: FieldType,
    field: any,
    props: FieldFormProps
  ) => {
    const { type, placeholder, isLoading } = props;

    switch (fieldType) {
      case FieldType.INPUT:
        return (
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              disabled={isLoading}
              {...field}
            />
          </FormControl>
        );
      default:
        break;
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          {renderField(fieldType, field, props)}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { BeatLoader } from "react-spinners";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { Modal } from "@/components/ui/modal";
import { useSessionModal } from "@/hooks/use-session-modal";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const formSchema = z.object({
  duration: z.string().default("60"),
});

export const SessionModal = () => {
  const sessionModal = useSessionModal();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      duration: "60",
    },
  });

  const getData = (duration: number) => {
    setTimeout(async () => {
      setIsLoading(false);
    }, duration * 1000);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      await axios.post("http://localhost:5001/api/session/create", {
        duration: values.duration,
      });
      getData(+values.duration);
    } catch (error) {
      console.error(error);
    } finally {
      form.reset();
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <Modal
          title=""
          description=""
          isOpen={sessionModal.isOpen}
          onClose={sessionModal.onClose}
          isLoading={isLoading}
        >
          <div className="flex flex-col justify-center items-center gap-y-5">
            <BeatLoader />
            <p>Glucose calculate now, Loading please.</p>
          </div>
        </Modal>
      ) : (
        <Modal
          title="Added Session"
          description="You can added a new session."
          isOpen={sessionModal.isOpen}
          onClose={sessionModal.onClose}
          isLoading={isLoading}
        >
          {!isLoading && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select duration</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="default" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="60">1 min - 1x</SelectItem>
                            <SelectItem value="120">2 min - 2x</SelectItem>
                            <SelectItem value="180">3 min - 3x</SelectItem>
                            <SelectItem value="240">4 min - 4x</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 w-full flex justify-end items-center gap-x-4">
                  <Button
                    disabled={isLoading}
                    variant="outline"
                    type="button"
                    onClick={sessionModal.onClose}
                  >
                    Cancel
                  </Button>
                  <Button disabled={isLoading} type="submit">
                    start
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </Modal>
      )}
    </>
  );
};

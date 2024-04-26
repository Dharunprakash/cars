'use client'

import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import * as z from 'zod'

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";


import { useTransition,useState} from "react";
import { RegisterSchema } from "@/schema";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const RegisterForm = () =>  {
  const [isPending,startTransition] = useTransition();
 
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    }
  });
  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
   
  }
  
  return ( 
    <CardWrapper
    headerLabel="Create an account"
    backButtonLabel="Already have an account"
    backButtonHref="/auth/login"
    showSocial
    >
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <FormField 
        control={form.control}
        name="name"
        render={({field})=>(
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
              {...field}
              // type="email"
              disabled={isPending}
              placeholder="joe"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        <FormField 
        control={form.control}
        name="email"
        render={({field})=>(
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
              {...field}
              disabled={isPending}
              placeholder="joe@gmail.com"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        <FormField 
        control={form.control}
        name="password"
        render={({field})=>(
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input
              {...field}
              disabled={isPending}
              type="password"
              placeholder='******'
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      </div>
      <Button
      disabled={isPending}
      type='submit'
      className="w-full"
      >
        Create an account
      </Button>
      </form>
    </Form>
    </CardWrapper>
  );
}
export default RegisterForm;
'use client'

import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import * as z from 'zod'

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";



import { useTransition,useState} from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { LoginSchema } from "@/schema";
import { Button } from "./ui/button";
const LoginForm = () =>  {

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError= searchParams.get('error') === "OAuthAccountNotLinked" ? "Email already in use with differrent provider" : "";

  const [isPending,startTransition] = useTransition();
  const [error,setError] = useState<string|undefined>('');
  const [success,setSuccess] = useState<string|undefined>('');
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
   
  }
  return ( 
    <CardWrapper
    headerLabel="Welcome Back"
    backButtonLabel="Don't have an account"
    backButtonHref="/auth/register"
    showSocial
    >
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <FormField 
        control={form.control}
        name="email"
        render={({field})=>(
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
              {...field}
              // type="email"
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
            <Button size='sm' variant='link' asChild className="px-0 font-normal">
              <Link href="/auth/reset">Forget Password?</Link>
            </Button>
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
        Login
      </Button>
      </form>
    </Form>
    </CardWrapper>
  );
}
export default LoginForm;
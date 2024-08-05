"use client"
import { IconGitHub, IconGoogle, IconLinkedin } from "@/components"
import { useForm, SubmitHandler } from "react-hook-form"
import buttonImage from "/public/image/button.png"
import fondo from "/public/category/fondo.png"
import Link from "next/link"
import Image from "next/image"

type Inputs = {
  email: string
  password: string
  confirmPassword: string
}

function Register() {

  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm<Inputs>()

  const password = watch("password")

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Registered!", data)
  }


  return (

    <div className="relative">
      <Image src={fondo} alt="fondo verde" fill priority />
      <div className="flex justify-between min-h-screen items-center max-w-[1200px] mx-auto gap-10 px-6 relative">

        <div className="text-texto-green">
          <h1 className="text-7xl font-bold tracking-wide ">Tu camino al éxito <br></br> comienza aquí</h1>
          <p className="text-4xl tracking-tight mt-4 ">Inicia sesión o regístrate para <br></br> impulsar tu desarrollo</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-4 w-[350px] bg-fondo-card p-6 border rounded-md">

          <div className="flex flex-col gap-1">
            <label htmlFor="email ">Email</label>
            <input
              type="email"
              placeholder="user@gmail.com"
              className={`border bg-fondo-input-menu outline-none p-1.5 rounded-md px-4 ${errors.email && "border-red-500"}`} id="email" {...register("email", {
                required: "Email required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email adress"
                }
              })}
            />
            {errors.email && <span className="text-red-500 text-sm ">{errors.email.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="********"
              className={`border bg-fondo-input-menu outline-none p-1.5 rounded-md px-4 ${errors.email && "border-red-500"}`}
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                }
              })}
            />
            {errors.password && <span className="text-red-500 text-sm ">{errors.password.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="confirmPassword">Repeat password</label>
            <input
              type="password"
              placeholder="********"
              className={`border bg-fondo-input-menu outline-none p-1.5 rounded-md px-4 ${errors.confirmPassword && "border-red-500"}`}
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: value => value === password || "Password do not match"
              })}
            />
            {errors.confirmPassword && <span className="text-red-500 text-sm ">{errors.confirmPassword.message}</span>}

          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-fondo-button text-white py-3 mt-3 rounded-lg">{isSubmitting ? "Registrando..." : "Registrate"}
          </button>
          {/* <div className="px-2">
            <Image src={buttonImage} alt="un boton" className="w-full object-fill h-12" />
          </div> */}

          <div className="flex items-center gap-8 my-4">

            <div className="h-0.5 w-full bg-fondo-input-menu rounded-full" />
            <span className="font-bold">O</span>
            <div className="h-0.5 w-full bg-fondo-input-menu rounded-full" />

          </div>

          <div className="flex justify-center gap-10 text-white">
            <div className="size-16 bg-fondo-input-menu rounded-full flex justify-center items-center"> <IconGoogle /></div>
            <div className="size-16 bg-fondo-input-menu rounded-full flex justify-center items-center"><IconGitHub /></div>
            <div className="size-16 bg-fondo-input-menu rounded-full flex justify-center items-center"><IconLinkedin /></div>
          </div>

          {/* 
        <div className="flex space-x-2 -mt-2">
          <input type="checkbox" className="rounded-xl"></input>
          <span>Remember me</span>
        </div> */}



          <div className=" flex justify-between px-4">
            <span className="mt-4 w-fit h-fit">¿Ya tienes cuenta?</span>
            <Link href={"/auth/login"}><p className="mt-4 w-fit border-b-2 border-black pb-0">Logeate</p></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
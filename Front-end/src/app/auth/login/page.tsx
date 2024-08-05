
"use client"

import { IconGitHub, IconGoogle, IconLinkedin } from "@/components"
import { useForm, SubmitHandler } from "react-hook-form"
import fondo from "/public/category/fondo.png"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

type Inputs = {
    email: string
    password: string
    confirmPassword: string
}

function Login() {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {

        router.push("/dashboard/user")
    }

    return (

        <div className="relative">

            <Image src={fondo} alt="fondo verde" fill />
            <div className="flex justify-between min-h-screen items-center max-w-[1200px] mx-auto gap-10 px-6 relative">

                <div className="text-texto-green" >
                    <h2 className="text-7xl font-bold mb-7 ">
                        Tu camino al éxito comienza aquí
                    </h2>
                    <p className="text-4xl pr-24">Inicia sesión o regístrate para impulsar tu desarrollo</p>

                </div>

                <form onSubmit={handleSubmit(onSubmit)}
                    className="max-w-[330px] drop-shadow-lg w-full flex flex-col gap-4 p-6  border border-gray-300 rounded-md bg-fondo-card">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="user@gmail.com"
                            className={`border outline-none text-texto-green bg-fondo-input-menu p-1.5 rounded-md px-4 ${errors.email && "border-red-500"}`}
                            id="email"
                            {...register("email", {
                                required: "Email required",
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "Invalid email adress"
                                }
                            })} />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className={`border px-4 bg-fondo-input-menu outline-none text-texto-green p-1.5 rounded-md ${errors.email && "border-red-500"}`}
                            id="password"
                            {...register("password", {
                                required: "Required password",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                },
                            })}
                        />
                        {errors.password && <span className="text-red-500 text-sm ">{errors.password.message}</span>}
                    </div>

                    <button type="submit" className="py-3 mt-5 rounded-md bg-fondo-button text-white" disabled={isSubmitting}>{isSubmitting ? "Logging..." : "Iniciar sesión"}</button>

                    <div className="flex items-center gap-8 my-4">
                        <div className="h-0.5 w-full bg-fondo-input-menu rounded-full" />
                        <span className="font-bold">O</span>
                        <div className="h-0.5 w-full bg-fondo-input-menu rounded-full" />
                    </div>

                    {/* BOTONES  */}
                    <div className="flex justify-center gap-10 text-white">
                        <div className="size-16  bg-fondo-input-menu rounded-full flex justify-center items-center"> <IconGoogle /></div>
                        <div className="size-16  bg-fondo-input-menu rounded-full flex justify-center items-center"><IconGitHub /></div>
                        <div className="size-16  bg-fondo-input-menu rounded-full flex justify-center items-center"><IconLinkedin /></div>
                    </div>

                    <div className="mt-6 mb-2 flex justify-between px-4">
                        <span className="">Eres nuevo?</span>
                        <Link href={"/auth/register"} ><span className="underline underline-offset-4">Regístrate</span></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
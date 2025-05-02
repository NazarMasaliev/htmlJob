"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(2, "Введите имя"),
  lastName: z.string().min(2, "Введите фамилию"),
  email: z.string().email("Некорректный email"),
  phone: z
    .string()
    .min(10, "Минимум 10 цифр")
    .regex(/^\+?[0-9\s\-()]+$/, "Некорректный формат телефона"),
});

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Регистрационные данные:", data);
    // TODO: отправка на сервер
  };
  function closemodal() {
    document.getElementById('modal')?.classList.add('hidden');
    document.getElementById('modal2')?.classList.remove('fixed');
  }

  return (
    <div id="modal" className="w-[100%] flex justify-center items-center bg-black/50 absolute  z-50 h-[100%] hidden" >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-0 rounded shadow-md lg:w-full md:w-[80%] max-w-md"
      >
        <div className="w-full flex justify-end pe-3 pt-1 pb-0 text-[20px] font-bold cursor-pointer" onClick={closemodal}>X</div>
        <div className="w-full flex flex-col justify-center p-8 pt-0 ">
          <h2 className="lg:text-2xl md:text-xl  font-semibold mb-6 text-center">Регистрация</h2>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Имя</label>
            <input
              {...register("firstName")}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Фамилия</label>
            <input
              {...register("lastName")}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Почта</label>
            <input
              {...register("email")}
              type="email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Телефон</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+7 (___) ___-__-__"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Зарегистрироваться
          </button>
        </div>





      </form>
    </div>

  );
}

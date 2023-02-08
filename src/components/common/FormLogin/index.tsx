import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './formLogin.css';
import { Link } from 'react-router-dom'  


type Login = {
  email: string,
  password: string
};

function index() {
  
  // expresion regular 
  const reqExp = {
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  }

  const {register, handleSubmit, watch, formState: { errors }} = useForm<Login>();
  const onSubmit:SubmitHandler<Login> = data => console.log(data);

  

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8">
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-medium text-gray-900 '>Correo</label>
        <input type="text" 
          {...register("email", { required: true, pattern: reqExp.email })} 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rouded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
          placeholder='correo@dominio.com'/>
        {errors.email?.type === 'required' && <span className='form-login-error'>Correo requerido</span> }
        {errors.email?.type === 'pattern' && <span className='form-login-error'>Revisa bien, no es un formato de correo</span> }
      </div>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 '>Contraseña</label>
        <input type="password" 
          {...register("password",  { required: true, minLength: 8 })} 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rouded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
          placeholder='Contraseña' />
        {errors.password?.type === 'required' && <span className='form-login-error'>Contraseña requerida</span> }
        {errors.password?.type === 'minLength' && <span className='form-login-error'>La contraseña debe tener minimo 8 Caracteres</span> }
      </div>

      <Link to='/admin/provider' className='flex justify-center'>
      <input type="submit" 
        value='Entrar'
        className='w-full py-2 mt-6  bg-blue-800 text-white rounded cursor-pointer '></input>
      </Link>
    </form>
  )
}

export default index

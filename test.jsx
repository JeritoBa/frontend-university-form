import { useForm } from 'react-hook-form'

function App() {
  const { 
    register, // Registra cada input y permite agregarle determinadas propiedades
    handleSubmit, // Ayuda con el envio del formulario
    formState: { errors }, // Muestra los errores del formulario
    watch, // Observa el formulario en su estado actual sin necesidad de mandarlo
    setValue, // Sirve para agregar valores al form general sin necesidad de un input
    reset
   } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data);

    reset();
  })

  return <form onSubmit={onSubmit}>
      {/* Nombre */}
      <label htmlFor="nombre">Nombre: </label>
      <input type="text" {
        ...register("nombre", { // Permite darle ciertos valores al input, además del identificador.
          required: {
            value: true,
            message: "Nombre es requerido"
          },
          minLength: {
            value: 4,
            message: "Minimo de 4 caracteres"
          },
          maxLength: {
            value: 15,
            message: "Maximo 15 caracteres"
          }
        })
      } />
      
      { errors.nombre && <span className="errorSpan">{errors.nombre.message}</span> /* Muestra el mensaje dentro del span segun el error determinado */} 

      {/* Correo */}
      <label htmlFor="correo">Correo Electrónico: </label>
      <input type="email" {
        ...register("correo", { 
          required: {
            value: true,
            message: "Correo es requerido"
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          }
        })
      }/>
      { errors.correo && <span className='errorSpan'>{errors.correo.message}</span> }

      {/* Contraseña */}
      <label htmlFor="contraseña">Contraseña: </label>
      <input type="password" {
        ...register("contraseña", { 
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
          minLength: {
            value: 6,
            message: "La contraseña debe tener minimo 6 caracteres"
          },
          maxLength: {
            value: 15,
            message: "La contraseña debe tener un maximo de 15 valores"
          }
        })
      }/>
      { errors.contraseña && <span className="errorSpan">{errors.contraseña.message}</span> }

      {/* Confirmar contraseña */}
      <label htmlFor="confirmarContraseña">Confirmar Contraseña: </label>
      <input type="password" {
        ...register("confirmarContraseña", { 
          required: {
            value: true,
            message: "Confirmar contraseña es requerido"
          },
          validate: (password) => password === watch("contraseña") || "Las contraseñas no coinciden"
        })
      } />
      { errors.confirmarContraseña && <span className="errorSpan">{errors.confirmarContraseña.message}</span> }

      {/* Fecha de Nacimiento */}
      <label htmlFor="cumpleaños">Fecha de Nacimiento</label>
      <input type="date" {
        ...register("cumpleaños", { 
          required: {
            value: true,
            message: "Fecha de nacimiento es requerida"
          },
          validate: (date) => { // Validate sirve para validar los datos del input y devolver un valor booleano. Te permite crear tu propia lógica
            const fechaNacimiento = new Date(date)
            const fechaActual = new Date()

            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()

            return edad >= 18 || "Debe ser mayor de edad"
          }
        })
      }/>
      { errors.cumpleaños && <span className="errorSpan">{errors.cumpleaños.message}</span> }

      {/* Pais */}
      <label htmlFor="pais">Pais</label>
      <select {...register("pais", { required: true })}>
        <option value="mx">México</option>
        <option value="co">Colombia</option>
        <option value="esp">España</option>
      </select>

      {watch("pais") == "co" && (
        <>
          <input type="text" placeholder="Ciudad"  {...register("ciudad", { required: { value: true, message: "Debes colocar la ciudad"} })}/>
          {errors.ciudad && <span className="errorSpan">{errors.ciudad.message}</span>}
        </>
      )}

      {/* Foto de perfil */}
      <label htmlFor="fotoPerfil">Foto de perfil:</label>
      <input type="file" onChange={(e) => {
        setValue('fotoDelUsuario', e.target.files[0].name)
      }}/>
      {errors.fotoPerfil && <span className="errorSpan">{errors.fotoPerfil.message}</span>}

      {/* Terminos y condiciones */}
      <label htmlFor="terminos">¿Aceptas términos y condiciones?</label>
      <input type="checkbox" {
        ...register("terminos", { 
          required: {
            value: true,
            message: "Terminos deben ser aceptados"
          }
        })
      } />
      { errors.terminos && <span className="errorSpan">{errors.terminos.message}</span> }

      {/* Mandar datos */}
      <button type="submit">Enviar</button>

      <pre>
        {JSON.stringify(watch(), null, 2)}
      </pre>

  </form>
}

export default App

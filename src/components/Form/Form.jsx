import style from "./Form.module.css";
import { useForm } from "react-hook-form";

export const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur"
  });

  function handleFormSubmit(data) {
    console.log(data)
  }

  return (
    <div className={style.formSection}>
      <div className="container">
        <div className={style.wrapper}>
          <form className={style.form} onSubmit={handleSubmit(handleFormSubmit)}>
            <h3 className={style.title}>Пожалуйста, представьтесь</h3>
            <input
              className={style.inputForm}
              type="text"
              {...register("name", {
                required: "Поле заполнено неверно"
              })}
              placeholder="Ваше имя"
            />
            <div>
              {errors?.name && <p className={style.errorMessage}>{errors?.name?.message}</p>}
            </div>
            <input
              className={style.inputForm}
              type="tel"
              {...register("tel", {
                required: "Поле заполнено неверно"
              })}
              placeholder="Телефон"
            />
            <div>
              {errors?.tel && <p className={style.errorMessage}>{errors?.tel?.message}</p>}
            </div>
            <input
              className={style.inputForm}
              type="text"
              {...register("email", {
                required: "Поле заполнено неверно"
              },
                {
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: ""
                  }
                })}
              placeholder="Email"
            />
            <div>
              {errors?.email && <p className={style.errorMessage}>{errors?.email?.message}</p>}
            </div>
            <div className={style.buttonForm}>
              <button className={style.buttonBlue}>Оформить заказ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

import { useState } from "react";
import style from "./Form.module.css";
import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";


export const Form = () => {

  const [modalActive, setModalActive] = useState(false);
  const [dataForm, setDataForm] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: { name: "", phone: "", email: "" }
  });

  function handleFormSubmit(data) {
    // console.log(data);
    setDataForm(data);
    setModalActive(true);
    reset();
  }
  console.log(dataForm);

  return (
    <>
      <div className={style.formSection}>
        <div className="container">
          <div className={style.wrapper}>
            <form className={style.form} onSubmit={handleSubmit(handleFormSubmit)}>
              <h3 className={style.title}>Пожалуйста, представьтесь</h3>
              <input
                className={style.inputForm}
                type="text"
                {...register("name", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Введите минимум 5 букв"
                  }
                })}
                placeholder="Ваше имя"
                autoComplete="off"
              />
              <div>
                {errors?.name && <p className={style.errorMessage}>{errors?.name.message}</p>}
              </div>
              <input
                className={style.inputForm}
                type="phone"
                {...register("phone", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 11,
                    message: "Введите минимум 11 цифр"
                  }
                })}
                placeholder="Телефон"
                autoComplete="off"
              />
              <div>
                {errors?.phone && <p className={style.errorMessage}>{errors?.phone.message}</p>}
              </div>
              <input
                className={style.inputForm}
                type="text"
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "email заполнен не верно"
                  }
                },
                )}
                placeholder="Email"
                autoComplete="off"
              />
              <div>
                {errors?.email && <p className={style.errorMessage}>{errors?.email.message}</p>}
              </div>
              <div className={style.buttonForm}>
                <button type="submit" disabled={!isDirty || !isValid} className={style.buttonBlue}>Оформить заказ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        dataForm={dataForm}
      />
    </>

  )
}

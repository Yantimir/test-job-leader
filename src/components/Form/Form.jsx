import { useContext, useState } from "react";
import style from "./Form.module.css";
import { ShopContext } from "../../context/context";
import { useForm } from "react-hook-form";
import axios from "axios";

import Modal from "../Modal/Modal";

export const Form = () => {

  // const [ setSent ] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const { setDataForm, dataForm } = useContext(ShopContext);
  let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: { name: "", phone: "", email: "" }
  });

  const handleSend = async (data) => {
		try {
			await axios.post("http://localhost:4000/send_mail", {
				data
			})
		} catch (error) {
			console.error(error)
		}
	}

  function handleFormSubmit(data) {
    setDataForm(data);
    handleSend(data);
    setModalActive(true);
    reset();
  }

  return (
    <>
      <div className={style.formSection}>
        <div className="container">
          <div className={style.wrapper}>
            <form
              className={style.form}
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <h3 className={style.title}>Пожалуйста, представьтесь</h3>
              <input
                name="name"
                className={!errors?.name ? style.inputForm : style.inputFormError}
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
                name="phone"
                className={!errors?.phone ? style.inputForm : style.inputFormError}
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
                name="email"
                className={!errors?.email ? style.inputForm : style.inputFormError}
                type="email"
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
      >
        <h4 className={style.messageTitle}>Спасибо <span>{dataForm.name},</span> ваш заказ <span>№{randomNumber}</span> оформлен.</h4>
        <h6 className={style.messageText}>В ближайшее время мы свяжемся в вами по телефону <span>{dataForm.phone}</span> для его подтверждения.</h6>
      </Modal>
    </>
  )
}

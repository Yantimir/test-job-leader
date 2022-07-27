import React from "react";
import style from "./Modal.module.css";
import classNames from "classnames";
// import { CloseOutlined } from "@ant-design/icons/lib/icons";
import { Icon20Cancel } from '@vkontakte/icons';
import { useNavigate } from "react-router-dom";

function _Modal({ active, setActive, dataForm }) {

    console.log(dataForm)

    const { name, phone, email } = dataForm;
    const navigate = useNavigate();
    return (
        <div className={classNames(style.modal,
            {
                [style.active]: active
            })}
            onMouseDown={() => {
                setActive(false);
                navigate("/");
            }}>
            <div className={style.content} onMouseDown={(e) => e.stopPropagation()}>
                <Icon20Cancel
                    className={style.crossIcon}
                    onClick={() => {
                        setActive(false);
                        navigate("/");
                    }}
                />
                {name}
                {phone}
                {email}
            </div>
        </div>
    );
}

export default _Modal;
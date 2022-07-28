import React from "react";
import style from "./Modal.module.css";
import classNames from "classnames";
import { Icon20Cancel } from '@vkontakte/icons';
import { useNavigate } from "react-router-dom";

function _Modal({ active, setActive, children }) {

    const navigate = useNavigate();

    return (
        <div className={classNames(style.modal,
            {
                [style.active]: active
            })}
            // onMouseDown={() => {
            //     setActive(false);
            //     navigate("/");
            // }}
        >
            <div className={style.content} onMouseDown={(e) => e.stopPropagation()}>
                <Icon20Cancel
                    className={style.crossIcon}
                    onClick={() => {
                        setActive(false);
                        navigate("/");
                    }}
                />
                {children}
            </div>
        </div>
    );
}

export default _Modal;
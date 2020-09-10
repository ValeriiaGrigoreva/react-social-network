import React from 'react';
import s from"./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img4.goodfon.ru/original/3200x1200/6/59/podvodnyi-mir-korally-ryby-iakhta-daiving-zhivotnye.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+desc
            </div>
        </div>
    )
}

export default ProfileInfo;
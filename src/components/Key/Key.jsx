import React from 'react';
import style from './Key.module.css'

const Key = ({keySound, playSound}) => {

    return (
        <button className={`${style['button-key']} ${ keySound.type === 'white' ? style.white : style.black }`}
                onClick={() => playSound(keySound.soundUrl)}
            >
            <span className={style.note}>{keySound.note}</span>
            <span className={style.code}>{keySound.keyCode}</span>
        </button>
    )
};

export default Key;

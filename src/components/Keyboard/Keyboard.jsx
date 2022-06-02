import React from 'react';
import keys from "../keys";
import Key from "../Key/Key";
import style from './Keyboard.module.css'

const Keyboard = () => {
    const onKeyboardKeyDown = async (e) => {
        const soundUrl = keys.find(item => e.code === `Key${item.keyCode}`)?.soundUrl
        if (soundUrl) {
            const audio = new Audio(soundUrl);
            await audio.play();
        }
    }
    const playSound = async (soundUrl) => {
        const audio = new Audio(soundUrl);
        await audio.play();
    }
    return (
        <div className={style.keyboard} onKeyDown={onKeyboardKeyDown}>
            {keys.map(item => <Key playSound={playSound} keySound={item} key={item.note}/>)}
        </div>
    )
};

export default Keyboard;

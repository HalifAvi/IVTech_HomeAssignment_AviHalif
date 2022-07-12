import { useRef } from 'react';
import { useEffect } from 'react';
import '../BasicElementStyle/Input.css';


const Input = ({ inputType,
                inputPlaceholder, 
                inputValue, 
                onChangeEvent,
                minNum,
                maxNum,
                classN,
                name,
                checked,
                id,
                accept
            }) => { 

    const checkedInputRef = useRef();

    useEffect(()=> {

        if(checked === "checked") {

            (checkedInputRef.current).setAttribute("checked", "checked");
        }

    }, [])

    return(

        <>
            <input ref={checkedInputRef} required={inputType!=="file"? true : false}
                onChange={null || onChangeEvent}
                type={null || inputType}
                placeholder={null || inputPlaceholder} 
                value={null || inputValue}
                min={null || minNum}
                max={null || maxNum}
                className={null || classN}
                name={null || name}
                id={null || id}
                accept={null || accept} />
        </>
    )
}

export default Input;
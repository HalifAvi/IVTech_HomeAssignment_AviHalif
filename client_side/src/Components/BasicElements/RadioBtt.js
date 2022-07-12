
import '../BasicElementStyle/RadioBtt.css';
import Image from "./Image";
import Input from './Input';
import ReactTooltip from 'react-tooltip';


const RadioBtt = ({optionsArray, onChangeEvent}) => { 

    return(
            <div className="form-radioBtt">
                {
                    optionsArray !== undefined ? 
                    
                    optionsArray.map((item, idx)=>{

                        return (<span className={'radioBtt-span'}> 
                                    <Input id={item.inputValue}
                                            classN={"radioBtt-input"} 
                                            inputValue={item.inputValue} 
                                            onChangeEvent={onChangeEvent} 
                                            inputType={"radio"} 
                                            checked={idx===(optionsArray.length)-1 ? "checked" : null}
                                            name={item.name}/>

                                    {
                                        item.name === "levels" ?
                                            <>
                                                <ReactTooltip/>
                                                <p data-tip={item.dataTip}
                                                data-text-color={idx%2 ? "black":"white"}
                                                data-background-color={idx%2 ? "white":"black"} 
                                                data-place={idx%2 ? "bottom":"top"}>
                                                <Image classN={"form-img"} src={item.src}/></p>
                                            </>

                                                            :

                                            <Image classN={"form-img"} src={item.src}/>

                                    }
                                </span>)
                    })

                    :

                    null
                }            
            </div>
    )
}

export default RadioBtt;



















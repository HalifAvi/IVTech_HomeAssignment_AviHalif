import "../BasicElementStyle/UploadFile.css";
import Input from "./Input";


const UploadFile = ({onChangeEvent}) => {
    

    return(

        <div id={"uploadFile-container"}>
            <Input inputType={'file'} name={'file'} accept={'.jpg,.png'} onChangeEvent={onChangeEvent} classN={"uploadFile-choose-btt"}/>
        </div>
    )
}

export default UploadFile;
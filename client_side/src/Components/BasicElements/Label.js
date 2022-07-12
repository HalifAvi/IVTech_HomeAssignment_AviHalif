import '../BasicElementStyle/Label.css';

const Label = ({labelName, classN}) => { 

    return(

        <>
              <label className={classN}>{labelName}</label>
        </>
    )
}

export default Label;
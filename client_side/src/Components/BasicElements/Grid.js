import '../BasicElementStyle/Grid.css';
import Image from './Image';
import Title from './Title';

const Grid = ({itemsToDisplay}) => {

    return(


        <div className={"grid-container"}>
            {
                itemsToDisplay.map(item=>{  

                    return <div className="grid-item">
                                <Image alt={item.name} classN={"grid-ingr-img"} src={`${process.env.REACT_APP_BASE_INGREDIENT_IMAGE_BASE_URL}${item.image}`}/>
                                <Title classN={"grid-small-title"} titleName={`${item.name}`}/>
                                <Title classN={"grid-small-amount"} titleName={`${item.amount} ${item.unit}`}/>
                            </div>
                })
            }
        </div>
    )
}

export default Grid;



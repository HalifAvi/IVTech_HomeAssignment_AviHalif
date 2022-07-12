import '../BasicElementStyle/CandleGraph.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";



const CandleGraph = ({dataToDisplay}) => {

    const data = [
        {
          name: "IRON",
          Recommended : dataToDisplay.isExistData ? dataToDisplay.recommendedConsumptionIron : 0,
          Actual: dataToDisplay.currDisplayedIron
        },
        {
          name: "PROTEIN",
          Recommended : dataToDisplay.isExistData ? dataToDisplay.recommendedConsumptionProtein : 0, 
          Actual: dataToDisplay.currDisplayedProtein
        },
        {
          name: "VITAMIN C",
          Recommended:  dataToDisplay.isExistData ? dataToDisplay.recommendedConsumptionVitaminC : 0, 
          Actual: dataToDisplay.currDisplayedVitaminC
        }
      ];

    return(

        <div className={"graph-section"}>
            <BarChart
                width={500}
                height={400}
                data={data}
                margin={{

                    top: 30,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{stroke: "white"}} letterSpacing={"1px"}/>
                    <YAxis tick={{stroke: "white"}} unit= '[g]'/>
                    <Tooltip wrapperStyle={{ width: 300, fontFamily: 'var(--clr-thin-font)', fontSize: "20px" }}/>
                    <Bar dataKey="Recommended" fill="var(--clr-yellow)" />
                    <Bar dataKey="Actual" fill="var(--clr-turquoise)" />
            </BarChart>
        </div>

    )
}




export default CandleGraph;







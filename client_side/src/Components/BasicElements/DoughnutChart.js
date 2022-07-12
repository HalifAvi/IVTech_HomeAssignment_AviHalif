import {Grid} from "@material-ui/core";
import Chart from "react-apexcharts";
import { connect } from "react-redux";


const DoughnutChart = ({       
    
    unitProtein,
    unitIron, 
    unitVitaminC,
    proteinCurrRecpie,
    ironCurrRecpie,
    vitaminCCurrRecpie

}) => {

    let num1 = convertToGramUnit(proteinCurrRecpie, unitProtein);
    let num2 = convertToGramUnit(ironCurrRecpie, unitIron);
    let num3 = convertToGramUnit(vitaminCCurrRecpie, unitVitaminC);

    
    const options = {

        series: [

            num1,
            num2,
            num3        
        ],
        labels: ["PROTEIN [g]", "IRON [g]", "VITAMIN C [g]"],
        colors: ["VAR(--clr-black)", "VAR(--clr-yellow)", "VAR(--clr-turquoise)"],
        plotOptions: {

            pie: {

                expandOnClick: false,
                donut: {
                    size: "55px",

                labels: {

                        show: true
                    }
                }
            }
        }
    };



    const series = [

        num1,
        num2,
        num3 
    ]

    return(

        <div className={"doughnutChart-container"}>
            <Grid
                xs={12}
                style={{height: `${window.innerHeight}`, marginTop: "50px", fontFamily: "var(--clr-thin-font)", backgroundColor: "white"}}
            >

            <Grid xs={12} item>
                <Grid xs={2} item></Grid>
                <Grid xs={8} item>
                    <Chart
                        options={options}
                        series={series}
                        type="donut"
                        width="150%"
                        height={300}
                    />
                </Grid>
                <Grid xs={2} item></Grid>
            </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {

        unitProtein: state.recipesReducer.unitProtein,
        unitIron: state.recipesReducer.unitIron, 
        unitVitaminC: state.recipesReducer.unitVitaminC,
        proteinCurrRecpie: state.recipesReducer.proteinCurrRecpie,
        ironCurrRecpie: state.recipesReducer.ironCurrRecpie,
        vitaminCCurrRecpie: state.recipesReducer.vitaminCCurrRecpie
    }
}

export default connect(mapStateToProps)(DoughnutChart);


const convertToGramUnit = (amount, unit) => {

    let amountToRet = Number(amount);

    if(unit == "µg") {

        amountToRet = amountToRet/1000000;

    } else if(unit == "mg") {

        amountToRet = amountToRet/1000;
    } 

    return amountToRet;
}
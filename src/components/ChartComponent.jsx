import * as React from "react";
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartTitle, ChartLegend } from "@progress/kendo-react-charts";
import { valentis, mcdonalds }from './mockedData/RestChartItems'

const categories = [2002, 2003, 2004];


const pieData = [{
    name: "Monday",
    share: 0.24
}, {
    name: "Tuesday",
    share: 0.26,
    explode: true
}, {
    name: "Wednesday",
    share: 0.1
}, {
    name: "Thursday",
    share: 0.4
}, {
    name: "Friday",
    share: 0.4
}, {
    name: "Saturday",
    share: 0.4
}, {
    name: "Sunday",
    share: 0.4
}];

const ChartContainer = (props) => {
    const series = (props.user.userName === "valenpizza") ? valentis.series : mcdonalds.series;
    const areaData = (props.user.userName === "valenpizza") ? valentis.areaData : mcdonalds.areaData;
    console.log(series)
    return <React.Fragment>
        <div className="row mb-3">
            <div className="col-6">
                <div className="k-card">
                    <Chart style={{
                        height: 350
                    }}>
                        <ChartTitle text="Best Sellers"/>
                        <ChartLegend position="top" orientation="horizontal"/>
                        <ChartCategoryAxis>
                            <ChartCategoryAxisItem categories={categories} startAngle={45}/>
                        </ChartCategoryAxis>
                        <ChartSeries>
                            {series.map((item, idx) => <ChartSeriesItem key={idx} type="column" tooltip={{
                                visible: true
                            }} data={item.data} name={item.name}/>)}
                        </ChartSeries>
                    </Chart>
                </div>
            </div>

        </div>
        <div className="row">
            <div className="col-6">
                <div className="k-card">
                    <Chart style={{
                        height: 350
                    }}>
                        <ChartTitle text="Community Rating"/>
                        <ChartLegend position="top" orientation="horizontal"/>
                        <ChartCategoryAxis>
                            <ChartCategoryAxisItem categories={categories} startAngle={45}/>
                        </ChartCategoryAxis>
                        <ChartSeries>
                            {areaData.map((item, idx) => <ChartSeriesItem key={idx} type="area" tooltip={{
                                visible: true
                            }} data={item.data} name={item.name}/>)}
                        </ChartSeries>
                    </Chart>
                </div>
            </div>
            <div className="col-6">
                <div className="k-card">
                    <Chart style={{
                        height: 350
                    }}>
                        <ChartTitle text="Reservations Rate"/>
                        <ChartLegend position="top" orientation="horizontal"/>
                        <ChartSeries>
                            <ChartSeriesItem type="pie" overlay={{
                                gradient: "sharpBevel"
                            }} tooltip={{
                                visible: true
                            }} data={pieData} categoryField="name" field="share"/>
                        </ChartSeries>
                    </Chart>
                </div>
            </div>
        </div>
    </React.Fragment>
};

export default ChartContainer;
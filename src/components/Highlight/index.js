import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import HighlightCard from "./HighlightCard";

export default function Highlight({report}) {
    const data = report && report.length ? report[report.length -2] : []

    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            title: 'Số ca tử vong',
            count: data.Deaths,
            type: 'death'
        },
    ]

    return(
        <Grid container spacing={3}>
            {
                summary.map((item) => (
                    <Grid item sm={4} xs={12}>
                        <HighlightCard title={item.title} count = {item.count} type= {item.type}/>
                    </Grid>
                ))
            }
        </Grid>
    )
}
/*app.component.ts*/
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { ActivatedRoute } from '@angular/router';
import { TechnologyReport } from 'src/models/technologyreport.model';
import { DataPoint } from './DataPoint';
//var CanvasJS = require('./canvasjs.min');

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.css']
})

export class BarComponent implements OnInit {
    chart: any;

    technologyReport: TechnologyReport;

    knowledgeDataPoints: DataPoint[] = [];
    comprehensionDataPoints: DataPoint[] = [];
    applicationDataPoints: DataPoint[] = [];
    analysisDataPoints: DataPoint[] = [];
    synthesisDataPoints: DataPoint[] = [];
    evaluationDataPoints: DataPoint[] = [];

    colors: string[] = ["#EC407A", "#AB47BC", "#9575CD", "#29B6F6", "#66BB6A", "#26A69A"]

    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.technologyReport = JSON.parse(params["techReport"]);
            // COMMENT THIS BEFORE DEPLOYING
            //***************************************************************************
            // this.technologyReport.conceptReports.forEach((c, i) => {
            //     c.knowledgeIntensity = i + 1;
            //     c.comprehensionIntensity = i + 1;
            //     c.applicationIntensity = i + 1;
            //     c.analysisIntensity = i + 1;
            //     c.synthesisIntensity = i + 1;
            //     c.evaluationIntensity = i + 1;
            // })
            //*****************************************************************************
            // TILL HERE!!!!
            this.generateDataPoints();
        });
    }

    ngOnInit() {
        this.chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title: {
                text: "Bloom Taxonomy Intensity in " + this.technologyReport.technologyName,
                fontFamily: 'Product Sans',
                margin: 15
            },
            axisY: {
                title: "Bloom Intensity",
                maximum: 30,
            },
            legend: {
                cursor: "pointer",
                itemclick: this.toggleDataSeries
            },
            toolTip: {
                shared: true,
                content: this.toolTipFormatter
            },
            data: [{
                type: "stackedColumn",
                showInLegend: true,
                name: "Knowledge",
                color: this.colors[0],
                dataPoints: this.knowledgeDataPoints
            },
            {
                type: "stackedColumn",
                showInLegend: true,
                name: "Comprehension",
                color: this.colors[1],
                dataPoints: this.comprehensionDataPoints
            },
            {
                type: "stackedColumn",
                showInLegend: true,
                name: "Application",
                color: this.colors[2],
                dataPoints: this.applicationDataPoints
            }, {
                type: "stackedColumn",
                showInLegend: true,
                name: "Analysis",
                color: this.colors[3],
                dataPoints: this.analysisDataPoints
            }, {
                type: "stackedColumn",
                showInLegend: true,
                name: "Synthesis",
                color: this.colors[4],
                dataPoints: this.synthesisDataPoints
            }, {
                type: "stackedColumn",
                showInLegend: true,
                name: "Evaluation",
                color: this.colors[5],
                dataPoints: this.evaluationDataPoints
            },]
        });
        this.chart.render();
    }
    toolTipFormatter(e) {
        var str = "";
        var total = 0;
        var str3;
        var str2;
        for (var i = 0; i < e.entries.length; i++) {
            var str1 = "<span style= \"color:" + e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>" + e.entries[i].dataPoint.y + "</strong> <br/>";
            total = e.entries[i].dataPoint.y + total;
            str = str.concat(str1);
        }
        str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
        str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
        return (str2.concat(str)).concat(str3);
    }

    toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        this.chart.render();
    }

    generateDataPoints() {
        this.technologyReport.conceptReports.forEach((conceptReport) => {
            this.knowledgeDataPoints.push({ y: conceptReport.knowledgeIntensity, label: conceptReport.conceptName })
            this.comprehensionDataPoints.push({ y: conceptReport.comprehensionIntensity, label: conceptReport.conceptName })
            this.applicationDataPoints.push({ y: conceptReport.applicationIntensity, label: conceptReport.conceptName })
            this.analysisDataPoints.push({ y: conceptReport.analysisIntensity, label: conceptReport.conceptName })
            this.synthesisDataPoints.push({ y: conceptReport.synthesisIntensity, label: conceptReport.conceptName })
            this.evaluationDataPoints.push({ y: conceptReport.evaluationIntensity, label: conceptReport.conceptName })
        });
    }
}
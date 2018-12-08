import { Component, OnInit, Input } from '@angular/core';
import { TechnologyReport } from 'src/models/technologyreport.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-report-tech-card',
  templateUrl: './report-tech-card.component.html',
  styleUrls: ['./report-tech-card.component.css']
})
export class ReportTechCardComponent implements OnInit {
  @Input() techReport: TechnologyReport;
  
  constructor(private router: Router) { }

  ngOnInit() {

  }

  viewReportCard() {
    let reportExtra: NavigationExtras = {
      queryParams: {
        "techReport": JSON.stringify(this.techReport)
      }
    };
    this.router.navigate([`/reportcard/${this.techReport.technologyName}`], reportExtra);
  }

  viewPastQuizResults() {
    this.router.navigate([`/quizresults/${this.techReport.technologyName}`]);
  }

}

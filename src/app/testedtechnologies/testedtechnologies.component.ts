import { Component, OnInit } from '@angular/core';
import { UserReport } from 'src/models/userreport.model';
import { CommunicatorService } from '../services/communicator.service';

@Component({
  selector: 'app-testedtechnologies',
  templateUrl: './testedtechnologies.component.html',
  styleUrls: ['./testedtechnologies.component.css']
})
export class TestedtechnologiesComponent implements OnInit {

  userReport: UserReport;
  gotReport = false;

  constructor(private com: CommunicatorService) {
    com.getUserReport().subscribe((report: UserReport) => {
      console.log(report);
      this.userReport = report;
      this.gotReport = true;
      // if (this.userReport.technologyReport != null) {
      // }
    });
  }

  ngOnInit() {

  }

}

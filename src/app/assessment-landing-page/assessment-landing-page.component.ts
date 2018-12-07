import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Router } from '@angular/router'
import { Technology } from '../technology.model';
import { Concept } from '../resourceform/resourceform.component';

@Component({
  selector: 'app-assessment-landing-page',
  templateUrl: './assessment-landing-page.component.html',
  styleUrls: ['./assessment-landing-page.component.css']
})
export class AssessmentLandingPageComponent implements OnInit {


  // domains: any[] = [
  //   { name: "Java" },
  //   { name: "C#" },
  // ];
  domains: any[];
  selectedDomain: any;
  concepts: any[];

  constructor(private testService: TestService, private router: Router) {
    this.concepts = [];
  }

  ngOnInit() {
    this.getDomains();
  }

  getDomains() {
    this.testService.getTechnologies().subscribe(
      (d: any) => {
        console.log(d);
        this.domains = d;
      }
    )
  }
  
  getConcepts() {
    console.log(this.selectedDomain);
    this.concepts = [];
    const domainConcepts = this.selectedDomain.concepts.map(concept => ({ ...concept, toggled: false }));
    this.concepts.push(...domainConcepts);
  }

  onConceptSelected(concept) {
    concept.toggled = !concept.toggled;
  }

  beginAssessment() {
    console.log(this.selectedDomain);
    const selectedConcepts = this.concepts.filter(concept => concept.toggled).map(c => c.name);
    this.router.navigate([`/test/${this.selectedDomain.name}`, { concepts: selectedConcepts }])
  }

}
import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-assessment-landing-page',
  templateUrl: './assessment-landing-page.component.html',
  styleUrls: ['./assessment-landing-page.component.css']
})
export class AssessmentLandingPageComponent implements OnInit {


  domains: any[] = [
    { name: "Java" },
    { name: "C#" },
  ];
  selectedDomain: any;
  concepts: any[];

  constructor(private testService: TestService, private router: Router) {
    this.concepts = [];
  }

  ngOnInit() {
  }

  getConcepts(selectedDomain) {
    this.testService.getConcepts(selectedDomain.value).subscribe(
      (domain:any) => {
      console.log(domain);
      const domainConcepts = domain[0].concepts.map(concept => ({...concept, toggled: false }))
      this.concepts.push(...domainConcepts);
    },
    (err) => {
      this.concepts.push({ name: 'TestConcept', toggled: false }, { name: 'TestConcept1', toggled: false });
    }
  );
  }

  onConceptSelected(concept) {
    concept.toggled = !concept.toggled;
  }

  beginAssessment() {
    console.log(this.selectedDomain);
    const selectedConcepts = this.concepts.filter(concept => concept.toggled).map(c => c.name);
    this.router.navigate([`/test/${this.selectedDomain}`, { concepts: selectedConcepts }])
  }

}

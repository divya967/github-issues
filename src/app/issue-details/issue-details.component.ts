import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  issueDetails: any;
  @Input() id!:number;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getIssueDetails(this.id).subscribe(res => {
      this.issueDetails = res;
    });
  }

}

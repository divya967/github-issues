import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  repositoryDetails: any;
  pageCount: number = 10;
  currentPage: number = 1;
  listOfOpenIssues: Array<any> = [];
  searchedText: any = '';
  navigatedId!:number;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getRepositoryData().subscribe((res: any) => {
      this.repositoryDetails = res;
    }, error => {
      console.log('No Data Found');
    });
    this.getRecords();
  }

  getRecords() {
    this.dataService.getRecordsPerPage(this.pageCount, this.currentPage, this.searchedText).subscribe(res => {
      if(res && res.items.length) {
        this.listOfOpenIssues = res.items;
      } else {
        this.listOfOpenIssues = [];
      }
    })
  }

  navigateToDetails(issue:any) {
    this.navigatedId = issue.number;
  }

  onTableDataChange(event: number) {
    this.currentPage = event;
    this.getRecords();
  }

  searchResult() {
    this.getRecords();
  }
}

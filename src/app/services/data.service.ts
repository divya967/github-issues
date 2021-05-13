import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getRepositoryData(): Observable<any> {
    return this.http.get('https://api.github.com/repos/angular/angular');
  }

  getRecordsPerPage(perPage: number, pageNumber: number, searchedText?: any): Observable<any> {
    return this.http.get('https://api.github.com/search/issues?q=repo:angular/angular/node+type:issue+state:open+'+searchedText+'&per_page='+perPage+'&page='+pageNumber);
  }

  getIssueDetails(id: number): Observable<any> {
    return this.http.get('https://api.github.com/repos/angular/angular/issues/'+id);
  }

}

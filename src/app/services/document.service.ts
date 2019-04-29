import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Document } from '../models/document';
import { DOCUMENTS } from '../mock-docs';
import { CriteriaList } from '../models/criteriaList';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SearchCriteria } from '../models/search-criteria';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params: new HttpParams().append('containerId', 'AccountOpeningForm_1.0.0')
};

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private citidocUrl = 'http://localhost:9090/citidoc';  // URL to web api

  getDocuments(payload: any): Observable <CriteriaList[]> {
    const simulationUrl = `${this.citidocUrl}/simulation`;
    debugger;
    return this.http.post(simulationUrl, payload, httpOptions).pipe(
      tap((criteriaListResult: CriteriaList[]) => this.log(`result:${criteriaListResult}`)),
      catchError(this.handleError<CriteriaList[]>('getDocuments'))
    );


    // return DOCUMENTS;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`DocumentService: ${message}`);
  }

  constructor(
    private http: HttpClient) { }

}

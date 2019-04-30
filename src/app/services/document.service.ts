import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Document } from '../models/document';
import { DOCUMENTS } from '../mock-docs';
import { CriteriaList } from '../models/criteriaList';
import { Observable, of } from 'rxjs';
import * as Rx from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SearchCriteria } from '../models/search-criteria';
import { PamResponse } from '../models/pam-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  params: new HttpParams().append('containerId', 'AccountOpeningForm_1.0.0')
};

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private citidocUrl = 'http://localhost:9090/citidoc';  // URL to web api

  /**
   * calls the PAM /simulation endpoint with the criteriaList payload that it expects (see swagger docs)
   *  returns a pam response object that is transformed into Document objects in the component
   * @param criteria 
   */
  getDocuments(criteria: CriteriaList): Observable <PamResponse> {
    const simulationUrl = `${this.citidocUrl}/simulation`;
    return this.http.post(simulationUrl, criteria, httpOptions).pipe(
      tap((pamResponse: PamResponse ) => 
      this.log(`result:${pamResponse}`)
      ),
      catchError(this.handleError<PamResponse>('getDocuments'))
    );
  }

  /**
   * 
   * @param operation Handle errors
   * @param result 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /**
   * 
   * @param message basic log 
   */
  private log(message: string) {
    console.log(`DocumentService: ${message}`);
  }

  constructor(
    private http: HttpClient) { }

}

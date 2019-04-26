import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Document } from '../models/document';
import { DOCUMENTS } from '../mock-docs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private URL = 'http://localhost:9090/citidoc/simulation';  // URL to web api

  getDocuments(): Document[] {
    return DOCUMENTS;
  }
  constructor(
    private http: HttpClient) { }

}

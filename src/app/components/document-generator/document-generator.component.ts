import { Component, OnInit, Input } from '@angular/core';
import { SearchCriteria } from '../../models//search-criteria';
import { CriteriaList } from '../../models/criteriaList';
import { Document } from '../../models/document';
import { Observable } from "rxjs";

@Component({
  selector: 'app-document-generator',
  templateUrl: './document-generator.component.html',
  styleUrls: ['./document-generator.component.css']
})
export class DocumentGeneratorComponent implements OnInit {
  showDocuments: boolean;
  documents: Document[] = [];

  constructor() { }

  updateDocuments(documents: Document[]) {
    this.documents = documents;
  }
  ngOnInit() {
    this.showDocuments = false;
  }
}

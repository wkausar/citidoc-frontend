import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../models/document';
@Component({
  selector: 'app-document-generator',
  templateUrl: './document-generator.component.html',
  styleUrls: ['./document-generator.component.css']
})
export class DocumentGeneratorComponent implements OnInit {
  showDocuments = false;
  documents: Document[] = [];

  constructor() { }

  updateDocuments(documents: Document[]) {
    if (documents.length > 0) {
      this.showDocuments = true;
    } else {
      this.showDocuments = false;
    }
    this.documents = documents;
  }

  clear(showDocuments: boolean) {
    debugger;
    this.showDocuments = showDocuments;
  }

  ngOnInit() {
    debugger;
    this.showDocuments = false;
  }
}

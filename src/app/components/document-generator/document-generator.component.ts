import { Component, OnInit } from '@angular/core';
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
/**
 * Updates the documents array based on the event emmited from doc-search component that is passed up to this component
 * @param documents 
 */
  updateDocuments(documents: Document[]) {
    if (documents.length > 0) {
      this.showDocuments = true;
    } else {
      this.showDocuments = false;
    }
    this.documents = documents;
  }

  /**
   * hides the doc list component when clear is pressed
   * @param showDocuments 
   */
  clear(showDocuments: boolean) {
    this.showDocuments = showDocuments;
  }

  ngOnInit() {
    this.showDocuments = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { Document } from '../../models/document';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[];

  constructor(private documentService: DocumentService) { }

  getDocuments(): void {
    this.documents = this.documentService.getDocuments();
  }

  ngOnInit() {
    this.getDocuments();
  }

}

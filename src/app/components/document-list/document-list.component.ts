import { Component, OnInit, Input } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { Document } from '../../models/document';
import { Observable } from "rxjs";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Input() documents: Observable<any[]>;
  constructor(private documentService: DocumentService) { }

  // getDocuments(): void {
  //   console.log( this.documents);
  // }

  ngOnInit() {
    // this.getDocuments();
  }

}

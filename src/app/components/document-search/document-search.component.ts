import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchCriteria } from '../../models//search-criteria';
import { DocumentGeneratorComponent } from '../document-generator/document-generator.component';
import { DocumentService } from '../../services/document.service';
import { DocumentListComponent } from '../document-list/document-list.component';
import { CriteriaList } from '../../models/criteriaList';
import { Document } from '../../models/document';
import { PamResponse } from 'src/app/models/pam-response';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-document-search',
  templateUrl: './document-search.component.html',
  styleUrls: ['./document-search.component.css']
})
export class DocumentSearchComponent implements OnInit {
  searchCriteria: SearchCriteria;
  criteriaArray: SearchCriteria[] = [];
  documents: Document[] = [];
  @Output() valueChange = new EventEmitter();

    constructor(private documentService: DocumentService) {
  }

  clear() {
    this.valueChange.emit(false);
    this.valueChange.emit(this.documents = []);
  }

  search(product: string, audience: string, region: string,
         subProduct: string, clientAction: string, country: string, channel: string, clientActionSubType: string, residency: string): void {
          const service = clientAction;
          const subService = clientActionSubType;
          const subChannel = channel;
          const entityTypes = '';
          const leDomicile = '';
          const documentName = '';
          const documentDesc = '';
          const documentCertification = '';
          const documentPolicy = '';
          const instructions = '';
          const documentTemplate = '';
          const documentGroup = '';
          this.valueChange.emit(this.documents = []);
          this.searchCriteria = { product, subProduct, service, subService, region,
        country, audience, subChannel, residency, entityTypes, leDomicile, documentName, documentDesc,
        documentCertification, documentPolicy, instructions, documentTemplate, documentGroup } as SearchCriteria;

          this.criteriaArray.push(this.searchCriteria);
          const criteriaList: CriteriaList = {
            criteriaList: this.criteriaArray
          };

          this.sendPamRequest(criteriaList);
    }

    private sendPamRequest(payload: CriteriaList): void {
        this.documentService.getDocuments(payload)
        .subscribe(pamResponse => {
          console.log('PAM RESPONSE: ', pamResponse.resultList.criteriaList);

          pamResponse.resultList.criteriaList.forEach( criteriaList => {
          const returnedDocument = { name: criteriaList.documentName, description: criteriaList.documentDesc,
            clientInstruction: criteriaList.instructions, policy: criteriaList.documentPolicy,
            certification: criteriaList.documentCertification, category: criteriaList.leDomicile, 
            template: criteriaList.documentTemplate
               } as Document;
          console.log(returnedDocument);
          this.documents.push(returnedDocument);
          this.valueChange.emit(this.documents);
          }
          );
        });
    }

  ngOnInit() {
  }

}

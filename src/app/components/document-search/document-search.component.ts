import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchCriteria } from '../../models//search-criteria';
import { DocumentService } from '../../services/document.service';
import { CriteriaList } from '../../models/criteriaList';
import { Document } from '../../models/document';

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

  /**
   * Takes the values from the form input and sends request to PAM /simulation endpoint and
   * then maps the data to the document format and updates the array of documents.
   * @param product
   * @param audience
   * @param region
   * @param subProduct
   * @param clientAction
   * @param country
   * @param channel
   * @param clientActionSubType
   * @param residency
   */
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
          this.criteriaArray = [];  // reset array
          this.criteriaArray.push(this.searchCriteria);
          const criteriaList: CriteriaList = {
            criteriaList: this.criteriaArray
          };

          this.sendPamRequest(criteriaList);
    }
    /**
     * Sends the payload to the service to make REST call, and then maps the response fields that are needed to the documents
     * @param payload
     */
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
          this.documents.push(returnedDocument);
          this.valueChange.emit(this.documents);
          }
          );
        });
    }

  ngOnInit() {
  }

}

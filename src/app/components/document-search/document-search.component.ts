import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '../../models//search-criteria';
import { DocumentGeneratorComponent } from '../document-generator/document-generator.component';
import { DocumentService } from '../../services/document.service';
import { DocumentListComponent } from '../document-list/document-list.component';
import { CriteriaList } from '../../models/criteriaList';

@Component({
  selector: 'app-document-search',
  templateUrl: './document-search.component.html',
  styleUrls: ['./document-search.component.css']
})
export class DocumentSearchComponent implements OnInit {
  searchCriteria: SearchCriteria;
  criteriaList: SearchCriteria[] = [];

  constructor(private documentService: DocumentService) {
  }

  search(product: string, audience: string, region: string,
         subProduct: string, clientAction: string, country: string, channel: string, clientActionSubType: string, residency: string): void {
          const service = clientAction;
          const subService = clientActionSubType;
          const subChannel = channel;
          const entityTypes = '';
          const leDomicile = '';
          const documentName= '';
          const documentDesc = '';
          const documentCertification = '';
          const documentPolicy= '';
          const instructions = '';
          const documentTemplate= '';
          const documentGroup = '';
          this.searchCriteria = { product, subProduct, service, subService, region,
        country, audience, subChannel, residency, entityTypes, leDomicile, documentName, documentDesc,
        documentCertification, documentPolicy, instructions, documentTemplate, documentGroup } as SearchCriteria;
          this.criteriaList.push(this.searchCriteria);
          const payload = {
            criteriaList: this.criteriaList
          };
          this.documentService.getDocuments(payload)
          .subscribe(documents => { console.log(documents);
          });
    }

  ngOnInit() {
  }

}

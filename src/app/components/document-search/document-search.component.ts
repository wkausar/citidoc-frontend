import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '../../models//search-criteria';
import { DocumentGeneratorComponent } from '../document-generator/document-generator.component';
@Component({
  selector: 'app-document-search',
  templateUrl: './document-search.component.html',
  styleUrls: ['./document-search.component.css']
})
export class DocumentSearchComponent implements OnInit {
  searchCriteria: SearchCriteria;
  documentGenerator: DocumentGeneratorComponent;

  constructor() { }

  search(product: string, audience: string, region: string,
         subProduct: string, clientAction: string, country: string, channel: string, clientActionSubType: string, residency: string): void {
     this.searchCriteria = { product, audience, region,
      subProduct, clientAction, country, channel, clientActionSubType, residency } as SearchCriteria;
    }

  ngOnInit() {
  }

}

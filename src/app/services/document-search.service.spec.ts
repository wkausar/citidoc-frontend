import { TestBed } from '@angular/core/testing';

import { DocumentSearchService } from './document-search.service';

describe('DocumentSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentSearchService = TestBed.get(DocumentSearchService);
    expect(service).toBeTruthy();
  });
});

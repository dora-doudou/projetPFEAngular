import { TestBed } from '@angular/core/testing';

import { NewsletterService } from './service/newsletter.service';

describe('NewsletterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsletterService = TestBed.get(NewsletterService);
    expect(service).toBeTruthy();
  });
});
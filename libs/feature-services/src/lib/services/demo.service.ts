import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  /**
   * Get a demo message
   */
  getDemoMessage(): string {
    return 'This is a demo message from the demo service in the feature-services library.';
  }
}

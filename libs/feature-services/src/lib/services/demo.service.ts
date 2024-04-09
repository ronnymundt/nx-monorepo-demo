import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  /**
   * Get a message text.
   */
  getMessage(): string {
    return 'This is a message from the demo service in the feature-services library.';
  }
}

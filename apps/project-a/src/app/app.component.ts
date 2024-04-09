import { Component } from '@angular/core';
import { HelloComponent } from '@nx-monorepo-demo/feature-components';
import { DemoService } from '@nx-monorepo-demo/feature-services';

@Component({
  standalone: true,
  imports: [HelloComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  demoMessage = `Hello from Project-A: ${this.demoService.getMessage()}`;

  constructor(
    private readonly demoService: DemoService
  ) { }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoService } from '@nx-monorepo-demo/feature-services';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  demoMessage = this.demoService.getDemoMessage();

  constructor(
    private readonly demoService: DemoService
  ) { }
}

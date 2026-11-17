import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rodape-site',
  standalone: true,
  templateUrl: './rodape-site.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RodapeSiteComponente {
  readonly currentYear = new Date().getFullYear();
}

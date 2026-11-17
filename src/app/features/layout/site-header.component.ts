import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { WhatsappIconComponent } from '../../shared/whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [WhatsappIconComponent],
  templateUrl: './site-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  constructor(private readonly whatsapp: WhatsappService) {}

  whatsappUrl(): string {
    return this.whatsapp.catalogUrl();
  }
}

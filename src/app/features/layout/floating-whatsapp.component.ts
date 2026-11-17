import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { WhatsappIconComponent } from '../../shared/whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-floating-whatsapp',
  standalone: true,
  imports: [WhatsappIconComponent],
  templateUrl: './floating-whatsapp.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingWhatsappComponent {
  constructor(private readonly whatsapp: WhatsappService) {}

  whatsappUrl(): string {
    return this.whatsapp.catalogUrl();
  }
}

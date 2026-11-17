import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { IconeWhatsAppComponente } from '../../shared/icone-whatsapp/icone-whatsapp.component';

@Component({
  selector: 'app-whatsapp-flutuante',
  standalone: true,
  imports: [IconeWhatsAppComponente],
  templateUrl: './whatsapp-flutuante.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappFlutuanteComponente {
  constructor(private readonly whatsapp: WhatsappService) {}

  whatsappUrl(): string {
    return this.whatsapp.catalogUrl();
  }
}

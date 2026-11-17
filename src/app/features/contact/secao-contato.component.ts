import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { IconeWhatsAppComponente } from '../../shared/icone-whatsapp/icone-whatsapp.component';

@Component({
  selector: 'app-secao-contato',
  standalone: true,
  imports: [IconeWhatsAppComponente],
  templateUrl: './secao-contato.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecaoContatoComponente {
  constructor(private readonly whatsapp: WhatsappService) {}

  whatsappUrl(): string {
    return this.whatsapp.catalogUrl();
  }
}

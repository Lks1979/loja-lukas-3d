import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { IconeWhatsAppComponente } from '../../shared/icone-whatsapp/icone-whatsapp.component';

@Component({
  selector: 'app-cabecalho-site',
  standalone: true,
  imports: [IconeWhatsAppComponente],
  templateUrl: './cabecalho-site.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CabecalhoSiteComponente {
  constructor(private readonly whatsapp: WhatsappService) {}

  whatsappUrl(): string {
    return this.whatsapp.catalogUrl();
  }
}

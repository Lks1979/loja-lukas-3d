import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { formatProductPrice, Product } from '../../core/models/product';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { IconeWhatsAppComponente } from '../../shared/icone-whatsapp/icone-whatsapp.component';

@Component({
  selector: 'app-modal-produto',
  standalone: true,
  imports: [IconeWhatsAppComponente],
  templateUrl: './modal-produto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalProdutoComponente {
  readonly product = input.required<Product>();
  readonly closed = output<void>();
  readonly price = computed(() => formatProductPrice(this.product()));
  readonly whatsappUrl = computed(() => this.whatsapp.catalogUrl(this.product()));

  constructor(private readonly whatsapp: WhatsappService) {}
}

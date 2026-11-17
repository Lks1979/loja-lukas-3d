import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { formatProductPrice, Product } from '../../core/models/product';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { IconeWhatsAppComponente } from '../../shared/icone-whatsapp/icone-whatsapp.component';

@Component({
  selector: 'app-cartao-produto',
  standalone: true,
  imports: [IconeWhatsAppComponente],
  templateUrl: './cartao-produto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartaoProdutoComponente {
  readonly product = input.required<Product>();
  readonly selected = output<Product>();
  readonly price = computed(() => formatProductPrice(this.product()));
  readonly whatsappUrl = computed(() => this.whatsapp.catalogUrl(this.product()));

  constructor(private readonly whatsapp: WhatsappService) {}
}

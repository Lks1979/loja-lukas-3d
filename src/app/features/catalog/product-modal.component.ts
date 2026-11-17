import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { formatProductPrice, Product } from '../../core/models/product';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { WhatsappIconComponent } from '../../shared/whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [WhatsappIconComponent],
  templateUrl: './product-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductModalComponent {
  readonly product = input.required<Product>();
  readonly closed = output<void>();
  readonly price = computed(() => formatProductPrice(this.product()));
  readonly whatsappUrl = computed(() => this.whatsapp.catalogUrl(this.product()));

  constructor(private readonly whatsapp: WhatsappService) {}
}

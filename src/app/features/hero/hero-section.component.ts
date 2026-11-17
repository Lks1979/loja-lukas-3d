import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { WhatsappIconComponent } from '../../shared/whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [WhatsappIconComponent],
  templateUrl: './hero-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  constructor(private readonly whatsapp: WhatsappService) {}

  whatsappUrl(): string {
    return this.whatsapp.catalogUrl();
  }
}

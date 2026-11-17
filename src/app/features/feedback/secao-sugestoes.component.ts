import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { IconeWhatsAppComponente } from '../../shared/icone-whatsapp/icone-whatsapp.component';

@Component({
  selector: 'app-secao-sugestoes',
  standalone: true,
  imports: [FormsModule, IconeWhatsAppComponente],
  templateUrl: './secao-sugestoes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecaoSugestoesComponente {
  readonly feedback = signal('');

  constructor(private readonly whatsapp: WhatsappService) {}

  sendFeedback(): void {
    const feedback = this.feedback().trim();
    if (!feedback) {
      return;
    }

    window.open(this.whatsapp.feedbackUrl(feedback), '_blank', 'noopener,noreferrer');
    this.feedback.set('');
  }
}

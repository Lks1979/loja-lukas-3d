import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WhatsappService } from '../../core/services/whatsapp.service';
import { WhatsappIconComponent } from '../../shared/whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [FormsModule, WhatsappIconComponent],
  templateUrl: './feedback-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackSectionComponent {
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

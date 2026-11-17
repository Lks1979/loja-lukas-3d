import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BenefitsSectionComponent } from '../../features/benefits/benefits-section.component';
import { ContactSectionComponent } from '../../features/contact/contact-section.component';
import { FeedbackSectionComponent } from '../../features/feedback/feedback-section.component';
import { HowItWorksComponent } from '../../features/how-it-works/how-it-works.component';
import { ProductCatalogComponent } from '../../features/catalog/product-catalog.component';
import { HeroSectionComponent } from '../../features/hero/hero-section.component';
import { FloatingWhatsappComponent } from '../../features/layout/floating-whatsapp.component';
import { SiteFooterComponent } from '../../features/layout/site-footer.component';
import { SiteHeaderComponent } from '../../features/layout/site-header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BenefitsSectionComponent,
    ContactSectionComponent,
    FeedbackSectionComponent,
    FloatingWhatsappComponent,
    HeroSectionComponent,
    HowItWorksComponent,
    ProductCatalogComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}

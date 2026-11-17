import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private readonly phoneNumber = '5511965781078';

  catalogUrl(product?: Product): string {
    const message = product
      ? `Olá! Tenho interesse no produto "${product.name}" do catálogo Lukas 3D e gostaria de fazer uma encomenda.\nFoto do produto: ${typeof document === 'undefined' ? product.image : new URL(product.image, document.baseURI).href}`
      : 'Olá! Vi o catálogo Lukas 3D e gostaria de fazer uma encomenda.';

    return this.createUrl(message);
  }

  feedbackUrl(feedback: string): string {
    return this.createUrl(`Olá! Quero enviar uma crítica ou sugestão para a Lukas 3D:\n\n${feedback}`);
  }

  private createUrl(message: string): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
  }
}

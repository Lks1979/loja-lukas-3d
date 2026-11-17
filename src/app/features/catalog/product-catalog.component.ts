import { ChangeDetectionStrategy, Component, HostListener, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, PRODUCTS } from '../../core/models/product';
import { ProductCardComponent } from './product-card.component';
import { ProductModalComponent } from './product-modal.component';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [FormsModule, ProductCardComponent, ProductModalComponent],
  templateUrl: './product-catalog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogComponent {
  readonly categories = ['Todos', 'Natal', 'Religiosos', 'Personagens', 'Acessórios', 'Decoração'];
  readonly search = signal('');
  readonly selectedCategory = signal('Todos');
  readonly selectedProduct = signal<Product | null>(null);
  readonly products = PRODUCTS;

  readonly filteredProducts = computed(() => {
    const category = this.selectedCategory();
    const query = this.search().trim().toLocaleLowerCase('pt-BR');

    return this.products.filter((product) => {
      const matchesCategory = category === 'Todos' || product.category === category;
      const matchesSearch = `${product.name} ${product.description}`
        .toLocaleLowerCase('pt-BR')
        .includes(query);

      return matchesCategory && matchesSearch;
    });
  });

  openProduct(product: Product): void {
    this.selectedProduct.set(product);
    document.body.style.overflow = 'hidden';
  }

  closeProduct(): void {
    this.selectedProduct.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    if (this.selectedProduct()) {
      this.closeProduct();
    }
  }
}

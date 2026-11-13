import { ChangeDetectionStrategy, Component, HostListener, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  price: number | null;
  featured?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly phoneNumber = '5511965781078';
  readonly currentYear = new Date().getFullYear();
  readonly categories = ['Todos', 'Natal', 'Religiosos', 'Personagens', 'Acessórios', 'Decoração'];
  readonly search = signal('');
  readonly selectedCategory = signal('Todos');
  readonly selectedProduct = signal<Product | null>(null);

  readonly products: Product[] = [
    {
      id: 1,
      name: 'Presépio na árvore com vela LED',
      category: 'Natal',
      description: 'Cena natalina em árvore decorativa, acompanhada de espaço para vela LED.',
      image: 'produtos/produto-01.webp',
      price: 40.00,
      featured: true,
    },
    {
      id: 2,
      name: 'Presépio com vela LED',
      category: 'Natal',
      description: 'Conjunto decorativo de presépio com base e vela LED.',
      image: 'produtos/produto-02.webp',
      price: 30.00,
    },
    {
      id: 3,
      name: 'Sagrada Família com luminária espiral',
      category: 'Religiosos',
      description: 'Composição decorativa com Sagrada Família e luminária em espiral.',
      image: 'produtos/produto-03.webp',
      price: 35,
      featured: true,
    },
    {
      id: 4,
      name: 'Presépio com árvore de Natal',
      category: 'Natal',
      description: 'Presépio, árvore verde e vela LED sobre base vermelha.',
      image: 'produtos/produto-04.webp',
      price: 40.00,
      featured: true,
    },
    {
      id: 5,
      name: 'Mini presépio com vela LED',
      category: 'Natal',
      description: 'Presépio compacto com vela LED e base vermelha.',
      image: 'produtos/produto-05.webp',
      price: 30.00,
    },
    {
      id: 6,
      name: 'Personagem verde decorativo',
      category: 'Personagens',
      description: 'Figura decorativa verde com braços cruzados.',
      image: 'produtos/produto-06.webp',
      price: 25.00,
    },
    {
      id: 7,
      name: 'Anjo Gabriel com vela LED',
      category: 'Religiosos',
      description: 'Estátua de anjo sobre base decorativa com vela LED.',
      image: 'produtos/produto-07.webp',
      price: 45.00,
      featured: true,
    },
    {
      id: 8,
      name: 'Altar Azul de São Francisco',
      category: 'Religiosos',
      description: 'Imagem de São Francisco de Assis com animais e vela LED em bandeja azul.',
      image: 'produtos/Altar Azul de São Francisco.png',
      price: 30.00,
    },
    {
      id: 9,
      name: 'Devocional São Bento com Vela LED',
      category: 'Religiosos',
      description: 'Imagem de São Bento com vela LED em bandeja decorativa com oração.',
      image: 'produtos/Devocional São Bento com Vela LED.png',
      price: 30.00,
    },
    {
      id: 10,
      name: 'Nossa Senhora do Rosário na Bandeja Vermelha',
      category: 'Religiosos',
      description: 'Imagem de Nossa Senhora do Rosário com vela LED em bandeja vermelha.',
      image: 'produtos/Nossa Senhora do Rosário na Bandeja Vermelha.png',
      price: 30.00,
    },
    {
      id: 11,
      name: 'Oratório Azul de São Bento',
      category: 'Religiosos',
      description: 'Oratório decorativo azul e branco com a medalha de São Bento.',
      image: 'produtos/Oratório Azul de São Bento.png',
      price: 35.00,
    },
     {
      id: 12,
      name: 'Porta-vela espiral com vela de led',
      category: 'Decoração',
      description: 'Porta-vela decorativo em espiral com vela de led.',
      image: 'produtos/Porta-vela espiral com vela de led.png',
      price: 15.00,
    },   
    {
      id: 13,
      name: 'Homem-Aranha',
      category: 'Personagens',
      description: 'Figura do Homem-Aranha impressa em 3D.',
      image: 'produtos/image_a6775e57.jpg',
      price: 50.00,
    },
    {
      id: 14,
      name: 'Batman',
      category: 'Personagens',
      description: 'Figura do Batman impressa em 3D.',
      image: 'produtos/image_f84aa4a6.jpg',
      price: 45.00,
    },
    {
      id: 15,
      name: 'Devocional com Medalha de São Bento',
      category: 'Religiosos',
      description: 'Bandeja decorativa com medalhão de São Bento e vela LED.',
      image: 'produtos/Bandeja Devocional com Medalhão e Vela.png',
      price: 35.00,
    },
    {
      id: 16,
      name: 'Chaveiro Anjo azul com argola dourada',
      category: 'Religiosos',
      description: 'Anjo decorativo azul com argola dourada para pendurar.',
      image: 'produtos/Anjo azul com argola dourada.png',
      price: 10.00,
    },
    {
      id: 17,
      name: 'Chaveiro Coração Vermelho 3D',
      category: 'Acessórios',
      description: 'Chaveiro em formato de coração vermelho impresso em 3D.',
      image: 'produtos/Chaveiro Coração Vermelho 3D.png',
      price: 10.00,
    },
    {
      id: 18,
      name: 'Chaveiro Cruz Branca com JESUS',
      category: 'Acessórios',
      description: 'Chaveiro de cruz branca com a inscrição JESUS.',
      image: 'produtos/Chaveiro Cruz Branca com JESUS.png',
      price: 10.00,
    },
    {
      id: 19,
      name: 'Chaveiro de Cruz “Foi por Você!”',
      category: 'Acessórios',
      description: 'Chaveiro de cruz com a mensagem “Foi por Você!”.',
      image: 'produtos/Chaveiros de Cruz “Foi por Você!”.png',
      price: 10.00,
    },
    {
      id: 20,
      name: 'Medalha de São Bento em Caixa de presente',
      category: 'Religiosos',
      description: 'Medalha de São Bento apresentada em uma caixa de madeira.',
      image: 'produtos/Medalha de São Bento em Caixa de Madeira.png',
      price: 20.00,
    },
   
  ];

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

  readonly featuredProducts = this.products.filter((product) => product.featured);

  productPrice(product: Product): string {
    return product.price === null
      ? 'Valor: R$ ______'
      : `Valor: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}`;
  }

  whatsappUrl(product?: Product): string {
    const message = product
      ? `Olá! Tenho interesse no produto "${product.name}" do catálogo Lukas 3D e gostaria de fazer uma encomenda.`
      : 'Olá! Vi o catálogo Lukas 3D e gostaria de fazer uma encomenda.';

    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
  }

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

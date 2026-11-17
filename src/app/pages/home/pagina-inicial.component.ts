import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SecaoBeneficiosComponente } from '../../features/benefits/secao-beneficios.component';
import { SecaoContatoComponente } from '../../features/contact/secao-contato.component';
import { SecaoSugestoesComponente } from '../../features/feedback/secao-sugestoes.component';
import { ComoFuncionaComponente } from '../../features/how-it-works/como-funciona.component';
import { CatalogoProdutosComponente } from '../../features/catalog/catalogo-produtos.component';
import { SecaoDestaqueComponente } from '../../features/hero/secao-destaque.component';
import { WhatsappFlutuanteComponente } from '../../features/layout/whatsapp-flutuante.component';
import { RodapeSiteComponente } from '../../features/layout/rodape-site.component';
import { CabecalhoSiteComponente } from '../../features/layout/cabecalho-site.component';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [
    SecaoBeneficiosComponente,
    SecaoContatoComponente,
    SecaoSugestoesComponente,
    WhatsappFlutuanteComponente,
    SecaoDestaqueComponente,
    ComoFuncionaComponente,
    CatalogoProdutosComponente,
    RodapeSiteComponente,
    CabecalhoSiteComponente,
  ],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaInicialComponente {}

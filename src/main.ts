import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AplicacaoComponente } from './app/aplicacao.component';
import { routes } from './app/app.routes';

bootstrapApplication(AplicacaoComponente, {
  providers: [provideRouter(routes)],
}).catch((error: unknown) => {
  console.error('Não foi possível iniciar a aplicação.', error);
});

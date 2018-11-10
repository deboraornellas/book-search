import { Routes, RouterModule } from '@angular/router';

import { BookSearchPageComponent } from './book-search-page/book-search-page.component';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';

const appRoutes: Routes = [
  { path: 'search', component: BookSearchPageComponent },
  { path: 'isbn/:bookISBN', component: BookDetailPageComponent},
  { path: '?search=', pathMatch: 'full', redirectTo: 'search' },
  { path: '', pathMatch: 'full', redirectTo: 'search' }
];

export const routing = RouterModule.forRoot(appRoutes);

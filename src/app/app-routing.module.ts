import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUnauthorizedComponent } from './components/app-unauthorized/app-unauthorized.component';

const routes: Routes = [
	{ path: "unauthorized", component: AppUnauthorizedComponent, title: 'Unauthorized'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

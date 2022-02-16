import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostContainerComponent } from './containers/new-post-container/new-post-container.component';

const routes: Routes = [
  {
    path: '',
    component: NewPostContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPostPageRoutingModule {}

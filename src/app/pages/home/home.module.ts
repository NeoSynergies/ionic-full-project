import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from 'src/app/common/components/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomeContainerComponent, FeedComponent, PostComponent]
})
export class HomePageModule {}

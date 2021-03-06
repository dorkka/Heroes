import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'heroes',
        component: HeroesComponent
      },
      { path: 'dashboard',
        component: DashboardComponent 
      },
      { path:'detail/:id',
        component: HeroDetailComponent
      },
      { path: "",
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ],
      //{ enableTracing: true}
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

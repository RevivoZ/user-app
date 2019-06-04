import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserPanelComponent } from './users-panel/user-panel.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// import { reducer } from './reducers/counter.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: UserPanelComponent },
  { path: 'users', component: UserPanelComponent },
  { path: 'user/:id', component: UserDetailsComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    UserDetailsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    FormsModule,
    BrowserModule,
    Ng2SmartTableModule,
    NgbModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

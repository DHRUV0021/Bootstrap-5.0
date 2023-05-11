import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path:'accordion',
    component:AccordionComponent
  },
  {
    path:'alert',
    component:AlertsComponent
  },
{
  path:'badge',
  component:BadgeComponent
},
{
  path:'Breadcrumb',
  component:BreadcrumbComponent
},
{
  path:'Buttons',
  component:ButtonsComponent
},

{
  path:'button-group',
  component:ButtonGroupComponent
},

{
  path:'Card',
  component:CardComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

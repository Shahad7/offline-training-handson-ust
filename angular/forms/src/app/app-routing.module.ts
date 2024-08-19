import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'fv',component:FormValidationComponent},
  {path:'rfv',component:ReactiveFormComponent},
  {path:'fb',component:FormbuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

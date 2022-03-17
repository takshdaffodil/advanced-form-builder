import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderModule } from './form-builder/form-builder.module';
import { FormCreatorComponent } from './form-builder/form-creator/form-creator.component';
import { ViewSavedFormsComponent } from './form-builder/view-saved-forms/view-saved-forms.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: FormCreatorComponent,
  },
  {
    path: 'admin/saved',
    component: ViewSavedFormsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormBuilderModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

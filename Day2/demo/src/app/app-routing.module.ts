import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirComponent } from './dir/dir.component';
import { PipeComponent } from './pipe/pipe.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChildComponent } from './inheritance/child/child.component';
import { MasterComponent } from './nested/master/master.component';
import { MainComponent } from './projection/main/main.component';
import { ParenthooksComponent } from './hooks/parenthooks/parenthooks.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';

const routes: Routes = [
  {path:'', component:DatabindingComponent},
  {path:'dir', component:DirComponent},
  {path:'pipe', component:PipeComponent},
  {path:'inheritance', component:ChildComponent},
  {path:'nested', component:MasterComponent},
  {path:'projection', component:MainComponent},
  {path:'hooks', component:ParenthooksComponent},
  {path:'form', component:TemplateformComponent},
  {path:'reactivefrom', component:ReactiveformComponent},
  {path:'notfound', component:NotfoundComponent},
  {path:'**', redirectTo:'notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

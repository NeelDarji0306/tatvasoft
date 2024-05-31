import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirComponent } from './dir/dir.component';
import { HighlightDirective } from './highlight.directive';
import { PipeComponent } from './pipe/pipe.component';
import { ReversePipe } from './reverse.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './shared/header.component';
import { ParentComponent } from './inheritance/parent/parent.component';
import { ChildComponent } from './inheritance/child/child.component';
import { MasterComponent } from './nested/master/master.component';
import { DetailsComponent } from './nested/details/details.component';
import { FormComponent } from './projection/form/form.component';
import { MainComponent } from './projection/main/main.component';
import { ParenthooksComponent } from './hooks/parenthooks/parenthooks.component';
import { ChildhooksComponent } from './hooks/childhooks/childhooks.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirComponent,
    HighlightDirective,
    PipeComponent,
    ReversePipe,
    NotfoundComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    MasterComponent,
    DetailsComponent,
    FormComponent,
    MainComponent,
    ParenthooksComponent,
    ChildhooksComponent,
    TemplateformComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { registerLocaleData } from '@angular/common'
import localeRu from '@angular/common/locales/ru'

import { AppComponent } from './app.component'
import { CardComponent } from './card/card.component'
import { FormComponent } from './form/form.component'
import { FormsModule } from '@angular/forms'

// registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

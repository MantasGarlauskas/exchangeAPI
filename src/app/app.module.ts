import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from "./app.component";
import {ExchangeComponent} from "./components/exchange/exchange.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ExchangeComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

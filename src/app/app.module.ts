import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[AppComponent,UserInputComponent,HeaderComponent,InvestmentResultsComponent],
    bootstrap:[AppComponent],
    imports:[FormsModule,BrowserModule],
})
export class AppModule{};
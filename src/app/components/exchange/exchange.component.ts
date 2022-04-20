import {Component, OnInit} from "@angular/core";
import {Currency} from "src/app/models/currency";
import {DataResponse} from "src/app/models/data";
import {ExhangeService} from "src/app/services/exhange.service";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.css"],
})
export class ExchangeComponent implements OnInit {
  public from: string = "";
  public to: string = "";
  public eur: DataResponse = {
    amount: 0,
    base: "",
    date: "",
    rates: {
      // USD: 12,
    },
  };
  public currencyName: Currency[] = [];

  constructor(private exhangeService: ExhangeService) {}

  ngOnInit(): void {
    this.loadExchange();
    this.exhangeService.loadCurrencies().subscribe(() => {
      this.currencyName = this.exhangeService.getCurrencyNames();
      console.log(this.currencyName);
    });
  }

  private loadExchange() {
    this.exhangeService
      .loadExchange(this.from, this.to)
      .subscribe((responsive) => {
        this.eur = responsive;
        console.log(this.eur);
      });
  }

  refreshRate() {
    this.loadExchange();
  }
}

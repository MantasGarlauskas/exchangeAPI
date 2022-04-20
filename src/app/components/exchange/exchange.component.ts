import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {DataResponse} from "src/app/models/data";
import {ExhangeService} from "src/app/services/exhange.service";

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html",
  styleUrls: ["./exchange.component.css"],
})
export class ExchangeComponent implements OnInit {
  public eur: DataResponse = {
    amount: 0,
    base: "EUR",
    date: "",
    rates: {
      USD: 12,
    },
  };

  public currencies: any = {};

  constructor(
    private http: HttpClient,
    private exhangeService: ExhangeService
  ) {}

  ngOnInit(): void {
    this.loadExchange();
    this.http.get("https://api.frankfurter.app/currencies").forEach((value) => {
      this.currencies = Object.keys(value);
    });
  }

  private loadExchange() {
    this.exhangeService.loadExchange().subscribe((responsive) => {
      this.eur = responsive;
    });
  }

  refreshRate() {
    this.loadExchange();
  }
}

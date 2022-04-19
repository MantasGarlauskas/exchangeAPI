import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {DataResponse} from "src/app/models/data";

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
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadExchange();
  }

  private loadExchange() {
    this.http
      .get<DataResponse>("https://api.frankfurter.app/latest?to=USD,EUR")
      .subscribe((responsive) => {
        this.eur = responsive;
      });
  }

  refreshRate() {
    this.loadExchange();
  }
}

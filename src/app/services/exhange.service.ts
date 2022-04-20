import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {tap} from "rxjs/operators";
import {Currency} from "../models/currency";
import {DataResponse} from "../models/data";

@Injectable({
  providedIn: "root",
})
export class ExhangeService {
  constructor(private http: HttpClient) {
    this.loadCurrencies();
  }

  public loadExchange(from: string, to: string) {
    return this.http.get<DataResponse>("https://api.frankfurter.app/latest", {
      params: {
        from: from,
        to: to,
      },
    });
  }
  private curriencies: Currency[] = [];

  public loadCurrencies() {
    return this.http
      .get<{[key: string]: string}>("https://api.frankfurter.app/currencies")
      .pipe(
        tap((response) => {
          this.curriencies = [];
          Object.entries(response).forEach(([key, value]) => {
            this.curriencies.push({
              code: key,
              name: value,
            });
          });
          // console.log(this.curriencies);
        })
      );
  }

  public getCurrencyNames() {
    return this.curriencies;
  }
}

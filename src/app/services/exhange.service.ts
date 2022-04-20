import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {DataResponse} from "../models/data";

@Injectable({
  providedIn: "root",
})
export class ExhangeService {
  constructor(private http: HttpClient) {}

  public loadExchange() {
    return this.http.get<DataResponse>(
      "https://api.frankfurter.app/latest?to=USD,EUR"
    );
  }
}

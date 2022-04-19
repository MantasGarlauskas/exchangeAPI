import {Rates} from "./rates";

export interface DataResponse {
  amount: number;
  base: String;
  date: String;
  rates: Rates;
}

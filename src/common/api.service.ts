import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export abstract class ApiService {
  protected debug: boolean = window.localStorage.getItem("debug") === "1";

  private readonly fileUrl: string = "/assets/json/";

  constructor(private http: Http) {
  }

  protected getDataFromFile<T>(fileName: string): Observable<T> {
    return this.http.get(this.fileUrl + fileName).map((res) => res.json() || {})
      .catch((e: any) => Observable.throw(e));
  }
}

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export abstract class ApiService {
  protected debug: boolean = window.localStorage.getItem("debug") === "1";

  private readonly fileUrl: string = "/assets/json/";

  constructor(private http: Http) {
  }

  protected getDataFromFile<T>(fileName: string): Observable<T> {
    return this.http.get(this.fileUrl + fileName)
      .map((response: Response) => response.json() || {})
      .catch((e: any) => Observable.throw(e));
  }
}

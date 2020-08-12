import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as AppUtils from './app.util';
import { Router, ActivatedRoute } from '@angular/router';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

constructor(
    private http: HttpClient,
    private router: Router,
) { }

allUser() {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.get(
      AppUtils.BASE_URL + AppUtils.USER_API,
      { headers }
  );
}

getByUserName(name) {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.get(
      AppUtils.BASE_URL + AppUtils.USER_API + `/${name}/repos`,
      { headers }
  );
}

searchByName(name) {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.get(
      AppUtils.BASE_URL + AppUtils. SEARCH_API + `?q=${name}`,
      { headers }
  );
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISignInMessage } from 'src/app/interfaces/object-from-api/sign-in-message';
import { IContactToApi } from 'src/app/interfaces/object-send-to-api/client';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/contact.php/";

  constructor(private httpClient : HttpClient) {}

  insertForm(contact: IContactToApi) : Observable<ISignInMessage>{
    const headers = {'content-type': 'application/json'}  
    const body = JSON.stringify(contact);

    return this.httpClient.post(this.urlBase, body, {'headers':headers, responseType: 'text'})
      .pipe(
        map((data) => {
          return JSON.parse(data);
        })
      )
  }

}

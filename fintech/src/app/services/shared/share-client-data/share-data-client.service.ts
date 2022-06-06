import { Injectable } from '@angular/core';
import { IClient } from 'src/app/interfaces/object-from-api/client';

@Injectable({
  providedIn: 'root'
})
export class ShareDataClientService {

  private client!: IClient;

  constructor() { }

  getclient() : IClient {
    return this.client;
  }

  setClient(client: IClient) : void {
    this.client = client;
  }

}

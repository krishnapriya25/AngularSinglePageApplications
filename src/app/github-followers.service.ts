import { DataService } from './services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor() { }
}

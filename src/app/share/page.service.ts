import { Injectable } from '@angular/core';
import { Mockfriend } from './mockfriend';
import { Friend } from '../components/friends/friends'

@Injectable({
  providedIn: 'root'
})
export class PageService {
  friends: Friend[] = [];
  constructor() {
    this.friends = Mockfriend.mfriends;
  }
  getfriend(): Friend[]{
    return this.friends;
  }
  addFriend(f:Friend): void{
    this.friends.push(f);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Friend } from 'src/app/components/friends/friends';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friend: Friend;
  friends: Array<Friend>=[];
  friendForm !: FormGroup;

  constructor(private fb: FormBuilder) {
    this.friend = new Friend( 'ahyoyo', 'ahyoyo@gmail.com', 20 );
  }

  ngOnInit(): void {
    this.friendForm = this.fb.group ({
      FriendName: [''],
      FriendEmail: [''],
      FriendAge: [''],
    })
  }
  changeDefaultName(str: string){
    this.friend.name = str;
  }
  onSubmit(f:FormGroup): void{
    this.friend.name=f.get('friendName')?.value;
    this.friend.name=f.get('friendEmail')?.value;
    this.friend.name=f.get('friendAge')?.value;
    /*Let form_record = new Friend(f.get('FriendName')?.value,
                                    f.get('FriendEmail')?.value,
                                    f.get('FriendAge')?.value),
    this.friends.push(form_record);
    */
  }

}

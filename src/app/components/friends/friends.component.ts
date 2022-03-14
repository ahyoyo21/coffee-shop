import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Friend } from 'src/app/components/friends/friends';
import { PageService } from 'src/app/share/page.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  //friend: Friend;
  friends !: Friend[];
  friendForm !: FormGroup;

  constructor(private fb: FormBuilder , private pageService:PageService) {
    //this.friend = new Friend( 'ahyoyo', 'ahyoyo@gmail.com', 20 );
  }

  ngOnInit(): void {
    this.friendForm = this.fb.group ({
      FriendName: [''],
      FriendEmail: [''],
      FriendAge: [''],
    })
    this.getFriendPage();
  }
  getFriendPage(){
    this.friends = this.pageService.getfriend();
  }
  //onSubmit(f:FormGroup): void{
  //  this.friend.name=f.get('friendName')?.value;
  //  this.friend.name=f.get('friendEmail')?.value;
  //  this.friend.name=f.get('friendAge')?.value;
    /*Let form_record = new Friend(f.get('FriendName')?.value,
                                    f.get('FriendEmail')?.value,
                                    f.get('FriendAge')?.value),
    this.friends.push(form_record);
    */
    onSubmit(f:FormGroup) :void{
      let form_record =new Friend(f.get('FriendName')?.value,
                                  f.get('FriendEmail')?.value,
                                  f.get('FriendAge')?.value);
      this.friends.push(form_record);
      this.pageService.addFriend(form_record);
    }

}

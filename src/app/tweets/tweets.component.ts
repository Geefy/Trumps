import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {



  twat: Tweet[];
  constructor(tService: TweetsService) {
       this.twat = tService.tweets;
       console.log(this.twat.length);
   }

  ngOnInit() {
  }

  containsWord(word: string, tweet: Tweet): boolean {
    if (tweet.text.includes(word)) {
      return true;
    }
    return false;
  }

  containsLikes(tweet: Tweet, likes: number): boolean {
    if (tweet.likes > likes) {
      return true;
    }
    return false;
  }
  containsMonth(tweet: Tweet, month: number): boolean {
    if (tweet.date.getMonth() == month) {
      return true;
    }
    return false;
  }

}

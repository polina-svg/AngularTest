import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-custom-avatar',
  templateUrl: './custom-avatar.component.html',
  styleUrls: ['./custom-avatar.component.scss'],
})
export class CustomAvatarComponent implements OnInit, DoCheck {
  @Output() recordAvatar = new EventEmitter;
  @Input()  userAvatar: any;
  public imgSrc: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
    if(!this.userAvatar) {
      this.imgSrc = '../../assets/default_img.png'
      return
    }
  }

  ngDoCheck(): void {
    this.imgSrc = this.userAvatar;
  }

  handleUpload(event: Event) {
    if(event){
      const file = (event?.target as any)?.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgSrc = reader.result as string;
        this.recordAvatar.emit(this.imgSrc)

      };
    }


  }

}

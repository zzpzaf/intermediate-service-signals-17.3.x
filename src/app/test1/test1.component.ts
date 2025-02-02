import { Component, ElementRef, ViewChild, effect } from '@angular/core';
import { IMsg, ShareDataService } from '../share-data.service';

@Component({
  selector: 'test1',
  standalone: true,
  imports: [],
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss'
})
export class Test1Component {

  @ViewChild('input') inputMessageText!: ElementRef;
  
  // private subscription!: Subscription ;
  public msgReceived: string = ''; 
  public msgSent : string = ''; 
  public compName = this.constructor.name.replace('_', '');
  public msg: IMsg = {sender: '', msg: ''};
  
  constructor(private sharedService: ShareDataService,) {

    effect(()=> {
      // this.msg = this.sharedService.getData();
      this.msg = this.sharedService.$Msg();
      console.log('>===>> Test1 - Messgae Changed/Received:', this.msg);
      if (this.msg.sender != this.compName) this.msgReceived = this.msgReceived + this.msg.msg + '<br>';
    });

  }

  onClick(msgToBeSent:string) {
    if (msgToBeSent === '') return;
    console.log( '>===>> ' + this.compName  + ' - '  + 'onClick - '+  'Sending msg to sharedService:' + ' - ' + msgToBeSent);
    this.sendMessgae(msgToBeSent);

  }

  onKeyEnter(event: any) {
    let msgTxt: string = event.target.value;
    if (event.key === 'Enter' && msgTxt != '') {
      console.log( '>===>> ' + this.compName  + ' - '  + 'onKeyEnter - '+  'Sending msg to sharedService:' + ' - ' + event.target.value);
      this.sendMessgae(msgTxt);
    }
  }

  sendMessgae(msgTxt:string) {
    // this.sharedService.setData({sender: this.compName, msg: msgTxt});
    this.sharedService.$Msg.set({sender: this.compName, msg: msgTxt});
    this.msgSent = this.msgSent +msgTxt + '<br>';
    this.inputMessageText.nativeElement.value = '';
  }

}


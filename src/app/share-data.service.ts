import { Injectable, signal } from '@angular/core';


export interface IMsg {
  sender: string;
  msg: string;
}



@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  public myMsg: IMsg = {sender: '', msg: ''};
  public $Msg = signal< IMsg>(this.myMsg); 


  // constructor() { 
  //   // this.messageSubject.next({sender: this.constructor.name, msg: 'This is the Initial Behavior Subject message.'});
  // }

  // public messageSubject = new BehaviorSubject<IMsg>({sender: this.constructor.name, msg: 'This is the Initial Behavior Subject message.'});

  // public setData(message: IMsg) {
  //   console.log( '>===>> ShareDataService - ' + 'setData - '+  'Setting message value in sharedService: ' + message.sender + ' - ' + message.msg ); 
  //   // this.messageSubject.next(message);

  //   //this.$Msg.update(() => message);
  //   this.$Msg.set(message);
  //  }

  // //  public getData(): Observable<IMsg> {
  // public getData(): IMsg{
  //   console.log( '>===>> ShareDataService - ' + 'getData - '+  'Getting message value from sharedService.');
  //   // return this.messageSubject.asObservable();
  //   return this.$Msg();
  // }

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
AllowNewServer=false;
serverCreationStatus ="No server was created!!"
serverName='testsever';
serverCreated=false;
  constructor() {
      setTimeout(()=>{
          this.AllowNewServer=true;
      } ,2000)

   }

  ngOnInit(): void {
  }
onCreateServer(){
  this.serverCreated=true;
  this.serverCreationStatus="Server was created";
}
onUpdateServerName(event:Event){  //Passing and Using Data With Event Binding
  this.serverName=(<HTMLInputElement>event.target).value;
}
}

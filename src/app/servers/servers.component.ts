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
  constructor() {
      setTimeout(()=>{
          this.AllowNewServer=true;
      } ,2000)

   }

  ngOnInit(): void {
  }
onCreateServer(){
  this.serverCreationStatus="Server was created";
}
onUpdateServerName(event:Event){
  this.serverName=(<HTMLInputElement>event.target).value;
}
}

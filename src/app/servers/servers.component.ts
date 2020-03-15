import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles :[`
        .WhiteFontColor {
          color:white;
        }
`]
})
export class ServersComponent implements OnInit {
AllowNewServer=false;
serverCreationStatus ="No server was created!!"
serverName='testsever';
serverCreated=false;
servers=['testserver','testserver2']; //to learn ngfor it is used
  constructor() {

    
      setTimeout(()=>{
          this.AllowNewServer=true;
      } ,2000)

   }

  ngOnInit(): void {
  }
onToggleValue=false;
logs=[];
  toggleDisplay(){
this.onToggleValue=!this.onToggleValue;
this.logs.push(this.logs.length+1);
  } 

  getColorAssignment(log :string){
      return log >='5'? 'blue' :'';
  }
onCreateServer(){
  this.serverCreated=true;
  this.servers.push(this.serverName); //to learn ngfor it is used
  this.serverCreationStatus="Server was created";
}
onUpdateServerName(event:Event){  //Passing and Using Data With Event Binding
  this.serverName=(<HTMLInputElement>event.target).value;
}
}

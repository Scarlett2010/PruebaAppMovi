import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  inputValue: string="";
  downloadFile(){
    const blob =new Blob([this.inputValue],{type:'text/plain'});
    const url= URL.createObjectURL(blob);
    const a= document.createElement('a');
    a.href = url;
    a.download = 'contenido.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
}
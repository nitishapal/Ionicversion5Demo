import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  loginForm: FormGroup;
  inputCall: boolean;
  constructor( private formBuilder: FormBuilder, public platform: Platform) {
    this.platform.ready().then(() => {

      const height = this.platform.height();

      const width = this.platform.width();

      document

        .getElementById('clipPath').setAttribute('transform', `scale(${width / (500 - 100)} ${height / (126.67 * 2.5)})`); // 500 126.67

    });

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onClickFuntion(event){
    this.inputCall = true;

  }
  test(event){
    this.inputCall = false;

  }

}

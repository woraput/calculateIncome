import { Component, ViewChildren } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JarPageComponent } from '../../components/jar-page/jar-page';
import { CloudSyncProvider } from '../../providers/cloud-sync/cloud-sync';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  fg: FormGroup;
  income: number;
  lastHistory: History;
  @ViewChildren(JarPageComponent) private jarPage: JarPageComponent[];

  constructor(public navCtrl: NavController, public fb: FormBuilder, public cloud: CloudSyncProvider) {
    this.fg = this.fb.group({
      'income': null,
      'jar1': fb.array([]),
      'jar2': fb.array([]),
      'jar3': fb.array([]),
      'jar4': fb.array([]),
      'jar5': fb.array([]),
      'jar6': fb.array([]),
    });
  }

  ionViewDidLoad() {
    this.cloud.GetHistory().subscribe(data => {
      if (data != null) {
        console.log(data);
      }
    });

    this.cloud.GetLastHistory().subscribe(data => {
      if (data != null) {
        console.log(data);
        this.lastHistory = data;
        this.fg.patchValue(data);
        console.log(this.fg);
      }
    });

  }


  calculateIncome() {
    this.income = this.fg.get('income').value;
    this.jarPage.forEach(it => it.income = this.income);
    this.jarPage.forEach(it => console.log(it.income));
    this.jarPage.forEach(it => it.calculateIncome());
  }

  AmountChanged(event: any) {
    let money = Number(event.value);
  }
}

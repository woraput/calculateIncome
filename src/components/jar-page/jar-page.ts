import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the JarPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jar-page',
  templateUrl: 'jar-page.html'
})
export class JarPageComponent {
  income: any;
  text: string;
  @Input() FormItem: FormGroup;
  @Input() title: string;
  @Input() by: number;
  @Input('image') image: string;
  @Input('iconImg') iconImg: string;

  constructor(private fb: FormBuilder) {
    console.log('Hello JarPageComponent Component');
    this.text = 'Hello World';
    this.FormItem = JarPageComponent.CreateFormGroup(this.fb);

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      'byPercent': null,
      'recieve:': null,
      'remaining': null
    });
  }

  amountChanged(event: any) {
    console.log(event);

    let money = Number(event.target.value);
    console.log(money);

    let amount = this.FormItem.get('byPercent').value - money;
    console.log(amount);

    this.FormItem.get('remaining').setValue(amount);
  }

  async calculateIncome() {
    await this.FormItem.get('byPercent').setValue(this.income * this.by / 100);
  }
}



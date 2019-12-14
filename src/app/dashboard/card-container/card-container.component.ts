import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Option {
  contentType: string;
  optionText: string;
}

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  questionForm: FormGroup;
  selectedOption: any;
  // numberInbox = ['1', '2', '3', '4', '5', '6', '7', '8'];
  options: Option[] = [];
  optionText: string;
  // questionObject: any;
  // stateValue: string;
  // onlineUrl: string;
  // localFile: string;
  // formOptions = [];
  // media: string;
  ngOnInit() {
    // throw new Error("Method not implemented.");
  }

  // @Output() action = new EventEmitter<any>();
  // @Output() emitSaveQuestion = new EventEmitter<any>();
  // @Output() emitUpdateQuestion = new EventEmitter<any>();
  // @Output() attachMedia = new EventEmitter<any>();
  // @Input()
  // set state(value) {
  //   this.stateValue = value;
  // }

  // get state() {
  //   return this.stateValue;
  // }

  // @Input()
  // set attachmedia(value) {
  //   this.questionForm.controls.questionText.setValue(value);
  // }

  // get attachmedia() {
  //   return this.questionForm.controls.questionText;
  // }


  // @Input()
  // set question(value: string) {
  //   console.log('*This is the question Input in webcomponet', value);
  //   this.questionObject = JSON.parse(value);
  //   this.questionForm.patchValue(this.questionObject);
  //   this.selectedOption = this.questionObject.answer;
  //   const options = this.questionForm.controls.options as FormArray;
  //   this.formOptions = this.questionObject.options;
  //   if (this.questionObject.options && this.formOptions.length !== 0) {
  //   this.formOptions.map(data => {
  //     options.push(this.formBuilder.group(data));
  //   });
  // }
  // }

  // get question(): string {
  //    return this.questionObject;
  // }

  set questionFormOptions(value) {
    this.questionForm.get('options').setValue(value);
  }
  get questionFormOptions(): FormArray {
    return this.questionForm.get('options') as FormArray;
  }

  constructor( private formBuilder: FormBuilder) {
    console.log('Question Authoring Constructure call');
    this.questionForm = this.formBuilder.group({
      answer: [''],
      options: this.formBuilder.array([]),
    });
    this.questionForm.reset();
    this.questionForm.valueChanges.subscribe(() => {
      console.log(this.questionForm.value);
      // this.action.emit(JSON.stringify(this.questionForm.value));
    });
    }

  addOptions() {
    const options = this.questionForm.controls.options as FormArray;
    const option: Option = {
      contentType: '',
      optionText: this.optionText,
    };
    options.push(this.formBuilder.group(option));
    this.optionText = '';
    console.log(option);
  }

  removeOption(option): void {
    const options = this.questionForm.get('options') as FormArray;
    const itemIndex = options.controls.findIndex(op => op.value.optionText === option.optionText.value);
    options.removeAt(itemIndex);
  }



}

import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IFormulaElement} from "./interfaces/formula-element";
import {fromEvent, Subscription} from "rxjs";
import {formulaElements} from "./data/formula-elements";

@Component({
  selector: 'app-formula-input',
  templateUrl: './formula-input.component.html',
  styleUrls: ['./formula-input.component.scss']
})
export class FormulaInputComponent implements AfterViewInit{

  inputValue: string = '';
  elements: IFormulaElement[] = formulaElements;
  elementsCopy: IFormulaElement[] = [...this.elements];
  private helpSub: Subscription;
  @ViewChild('formulaInput') formulaInput: ElementRef;
  inputPosition: number = 0;
  showHelp: boolean = false;
  currentValue: string;
  infoPosTop: boolean;
  symbolsArr: string[] = ['-' , '+' , '*' , '%' , '=' , '/' , '^' , '<' , '>' , '&' , '|' , ','];

  ngAfterViewInit() {
    // подписываемся на событие нажатия клавиш
    this.helpSub = fromEvent(this.formulaInput.nativeElement, 'keyup', (ev: KeyboardEvent) => ev)
      .subscribe(ev => {
        this.inputPosition = this.formulaInput.nativeElement.selectionStart;
        if(this.inputValue){
          this.showHelp = true;
          // если ставится открывающая скобка, то сразу добавляется закрывающаяся, курсор располагается между ними
          if(ev.key === '('){
            const inputValueArr = this.inputValue.split('');
            inputValueArr.splice(this.inputPosition, 0, ')');
            this.inputValue = inputValueArr.join('');
            setTimeout(() => {
              this.formulaInput.nativeElement.setSelectionRange(this.inputPosition, this.inputPosition);
            }, 1)
          }
          if(ev.key === 'ArrowLeft' || ev.key === 'ArrowRight' || ev.key === 'ArrowUp' || ev.key === 'ArrowDown'){
            this.elements = []
          } else {
            // определяется текущее значение вводимого элемента, и выводятся подходящие элементы из массива
            let inputValueArr = this.inputValue.slice(0, this.inputPosition).split(' ');
            if(inputValueArr[inputValueArr.length - 1].includes('(')){
              inputValueArr = inputValueArr[inputValueArr.length - 1].split('(');
            }
            this.currentValue = inputValueArr[inputValueArr.length - 1]
            this.elements = this.elementsCopy.filter((el) => el.value.toLowerCase().startsWith(this.currentValue.toLowerCase()))
          }
          this.checkFormula();
        } else {
          this.elements = [...this.elementsCopy];
          this.showHelp = false;
        }
      })
  }

  // для отделения элементов друг от друга используется пробел, при его наличии предлагаются варианты для следующего элемента (с учетом предыдущего)
  checkFormula(){
    if(this.inputValue[this.inputPosition - 1] === ' ' || this.inputValue[this.inputPosition - 1] === '('){
      if(this.symbolsArr.includes(this.inputValue[this.inputPosition - 2]) || this.inputValue[this.inputPosition - 1] === '('){
        this.elements = this.elementsCopy.filter((el) => el.type !== 'operator');
      } else {
        this.elements = this.elementsCopy.filter((el) => el.type === 'operator');
      }
    }
  }

  // при выборе элемента из списка он вставляется на место курсора или вместо уже введенных символов (при наличии)
  selectOperator(i: number){
    if(this.currentValue === ''){
      const inputValueArr = this.inputValue.split('');
      inputValueArr.splice(this.inputPosition, 0, this.elements[i].value);
      this.inputValue = inputValueArr.join('');
    } else {
      this.inputValue = this.inputValue.replace(this.currentValue, this.elements[i].value);
    }
    // при выборе элемента фокус с инпута пропадает, поэтому далее устанавливается фокус и курсор переводится на нужную позицию
    setTimeout(() => {
      this.formulaInput.nativeElement.focus();
      const cursorPosition = this.inputPosition - this.currentValue.length + this.elements[i].value.length;
      this.formulaInput.nativeElement.setSelectionRange(cursorPosition, cursorPosition);
      this.elements = [];
      this.inputPosition = this.formulaInput.nativeElement.selectionStart;
    }, 1)
  }

  setCursor(){
    this.elements = [];
    this.inputPosition = this.formulaInput.nativeElement.selectionStart;
    this.checkFormula();
  }

  showInfo(i: number){
    const infoEl = document.querySelectorAll('.item_info')[i];
    infoEl.classList.toggle('item_info__visible');
    // если подсказки расположены в нижней части экрана, изменяется их позиционирование
    this.infoPosTop = infoEl.getBoundingClientRect().top < (window.innerHeight / 2)
  }
}

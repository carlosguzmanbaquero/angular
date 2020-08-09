import { AbstractControl} from '@angular/forms';

export class MyValidators{

    static isPriceValidRange(control: AbstractControl){
        const value = control.value;
        console.log(value);
        if (value < 1 || value > 10000){
            return {
                price_invalid: true
            };
        }
        return null;
    }
}

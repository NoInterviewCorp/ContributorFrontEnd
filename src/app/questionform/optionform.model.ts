import { FormControl, Validators } from "@angular/forms";
import { Options } from "../option.model";

export class OptionForm {
    formControl: FormControl;
    option: Options;
    constructor() {
        this.formControl = new FormControl('', [Validators.required]);
        this.option = new Options();
    }
}
import { FormControl, Validators } from "@angular/forms";
import { Option } from "../option.model";

export class OptionForm {
    formControl: FormControl;
    option: Option;
    constructor() {
        this.formControl = new FormControl('', [Validators.required]);
        this.option = new Option();
    }
}
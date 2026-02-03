import {
  TextAreaField,
  InputField,
  CheckboxField,
  CheckboxGroupField,
  PickerField,
  RadioGroupField,
  SlotField,
  UploadField,
  SwitchField
} from './dynamic-form/fields';

export const FieldTypeComponent = {
  textarea: TextAreaField,
  pick: PickerField,
  switch: SwitchField,
  text: InputField,
  checkbox: CheckboxField,
  checkboxGroup: CheckboxGroupField,
  radioGroup: RadioGroupField,
  slot: SlotField,
  upload: UploadField
};

// export const fetchFormComponents = () => FieldTypeComponent;

import { isOneFieldEmpty } from './form_utility';
import { fullName } from '../../pages/Contact';

//Validation of the correct compilation of the form
function formValidation() {
  if (isOneFieldEmpty(fullName)) {
    printTextInOverlay('Sorry, username is required.');
    return false;
  }

  return true;
}

export { formValidation };

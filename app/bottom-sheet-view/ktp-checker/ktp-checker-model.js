import { Observable } from '@nativescript/core';

export class KtpCheckerModel extends Observable {
  nix;
  loading = false;
  isResult;

  constructor(passedInContext) {
    if (passedInContext) {
      this.nix = passedInContext.nix;
      this.isResult = passedInContext.isResult;
    }
  }

  toggleLoading() {
    this.loading = !this.loading;
    this.notifyPropertyChange('loading', true);
    console.log('loading >> ', this.get('loading'));
  }

  onSubmit(args) {
    const button = args.object;

    this.toggleLoading();

    setTimeout(() => {
      this.toggleLoading();

      /* const newData = { action: "submit", ...button.bindingContext };
      button.closeBottomSheet(newData); */
    }, 3000);

    console.log('onSubmit bro...');
  }

  onClose(args) {
    const button = args.object;

    const newData = { action: 'close', ...button.bindingContext };
    button.closeBottomSheet(newData);
  }
}

import { GlobalModel } from '~/global-model';

var model = GlobalModel([]);
var context;

export function onNavigatingTo(args) {
  const page = args.object;

  context = model;

  page.bindingContext = context;
}

export function openBottomSheet(args) {
  const page = args.object.page;

  page.showBottomSheet({
    view: '~/bottom-sheet-view/ktp-checker/ktp-checker',
    context: {
      isResult: false,
      nik: '3471140209790001',
    },
    closeCallback: (args) => {
      console.log('closeCallback', args);
    },
  });
}

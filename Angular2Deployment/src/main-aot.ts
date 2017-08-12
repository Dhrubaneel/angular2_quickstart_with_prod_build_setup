import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
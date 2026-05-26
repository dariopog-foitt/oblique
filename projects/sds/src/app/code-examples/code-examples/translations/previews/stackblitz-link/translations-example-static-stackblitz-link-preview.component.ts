import {ObButtonModule, ObExternalLinkModule} from '@dariopog-foitt/oblique';

import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
	selector: 'app-translations-example-stackblitz-link-preview',
	imports: [ObExternalLinkModule, MatButtonModule, ObButtonModule],
	templateUrl: './translations-example-static-stackblitz-link-preview.component.html',
})
export class TranslationsExampleStaticStackblitzLinkPreviewComponent {}

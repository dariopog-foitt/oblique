import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {ObButtonModule, ObExternalLinkModule} from '@dariopog-foitt/oblique';

@Component({
	selector: 'app-nav-tree-example-disabled-preview',
	imports: [ObExternalLinkModule, MatButtonModule, ObButtonModule],
	templateUrl: './nav-tree-example-disabled-preview.component.html',
})
export class NavTreeExampleDisabledPreviewComponent {}

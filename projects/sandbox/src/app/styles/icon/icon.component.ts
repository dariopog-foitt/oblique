import {Component} from '@angular/core';
import {ObEIcon} from '@dariopog-foitt/oblique';

@Component({
	selector: 'sb-icon-sample',
	standalone: false,
	templateUrl: './icon.component.html',
})
export class IconSampleComponent {
	icons = Object.values(ObEIcon);
}

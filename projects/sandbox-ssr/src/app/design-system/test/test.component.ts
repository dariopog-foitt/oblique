import {Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {DemoComponent} from '@dariopog-foitt/design-system';

@Component({
	selector: 'ssr-test',
	imports: [DemoComponent, TranslateModule],
	templateUrl: './test.component.html',
})
export class TestComponent {}

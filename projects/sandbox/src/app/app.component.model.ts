import type {ObEPamsEnvironment, ObTBanner} from '@dariopog-foitt/oblique';

export interface Environment {
	production: boolean;
	banner?: ObTBanner;
	pams?: {
		environment: ObEPamsEnvironment;
		rootUrl?: string;
	};
}

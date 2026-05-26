import type {ObEIcon} from '@dariopog-foitt/oblique';
import type {ObECategory} from './categories.model';

type ObECategoryValue = `${ObECategory}`;
type ObEIconValue = `${ObEIcon}`;

export interface IconMetadata {
	name: ObEIconValue;
	oldName?: string;
	purpose: 'single' | 'multi' | 'deprecated';
	usage: string;
	category: ObECategoryValue;
	aliases?: string[];
	description: string;
	deprecatedPurpose?: string;
}

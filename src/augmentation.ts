import type { RedactPlugin } from './index';
import Redact from './redact';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ Redact.pluginName ]: RedactPlugin;
	}
}

import type { RedactPlugin } from './index';

declare module '@ckeditor/ckeditor5-core' {
	interface PluginsMap {
		[ RedactPlugin.pluginName ]: RedactPlugin;
	}
}

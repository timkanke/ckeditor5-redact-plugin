import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import RedactEditing from './redactediting';
import RedactUI from './redactui';

export default class Redact extends Plugin {
    static get requires() {
        return [ RedactEditing, RedactUI ];
    }

    static get pluginName(): 'Redact' {
		return 'Redact';
    }
}

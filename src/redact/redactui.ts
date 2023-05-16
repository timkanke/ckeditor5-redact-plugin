import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import type AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

const REDACT = 'redact'

export default class RedactUI extends Plugin {
	init(): void {
		const editor = this.editor;

        // Register the button in the editor's UI component factory.
		editor.ui.componentFactory.add( REDACT, locale => {
			// To Do: add button bind to indicate altered texted when selected
			// https://ckeditor.com/docs/ckeditor5/latest/api/module_basic-styles_attributecommand-AttributeCommand.html
			// https://github.com/ckeditor/ckeditor5/issues/9107
			// const command: AttributeCommand = editor.commands.get( REDACT )!;
			const button = new ButtonView( locale );
			

			button.set( {
				label: 'Redact',
				withText: true,
				// icon: redactIcon,
				keystroke: 'Ctrl+j',
				tooltip: true,
				isToggleable: true
			} );

			// button.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( button, 'execute', () => {
				editor.execute( REDACT );
				editor.editing.view.focus();
			} );

			return button;
		} );
	}
}

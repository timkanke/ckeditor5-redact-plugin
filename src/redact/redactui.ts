import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

const REDACT = 'redact'

export default class RedactUI extends Plugin {
	init() {
		const editor = this.editor;
		// const command: AttributeCommand = editor.commands.get( REDACT )!;

        // Register the button in the editor's UI component factory.
		editor.ui.componentFactory.add( 'redact', () => {
			const button = new ButtonView();
			
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

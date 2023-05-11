import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Redact from './redact';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

const REDACT = 'redact'

export default class RedactEditing extends Plugin {
	init() {
		this._defineSchema();
		this._defineConverters();
	}
	_defineSchema() {
		console.log( 'RedactEditing#init() got called' );
		const schema = this.editor.model.schema;

    	// Extend the text node's schema to accept the redact attribute.
		schema.extend( '$text', {
			allowAttributes: [ REDACT ]
		} );
		schema.setAttributeProperties( REDACT, {
			isFormatting: true,
			copyOnEnter: true
		} );
	}
	_defineConverters() {
		const editor = this.editor;
		
        // Conversion from a model attribute to a view element
		editor.conversion.attributeToElement( {
			model: REDACT,
			view: {name: 'del', classes: 'redacted'},
			upcastAlso: [

				{
					styles: {
						'text-decoration': 'line-through'
					}
				}
			]
		} );
		
		// Create strikethrough command.
		editor.commands.add( REDACT, new AttributeCommand( editor, REDACT ) );

		// Set the Ctrl+j keystroke.
		// Progress. Not all keys are usable. I was using the period/greater than.
		editor.keystrokes.set( 'CTRL+j', REDACT );

	}
}


import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Redact from './redact';
import AttributeCommand from './attributecommand';

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
			allowAttributes: [ 'redact' ]
		} );
		schema.setAttributeProperties( 'Redact', {
			isFormatting: true,
			copyOnEnter: true
		} );
	}
	_defineConverters() {
		const editor = this.editor;
		
        // Conversion from a model attribute to a view element

		
		editor.conversion.attributeToElement( {
			model: 'RedactEditing',
			view: 's',
			upcastAlso: [
				'del',
				'strike',
				{
					styles: {
						'text-decoration': 'line-through'
					}
				}
			]
		} );

		// conversion.for( 'downcast' ).attributeToElement( {
            // model: 'RedactEditing',
            // view: ( attributeValue, writer ) => {
                // return writer.AttributeElement( 's', { target: attributeValue }, { priority: 5 } );
            // },
            // converterPriority: 'low'
        // } );
// 
    //    conversion.for( 'upcast' ).attributeToAttribute( {
            // view: {
                // name: 's',
                // key: 'target'
            // },
            // model: 'RedactEditing',
            // converterPriority: 'low'
        // } );
		
		// Create strikethrough command.
		editor.commands.add( 'RedactEditing', new AttributeCommand( editor, 'RedactEditing' ) );

		// Set the Ctrl+j keystroke.
		// Progress. Not all keys are usable. I was using the period/greater than. Changed to j; I get an error message.
		editor.keystrokes.set( 'CTRL+j', 'redact' );

	}
}


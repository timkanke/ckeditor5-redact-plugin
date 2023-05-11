import { expect } from 'chai';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import RedactPlugin from '../src/redactplugin';

describe( 'RedactPlugin', () => {
	it( 'should be named', () => {
		expect( RedactPlugin.pluginName ).to.equal( 'RedactPlugin' );
	} );

	describe( 'init()', () => {
		let domElement: HTMLElement, editor: ClassicEditor;

		beforeEach( async () => {
			domElement = document.createElement( 'div' );
			document.body.appendChild( domElement );

			editor = await ClassicEditor.create( domElement, {
				plugins: [
					Paragraph,
					Heading,
					Essentials,
					RedactPlugin
				],
				toolbar: [
					'redactPluginButton'
				]
			} );
		} );

		afterEach( () => {
			domElement.remove();
			return editor.destroy();
		} );

		it( 'should load RedactPlugin', () => {
			const myPlugin = editor.plugins.get( 'RedactPlugin' );

			expect( myPlugin ).to.be.an.instanceof( RedactPlugin );
		} );

		it( 'should add an icon to the toolbar', () => {
			expect( editor.ui.componentFactory.has( 'redactPluginButton' ) ).to.equal( true );
		} );

		it( 'should add a text into the editor after clicking the icon', () => {
			const icon = editor.ui.componentFactory.create( 'redactPluginButton' );

			expect( editor.getData() ).to.equal( '' );

			icon.fire( 'execute' );

			expect( editor.getData() ).to.equal( '<p>Hello CKEditor 5!</p>' );
		} );
	} );
} );

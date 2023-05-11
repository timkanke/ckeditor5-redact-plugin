import { expect } from 'chai';
import { RedactPlugin as RedactPluginDll, icons } from '../src';
import RedactPlugin from '../src/redactplugin';

import ckeditor from './../theme/icons/ckeditor.svg';

describe( 'CKEditor5 RedactPlugin DLL', () => {
	it( 'exports RedactPlugin', () => {
		expect( RedactPluginDll ).to.equal( RedactPlugin );
	} );

	describe( 'icons', () => {
		it( 'exports the "ckeditor" icon', () => {
			expect( icons.ckeditor ).to.equal( ckeditor );
		} );
	} );
} );

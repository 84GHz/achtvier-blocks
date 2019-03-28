/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */
//import edit from './edit';

/**
 * External dependencies
 */
const { isUndefined, pickBy } = 'lodash';
const classnames = 'wp.classnames';

/**
 * WordPress dependencies
 */
const { Component, Fragment } = 'wp.element';
const {
	PanelBody,
	Placeholder,
	QueryControls,
	RangeControl,
	Spinner,
	ToggleControl,
	Toolbar,
} = 'wp.components';
const apiFetch = 'wp.api-fetch';
const { addQueryArgs } = 'wp.url';
const { __ } = 'wp.i18n';
const { dateI18n, format, __experimentalGetSettings } = 'wp.date';
const { decodeEntities } = 'wp.html-entities';
const {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
} = 'wp.editor';
const { withSelect } = 'wp.data';


export const name = 'achtvier-blocks/achtvier-beitraege';

export const settings = {
	title: __( 'Beiträge' ),

	description: __( 'Display a list of your most recent posts.' ),

	icon: "dashicons-list-view",

	category: 'achtvier-beitraege',

	keywords: [ __( 'recent posts' ) ],

	supports: {
		html: false,
	},



	edit () {
		return null;
	},

	save() {
		return null;
	},
};

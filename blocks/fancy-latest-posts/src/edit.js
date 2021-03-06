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

/**
 * Module Constants
 */
const CATEGORIES_LIST_QUERY = {
	per_page: -1,
};
const MAX_POSTS_COLUMNS = 6;

class LatestPostsEdit extends Component {
	constructor() {
		super( ...arguments );
		this.state = {
			categoriesList: [],
		};
		this.toggleDisplayPostDate = this.toggleDisplayPostDate.bind( this );
	}

	componentWillMount() {
		this.isStillMounted = true;
		this.fetchRequest = apiFetch( {
			path: addQueryArgs( `/wp/v2/categories`, CATEGORIES_LIST_QUERY ),
		} ).then(
			( categoriesList ) => {
				if ( this.isStillMounted ) {
					this.setState( { categoriesList } );
				}
			}
		).catch(
			() => {
				if ( this.isStillMounted ) {
					this.setState( { categoriesList: [] } );
				}
			}
		);
	}

	componentWillUnmount() {
		this.isStillMounted = false;
	}

	toggleDisplayPostDate() {
		const { displayPostDate } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayPostDate: ! displayPostDate } );
	}

	render() {
		const { attributes, setAttributes, latestPosts } = this.props;
		const { categoriesList } = this.state;
		const { displayPostDate, align, postLayout, columns, order, orderBy, categories, postsToShow } = attributes;
/*
		const inspectorControls = (
			<InspectorControls>
				<PanelBody title={ __( 'Latest Posts Settings' ) }>
					<QueryControls
						{ ...{ order, orderBy, teaserLength } }
						numberOfItems={ postsToShow }
						categoriesList={ categoriesList }
						selectedCategoryId={ categories }
						onTeaserLengthChange={ ( value ) => setAttributes( { teaserLength: value } ) }
						onOrderChange={ ( value ) => setAttributes( { order: value } ) }
						onOrderByChange={ ( value ) => setAttributes( { orderBy: value } ) }
						onCategoryChange={ ( value ) => setAttributes( { categories: '' !== value ? value : undefined } ) }
						onNumberOfItemsChange={ ( value ) => setAttributes( { postsToShow: value } ) }
					/>
					<ToggleControl
						label={ __( 'Display post date' ) }
						checked={ displayPostDate }
						onChange={ this.toggleDisplayPostDate }
					/>

				</PanelBody>
			</InspectorControls>
		);*/

		const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;
		if ( ! hasPosts ) {
			return (
				<Fragment>
					{ inspectorControls }
					<Placeholder
						icon="admin-post"
						label={ __( 'Latest Posts' ) }
					>
						{ ! Array.isArray( latestPosts ) ?
							<Spinner /> :
							__( 'No posts found.' )
						}
					</Placeholder>
				</Fragment>
			);
		}

		// Removing posts from display should be instant.
		const displayPosts = latestPosts.length > postsToShow ?
			latestPosts.slice( 0, postsToShow ) :
			latestPosts;



		const dateFormat = __experimentalGetSettings().formats.date;

		return (
			<Fragment>
				{ inspectorControls }
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
						controls={ [ 'center', 'wide', 'full' ] }
					/>

				</BlockControls>
				<ul
					className={ classnames( this.props.className, {
						'has-dates': displayPostDate,
					} ) }
				>
					{ displayPosts.map( ( post, i ) =>
						<li key={ i }>
							<a href={ post.link } target="_blank">{ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }</a>
							{ displayPostDate && post.date_gmt &&
								<time dateTime={ format( 'c', post.date_gmt ) } className="wp-block-latest-posts__post-date">
									{ dateI18n( dateFormat, post.date_gmt ) }
								</time>
							}
						</li>
					) }
				</ul>
			</Fragment>
		);
	}
}

export default withSelect( ( select, props ) => {
	const { postsToShow, order, orderBy, categories } = props.attributes;
	const { getEntityRecords } = select( 'core' );
	const latestPostsQuery = pickBy( {
		categories,
		order,
		orderby: orderBy,
		per_page: postsToShow,
	}, ( value ) => ! isUndefined( value ) );
	return {
		latestPosts: getEntityRecords( 'postType', 'post', latestPostsQuery ),
	};
} )( LatestPostsEdit );

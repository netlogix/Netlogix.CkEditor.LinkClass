import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {$get, $transform} from 'plow-js';

import {SelectBox} from '@neos-project/react-ui-components';
import {neos} from '@neos-project/neos-ui-decorators';
import {executeCommand} from '@neos-project/neos-ui-ckeditor5-bindings';

import {selectors} from '@neos-project/neos-ui-redux-store';
import positionalArraySorter from '@neos-project/positional-array-sorter';

@connect($transform({
	formattingUnderCursor: selectors.UI.ContentCanvas.formattingUnderCursor
}))
@neos(globalRegistry => ({
	i18nRegistry: globalRegistry.get('i18n'),
	frontendConfigurationRegistry: globalRegistry.get('frontendConfiguration')
}))
export default class LinkClassComponent extends PureComponent {
	static propTypes = {
		formattingUnderCursor: PropTypes.objectOf(PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.bool,
			PropTypes.string,
			PropTypes.object
		])),
		linkingOptions: PropTypes.object.isRequired,
		i18nRegistry: PropTypes.object.isRequired,
		frontendConfigurationRegistry: PropTypes.object.isRequired
	};

	render() {
		const {frontendConfigurationRegistry, i18nRegistry, linkingOptions} = this.props;

		const linkClassOptions = frontendConfigurationRegistry.get('Netlogix.CkEditor.LinkClass:options') || {};
		const enabledLinkClasses = $get('netlogixLinkClass', linkingOptions)

		const enabledLinkClassOptions = (enabledLinkClasses === true)
			? linkClassOptions
			: Object.keys(linkClassOptions).reduce((options, name) => {
				if (enabledLinkClasses.hasOwnProperty(name)) {
					options[name] = linkClassOptions[name];
				}
				return options;
			}, {});

		const sortedEnabledLinkClassOptions = positionalArraySorter(Object.values(enabledLinkClassOptions))

		const transformedAndSortedEnabledLinkClassOptions = sortedEnabledLinkClassOptions.map(linkOption => {
			return {
				label: linkOption.label,
				value: linkOption.class,
				icon: 'adjust'
			};
		});

		return transformedAndSortedEnabledLinkClassOptions.length > 0 ? (
			<div style={{flexGrow: 1}}>
				<div style={{padding: 8}}>
					{i18nRegistry.translate('Netlogix.CkEditor.LinkClass:CKEditor.LinkClass:label', 'Link style')}
					<SelectBox
						value={this.getItemprop()}
						options={transformedAndSortedEnabledLinkClassOptions}
						placeholder={i18nRegistry.translate('Netlogix.CkEditor.LinkClass:CKEditor.LinkClass:placeholder', 'Choose link style')}
						onValueChange={value => {
							executeCommand('netlogixLinkClass', value)
						}}
						allowEmpty={true}
					/>
				</div>
			</div>
		) : null;
	}

	getItemprop() {
		return $get('netlogixLinkClass', this.props.formattingUnderCursor) || '';
	}
}

import manifest from '@neos-project/neos-ui-extensibility';
import {$add, $get} from 'plow-js';
import LinkClassPlugin from "./link-class-plugin";
import LinkClassComponent from "./link-class-component";

const addPlugin = (Plugin, isEnabled) => (ckEditorConfiguration, options) => {
	if (!isEnabled || isEnabled(options.editorOptions, options)) {
		ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
		return $add('plugins', Plugin, ckEditorConfiguration);
	}
	return ckEditorConfiguration;
};

manifest('Netlogix.CkEditor.LinkClass', {}, globalRegistry => {
	const config = globalRegistry.get('ckEditor5').get('config');
	config.set('netlogixLinkClass', addPlugin(LinkClassPlugin, $get('formatting.a')));

	const containerRegistry = globalRegistry.get('containers');
	containerRegistry.set('LinkInput/OptionsPanel/NetlogixLinkClass', LinkClassComponent);
});

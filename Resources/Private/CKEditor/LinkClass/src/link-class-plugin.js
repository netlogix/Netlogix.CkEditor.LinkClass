import LinkClassCommand from './link-class-command';
import {Plugin} from 'ckeditor5-exports';

export default class LinkClassPlugin extends Plugin {
	static get pluginName() {
		return 'NetlogixLinkClass';
	}

	init() {
		const editor = this.editor;
		editor.model.schema.extend('$text', {allowAttributes: 'netlogixLinkClass'});

		editor.conversion.for('downcast').attributeToElement({
			model: 'netlogixLinkClass',
			view: (value, writer) => writer.createAttributeElement('a', {'class': value}, {priority: 5})
		});
		editor.conversion.for('upcast')
			.elementToAttribute({
				view: {
					name: 'a',
					attributes: {
						class: true
					}
				},
				model: {
					key: 'netlogixLinkClass',
					value: viewElement => viewElement.getAttribute('class')
				}
			});

		this.editor.commands.add('netlogixLinkClass', new LinkClassCommand(editor));
	}
}

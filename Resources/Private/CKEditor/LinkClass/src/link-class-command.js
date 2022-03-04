import {Command, ModelPosition as Position, ModelRange as Range} from 'ckeditor5-exports';

export default class ClassCommand extends Command {
	refresh() {
		const model = this.editor.model;
		const doc = model.document;

		this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, 'netlogixLinkClass');
		if (doc.selection.hasAttribute('netlogixLinkClass')) {
			this.value = doc.selection.getAttribute('netlogixLinkClass');
		} else {
			const parent = doc.selection.getFirstPosition().parent;
			this.value = parent.getAttribute('netlogixLinkClass');
		}
	}

	execute(value) {
		const model = this.editor.model;
		const doc = model.document;
		const selection = doc.selection;
		value = (value === undefined || value === '') ? false : value;

		model.change(writer => {
			if (selection.isCollapsed) {
				const position = selection.getFirstPosition().parent;

				if (selection.hasAttribute('netlogixLinkClass')) {
					const itempropRange = this.findItemprop(selection.getFirstPosition(), selection.getAttribute('netlogixLinkClass'));
					if (value === false) {
						writer.removeAttribute('netlogixLinkClass', itempropRange);
					} else {
						writer.setAttribute('netlogixLinkClass', value, itempropRange);
						writer.setSelection(itempropRange);
					}
				} else {
					if (value === false) {
						writer.removeAttribute('netlogixLinkClass', position);
					} else {
						writer.setAttribute('netlogixLinkClass', value, position);
					}
				}
			} else {
				const ranges = model.schema.getValidRanges(selection.getRanges(), 'netlogixLinkClass');

				for (const range of ranges) {
					if (value === false) {
						writer.removeAttribute('netlogixLinkClass', range);
					} else {
						writer.setAttribute('netlogixLinkClass', value, range);
					}
				}
			}
		});
	}

	findItemprop(position, value) {
		return new Range(this._findBound(position, value, true), this._findBound(position, value, false));
	}

	_findBound(position, value, lookBack) {
		let node = position.textNode || (lookBack ? position.nodeBefore : position.nodeAfter);

		let lastNode = null;

		while (node && node.getAttribute('netlogixLinkClass') === value) {
			lastNode = node;
			node = lookBack ? node.previousSibling : node.nextSibling;
		}

		return lastNode ? Position.createAt(lastNode, lookBack ? 'before' : 'after') : position;
	}
}

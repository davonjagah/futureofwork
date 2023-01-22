import { ReactText, useEffect, useRef } from 'react';

function createRootElement(id: string, zIndex: ReactText): HTMLDivElement {
	const rootContainer = document.createElement('div');
	rootContainer.style.position = 'relative';
	rootContainer.style.zIndex = `${zIndex}`;
	rootContainer.setAttribute('id', id);
	return rootContainer;
}

function addRootElement(rootElem: Element): void {
	if (document.body.lastElementChild) {
		document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
	}
}

export function usePortal(id: string, zIndex: ReactText): HTMLElement {
	const rootElemRef = useRef(document.createElement('div'));

	useEffect(
		function setupElement() {
			// Look for existing target dom element to append to
			const existingParent = document.querySelector(`#${id}`);
			// Parent is either a new root or the existing dom element
			const parentElem = existingParent || createRootElement(id, zIndex);

			// If there is no existing DOM element, add a new one.
			if (!existingParent) {
				addRootElement(parentElem);
			}

			const currentRef = rootElemRef.current;

			// Add the detached element to the parent
			if (currentRef) {
				parentElem.appendChild(currentRef);
			}

			return function removeElement() {
				if (currentRef) {
					currentRef.remove();
				}
				if (parentElem.childNodes.length === 0) {
					parentElem.remove();
				}
			};
		},
		[id, zIndex]
	);

	return rootElemRef.current;
}

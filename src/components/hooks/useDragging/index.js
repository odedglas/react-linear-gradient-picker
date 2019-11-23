import { useState, useEffect } from 'react';
import { noop } from '../../../lib';

const useDragging = ({ onDragStart = noop, onDrag, onDragEnd = noop }) => {
	const [dragging, setDragging] = useState(false);

	const handleMouseDown = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (!e.button) activate(e);
	};

	const activate = (e) => {
		setDragging(true);

		onDragStart(e);
	};

	const deactivate = () => {
		setDragging(false);

		onDragEnd();
	};

	useEffect(() => {
		if (dragging) {

			document.addEventListener('mousemove', onDrag);
			document.addEventListener('mouseup', deactivate);
		}

		return () => {
			document.removeEventListener('mousemove', onDrag);
			document.removeEventListener('mouseup', deactivate);
		};
	}, [dragging]);

	return [
		handleMouseDown,
		activate,
		deactivate
	];
};

export default useDragging;
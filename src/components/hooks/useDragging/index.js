import { useState, useEffect } from 'react';
import { noop } from '../../../lib';

const useDragging = ({ onDragStart = noop, onDrag, onDragEnd = noop }) => {
	const [context, setContext] = useState({});
	const [dragging, setDragging] = useState(false);
	const [touch, setTouch] = useState(false);

	const handleMouseDown = (e) => {
		const touch = e.type === 'touchstart';
		setTouch(touch);
		
		if (!touch) {
			e.preventDefault();
			e.stopPropagation();
		}

		if (!e.button) activate(e, touch);
	};

	const activate = (e, touch = false) => {
		setDragging(true);

		onDragStart(!touch ? e : {
			...e,
			clientX: e.touches[0].pageX,
			clientY: e.touches[0].pageY
		});
	};

	const deactivate = () => {
		setDragging(false);

		onDragEnd(context.change);
		setContext({});
	};

	const handleDrag = (e) => {
		if (!dragging) return;

		context.change = onDrag(!touch ? e : {
			...e,
			clientX: e.touches[0].pageX,
			clientY: e.touches[0].pageY
		});
	};

	useEffect(() => {
		if (dragging) {
			document.addEventListener(touch ? 'touchend' : 'mouseup', deactivate);
			document.addEventListener(touch ? 'touchmove' : 'mousemove', handleDrag, touch ? {
				cancelable: true,
				passive: false
			} : null);
		}

		return () => {
			document.removeEventListener(touch ? 'touchend' : 'mouseup', deactivate);
			document.removeEventListener(touch ? 'touchmove' : 'mousemove', handleDrag);
		};
	}, [dragging, touch]);

	return [
		handleMouseDown,
		activate,
		deactivate
	];
};

export default useDragging;
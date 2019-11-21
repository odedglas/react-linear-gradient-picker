import { useState, useEffect } from 'react';

/**
 * Limits a client drag movement within given min / max
 * @param {Number} offset - The current clientX
 * @param {Number} min - Min boundary
 * @param {Number} max - Max boundary
 * @returns {Number}
 */
const limitPos = (offset, min, max) => Math.max(Math.min(offset, max), min);

const getColorStopRefTop = (ref) => {
	if (!ref.current) return 0;
	return ref.current.getBoundingClientRect().top;
};

const useStopDragging = ({ limits, stop, initialPos, colorStopRef, onPosChange, onDragStart, onDragEnd, onDeleteColor}) => {
	const [dragging, setDragging] = useState(false);
	const [posStart, setPosStart] = useState(initialPos);

	const handleMouseDown = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (!e.button) activate(e.clientX);
	};

	const handleMouseUp = () => deactivate();

	const handleMouseMove = ({ clientX, clientY }) => {
		if (!dragging) return;

		const { id, offset } = stop;
		const { min, max } = limits;

		// Removing if out of drop limit on Y axis.
		const top = getColorStopRefTop(colorStopRef);
		if (Math.abs(clientY - top) > limits.drop) {
			deactivate();
			return onDeleteColor(id);
		}

		// Limit movements
		const dragOffset = offset - posStart;
		const limitedPos = limitPos(dragOffset + clientX, min, max);

		onPosChange({ id, offset: limitedPos });
	};

	const activate = (posStart) => {
		setDragging(true);
		setPosStart(posStart);

		onDragStart(stop.id);
	};

	const deactivate = () => {
		setDragging(false);

		onDragEnd(stop.id);
	};

	useEffect(() => {
		const { pointX } = stop;
		pointX && activate(pointX);
	}, []);

	useEffect(() => {
		if (dragging) {

			document.addEventListener('mousemove', handleMouseMove);
			document.addEventListener('mouseup', handleMouseUp);
		}

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};
	}, [dragging]);

	return [
		handleMouseDown,
	];
};

export default useStopDragging;
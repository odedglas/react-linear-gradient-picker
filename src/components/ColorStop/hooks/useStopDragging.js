import React, { useState, useEffect } from 'react';

/**
 * Limits a client drag movment within given min / max
 * @param {Number} pos - The current clientX
 * @param {Number} min - Min boundary
 * @param {Number} max - Max boundary
 * @returns {Number}
 */
const limitPos = (pos, min, max) => Math.max(Math.min(pos, max), min);

const useStopDragging = ({ limits, stop, initialPos, onPosChange, onDragStart, onDragEnd }) => {
	const [dragging, setDragging] = useState(false);
	const [posStart, setPosStart] = useState(initialPos);

	const handleMouseDown = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (!e.button) activate(e.clientX)
	};

	const handleMouseUp = () => deactivate();

	const handleMouseMove = ({ clientX }) => {
		if (!dragging) return;

		const { id, pos } = stop;
		const { min, max } = limits;

		// Limit movements
		const offset = pos - posStart;
		const limitedPos = limitPos(offset + clientX, min, max);

		onPosChange({ id, pos: limitedPos })
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
		}
	}, [dragging]);

	return [
		handleMouseDown,
	]
};

export default useStopDragging;
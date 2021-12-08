const dragProductBacklog = document.querySelectorAll('.dragProductBacklog');
const productBacklogContainer = document.querySelectorAll('.productBacklogContainer');

dragProductBacklog.forEach(draggable => {
	draggable.addEventListener('dragstart', () => {
		draggable.classList.add('dragging');

	});
	draggable.addEventListener('dragend', () => {
		draggable.classList.remove('dragging');

	});


})

productBacklogContainer.forEach(container => {
	container.addEventListener('dragover', e => {
		e.preventDefault();
		const afterElement = getDragAfterElement(container,e.clientY);
		//console.log(afterElement); this shows whats the element we are over in real time
		const draggable = document.querySelector('.dragging');
		if(afterElement == null){
			container.appendChild(draggable);
		}else{
			container.insertBefore(draggable, afterElement);
		}
	});
});

function getDragAfterElement(container,y){
	const draggableElements = [...container.querySelectorAll('.dragProductBacklog:not(.dragging)')];

	  return draggableElements.reduce((closest, child) => {
		const box = child.getBoundingClientRect();
		const offset = y - box.top - box.height / 2;

		if(offset < 0 && offset > closest.offset){
			return {offset: offset, element:child}
		}else{
			return closest;
		}

	}, {offset: Number.NEGATIVE_INFINITY}).element
}

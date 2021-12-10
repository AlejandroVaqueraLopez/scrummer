const dragProductBacklog = document.querySelectorAll('.dragProductBacklog');
const dragSprintBacklog = document.querySelectorAll('.dragSprintBacklog');
const dragDailyScrum= document.querySelectorAll('.dragDailyScrum');
const dragSprintReview= document.querySelectorAll('.dragSprintReview');
const dragSprintRetrospective= document.querySelectorAll('.dragSprintRetrospective');

const dragProductBacklogContainer = document.querySelectorAll('.dragProductBacklogContainer');
const dragSprintBacklogContainer = document.querySelectorAll('.dragSprintBacklogContainer');
const dragDailyScrumContainer = document.querySelectorAll('.dragDailyScrumContainer');
const dragSprintReviewContainer= document.querySelectorAll('.dragSprintReviewContainer');
const dragSprintRetrospectiveContainer = document.querySelectorAll('.dragSprintRetrospectiveContainer');

function addDragEvent(itemName){
	itemName.forEach(draggable => {
		draggable.addEventListener('dragstart', () => {
			draggable.classList.add('dragging');
		});
		draggable.addEventListener('dragend', () => {
			draggable.classList.remove('dragging');
		});
	})
}

addDragEvent(dragProductBacklog);
addDragEvent(dragSprintBacklog);
addDragEvent(dragDailyScrum);
addDragEvent(dragSprintReview);
addDragEvent(dragSprintRetrospective);

function forEachContainer(containerElement,itemName){
	containerElement.forEach(container => {
		container.addEventListener('dragover', e => {
			const afterElement = getDragAfterElement(itemName,container,e.clientY);
			//console.log(afterElement.className); //this shows whats the element we are over in real time
			const draggable = document.querySelector('.dragging');
			const elementId = draggable.id;
			const containerId = containerElement[0].id;
			//console.log(elementId);
			//console.log(containerId);

			if(elementId == containerId){
				e.preventDefault();
				if(afterElement == null){
					container.appendChild(draggable);
					//console.log('last append')
				}else{ 
					//console.log(elementId,containerId);
					container.insertBefore(draggable, afterElement);
				}
			}
		});
	});
}

forEachContainer(dragProductBacklogContainer,'dragProductBacklog');
forEachContainer(dragSprintBacklogContainer,'dragSprintBacklog');
forEachContainer(dragDailyScrumContainer,'dragDailyScrum');
forEachContainer(dragSprintReviewContainer,'dragSprintReview');
forEachContainer(dragSprintRetrospectiveContainer,'dragSprintRetrospective');

function getDragAfterElement(itemName,container,y){
	const draggableElements = [...container.querySelectorAll('.' + itemName + ':not(.dragging)')];

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

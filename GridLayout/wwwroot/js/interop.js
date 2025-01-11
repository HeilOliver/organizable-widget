

window.setupDragHandler = (widget, container, dotNetRef) => {
    let initialMouseX, initialMouseY;

    widget.addEventListener('dragstart', (e) => {
        const widgetRect = widget.getBoundingClientRect();

        initialMouseX = e.clientX - widgetRect.x;
        initialMouseY = e.clientY - widgetRect.y;
    });

    widget.addEventListener('drag', (e) => {
        const widgetRect = widget.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const offsetX = e.clientX - initialMouseX - containerRect.x;
        const offsetY = e.clientY - initialMouseY - containerRect.y;
        
        if (e.clientY ===  0 || e.clientX === 0) {
            return;
        }
        
        dotNetRef.invokeMethodAsync('HandleDrag', {
            widget: {
                x: widgetRect.x,
                y: widgetRect.y,
                width: widgetRect.width,
                height: widgetRect.height
            },
            container: {
                x: containerRect.x,
                y: containerRect.y,
                width: containerRect.width,
                height: containerRect.height
            },
            offsetX: offsetX,
            offsetY: offsetY
        });
    });
};
namespace GridLayout.Pages;

public class WidgetDragEvent : EventArgs
{

    public DOMRect Widget { get; set; }
    
    public DOMRect Container { get; set; }
    
    public double OffsetX { get; set; }
    
    public double OffsetY { get; set; }
}

public class DOMRect
{
    public double X { get; set; }
    
    
    public double Y { get; set; }
    
    public double Width { get; set; }
    
    public double Height { get; set; }
}
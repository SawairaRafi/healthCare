import DoctorsDetails from "./DoctorsDetails";


function PopoverDemo() {
    const popoverRef = useRef()
    useEffect(() => {
      var popover = new bootstrap.Popover(popoverRef.current, {
          content: "Hello popover content!",
          title: "My Popover"
      })
    })
  
    return (
      <div className="p-4">
          <button className="btn btn-lg btn-danger" ref={popoverRef}>
              Click to toggle popover
          </button>
          <DoctorsDetails popper={this.PopoverDemo}/>
      </div>
     
    );
  }

  export default PopoverDemo;
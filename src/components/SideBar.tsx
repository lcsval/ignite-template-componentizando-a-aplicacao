export function SideBar() {
  // Complete aqui

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          props.children()
        </div>

      </nav>
    </>
  )
}
const NavComponent = () => {
    return (
      <div>
      {/* <head> */}
      <nav>
      <div>DSV/</div>
      <div>
          <div className="menu">
              <div className="m 1">About</div>
              <div className="m 2">Work</div>
              <div className="m 3">Testimonials</div>
              <div className="m 4">Contact</div>
              {/* <div className="icon"><Image src="/Projects_by_Devesh/Portfoliodev/Image/Icon1.png" alt=""  width={400} height={400}/></div> */}
              <div className="CVButton"><button>Download CV</button></div>
          </div>

      </div>
  </nav>
</div>
    )
}

export default NavComponent;
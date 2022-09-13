import React from 'react'

function Hero() {
  return (
    <section className='hero'>
      <div className="hero-content">
        <div>
          <h2>Welcome I'm Yasein Burqan</h2>
          <h1>I design and <br /> build <span>websites</span></h1>

        </div>

        <div className='hero-content-footer'>
          <a href="" className="btn btn-primary">My Work</a>
          <div className="hero-social-link">
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero



const Footer = () => {
    return (
        <div>
            <footer className="text-center text-white" style={{backgroundColor: "#F8F8F8"}} >
  {/* <!-- Grid container --> */}
  <div className="container pt-4">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Facebook -->
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f"></i
      ></a> */}

      {/* <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a> */}

      {/* <!-- Instagram -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a> */}

      {/* <!-- Linkedin --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/yarema-ostrovskiy/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i>
        <i className="bi bi-linkedin"></i>
        {/* <i className="bi bi-x-lg" ></i> */}
      </a>
      {/* <!-- Github --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/Yarema91/New_redux_product_app"
        role="button"
        data-mdb-ripple-color="dark"
        >
            <i className="bi bi-github"></i>
      </a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright:
    {/* <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
  </div>
  {/* <!-- Copyright --> */}
</footer>
        </div>
    )
}

export default Footer

import Logo from "@/assets/Signature.svg"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="h-20" />
          <p className="my-5"></p>
          <p>© Tym Rudnik All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a
            className="my-5 hover:text-oxford-blue hover:underline"
            href="https://www.linkedin.com/in/tymrudnik/"
            target="_blank"
          >
            <p className="my-5">LinkedIn</p>
          </a>
          <p className="my-5">Photography</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Me</h4>
          <p>Gdańsk, Poland</p>
          <p>+48 787 252 528</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

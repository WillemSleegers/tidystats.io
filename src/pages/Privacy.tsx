import { Link } from "react-router-dom"

export default function Privacy() {
  return (
    <div className="container-md my-5">
      <h2 className="text-center py-3">Privacy Statement</h2>

      <p>
        tidystats software, both the R package and the Word add-in, does not
        collect or transmit user information, and does not rely on external
        services except for hosting the necessary files.
      </p>

      <p>
        The tidystats Word add-in requires an internet connection, but this is
        only used to retrieve the files needed to perform its functions of
        parsing and inserting statistics into your Word document. All processing
        is done directly on your machine.
      </p>

      <p>
        tidystats software does not contain any user analytics. In other words,
        I do not track anything you do when using tidystats. If you like using
        tidystats, please <Link to="/citation">cite</Link> the software and/or
        let me know that you enjoyed using it via{" "}
        <a href="https://twitter.com/tidystats">Twitter</a> or send me an{" "}
        <a href="mailto:tidystats@gmail.com">e-mail</a>.
      </p>

      <p>
        RStudio does <a href="http://cran-logs.rstudio.com">track</a> how many
        times R packages are downloaded from CRAN and Microsoft does similar
        tracking.
      </p>

      <p>
        If you send a support e-mail, your e-mail address will only be used for
        tidystats support purposes.
      </p>
    </div>
  )
}

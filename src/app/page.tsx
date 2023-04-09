export default function Home() {
  return (
    <main>
      <div className="py-3 ">
        <div className="m-auto max-w-800">
          <img
            className="m-auto"
            src="/assets/images/tidystats-logo.svg"
            width="160"
            height="160"
            alt="tidystats logo"
          />
          <div className="text-center">
            <h1 className="text-5xl font-bold">tidystats</h1>
            <p className="text-lg">Reproducibly report statistics</p>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="max-w-800 m-auto py3-md-4">
          <h2>What is tidystats?</h2>
          <p>
            tidystats is a software solution designed to help researchers report
            the output of statistical analyses. It consists of an R package
            whose main function is to gather the statistics from statistical
            analyses and an Office add-in to reproducibly report statistics in
            Microsoft Word.
          </p>
          <a className="btn btn-primary btn-lg" href="/about/" role="button">
            Learn more
          </a>
        </div>
      </div>
    </main>
  )
}

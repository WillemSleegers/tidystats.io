import { Link } from "react-router-dom"

import Section from "../components/Section"
import Footer from "../components/Footer"
import LearnMoreButton from "../components/LearnMoreButton"
import CitationButton from "../components/CitationButton"

import logo from "../images/tidystats-logo.svg"
import logoR from "../images/R-logo.svg"
import logoWord from "../images/word.svg"
import logoTwitter from "../images/twitter.svg"

const Home = () => {
  return (
    <>
      <Section background="bg-light">
        <div className="py-2 text-center">
          <img src={logo} width="160" height="160" alt="tidystats logo" />
          <h1>tidystats</h1>
          <p className="lead">Reproducibly report statistics</p>
        </div>
      </Section>
      <Section>
        <div className="container py-4">
          <h2>What is tidystats?</h2>
          <p className="lead">
            tidystats is a software solution designed to help researchers report
            the output of statistical analyses. It consists of an R package
            whose main function is to gather the statistics from statistical
            analyses and an Office add-in to reproducibly report statistics in
            Microsoft Word.
          </p>
          <LearnMoreButton to="about" />
        </div>
      </Section>
      <Section background="bg-light">
        <div className="container d-md-flex align-items-center gap-5 py-4">
          <div className="flex-grow-1">
            <h2>R package</h2>
            <p className="lead">
              The tidystats R package is available on CRAN. Install the package
              by running <code>install.packages("tidystats")</code> in R. For
              more information about the package, including documentation for
              the functions and tutorials on how to use tidystats, click the
              button below.
            </p>
            <LearnMoreButton to="r" />
          </div>
          <div className="flex-shrink-0 text-center">
            <img
              className="py-3"
              src={logoR}
              width="200"
              height="200"
              alt="R logo"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="container d-md-flex justify-content-center py-4">
          <div>
            <div className="text-center pb-5">
              <h2>Supported R functions</h2>
            </div>
            <div className="d-flex flex-wrap gap-5 px-5">
              <div>
                <h5>
                  <strong>stats</strong>
                </h5>
                <ul>
                  <li>
                    <code>t.test()</code>
                  </li>
                  <li>
                    <code>cor.test()</code>
                  </li>
                  <li>
                    <code>chisq.test()</code>
                  </li>
                  <li>
                    <code>wilcox.test()</code>
                  </li>
                  <li>
                    <code>fisher.test()</code>
                  </li>
                  <li>
                    <code>oneway.test()</code>
                  </li>
                  <li>
                    <code>aov()</code>
                  </li>
                  <li>
                    <code>lm()</code>
                  </li>
                  <li>
                    <code>anova()</code>
                  </li>
                </ul>
              </div>
              <div>
                <h5>
                  <strong>lme4</strong>
                </h5>
                <ul>
                  <li>
                    <code>lmer()</code>
                  </li>
                </ul>

                <h5>
                  <strong>lmerTest</strong>
                </h5>
                <ul>
                  <li>
                    <code>lmer()</code>
                  </li>
                </ul>

                <h5>
                  <strong>tidystats</strong>
                </h5>
                <ul>
                  <li>
                    <code>describe_data()</code>
                  </li>
                  <li>
                    <code>count_data()</code>
                  </li>
                </ul>
              </div>
              <div>
                <h5>
                  <strong>BayesFactor</strong>
                </h5>
                <ul>
                  <li>
                    <code>generalTestBF()</code>
                  </li>
                  <li>
                    <code>lmBF()</code>
                  </li>
                  <li>
                    <code>regressionBF()</code>
                  </li>
                  <li>
                    <code>ttestBF()</code>
                  </li>
                  <li>
                    <code>anovaBF()</code>
                  </li>
                  <li>
                    <code>correlationBF()</code>
                  </li>
                  <li>
                    <code>contingencyTableBF()</code>
                  </li>
                  <li>
                    <code>meta.ttestBF()</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section background="bg-light">
        <div className="container d-md-flex py-4">
          <div className="d-md-flex align-items-center gap-5">
            <div className="flex-shrink-0 text-center">
              <img
                className="pb-5"
                src={logoWord}
                width="200"
                height="200"
                alt="Microsoft Word logo"
              />
            </div>
            <div className="flex-grow-0">
              <h2>Microsoft Word add-in</h2>
              <p className="lead">
                The tidystats Word add-in is available in the Office Add-in
                store. You can find this store in the Insert tab of your Word
                document. Once installed, you will be able to add statistics to
                your document using the file created with the tidystats R
                package.
              </p>
              <LearnMoreButton to="word" />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="container d-md-flex flex-column py-4">
          <h2 className="text-center mb-5">Support</h2>
          <div className="d-flex justify-content-center flex-wrap gap-5">
            <div className="text-center mx-4">
              <Link to="/FAQ">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 16 16"
                  className="bi bi-question-circle-fill"
                  fill="#18bc9c"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
                  />
                </svg>
              </Link>
              <h4 className="mt-4">FAQ</h4>
            </div>
            <div className="text-center mx-4">
              <a href="/tips.html">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 16 16"
                  className="bi bi-lightbulb"
                  fill="#f39c12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                </svg>
              </a>
              <h4 className="mt-4">Tips & Tricks</h4>
            </div>
            <div className="text-center mx-4">
              <a href="https://twitter.com/tidystats">
                <img
                  src={logoTwitter}
                  alt="Twitter logo"
                  width="100"
                  height="100"
                />
              </a>
              <h4 className="mt-4">Twitter</h4>
            </div>
            <div className="text-center mx-4">
              <a href="mailto:tidystats@gmail.com">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 16 16"
                  className="bi bi-envelope-fill"
                  fill="#95a5a6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                  />
                </svg>
              </a>
              <h4 className="mt-4">E-mail</h4>
            </div>
          </div>
        </div>
      </Section>
      <Section background="bg-light">
        <div className="container d-md-flex flex-column py-4">
          <h2>Citation</h2>
          <p className="lead">
            Please consider citing tidystats if you found it useful.
          </p>
          <p className="lead">
            Sleegers, W. W. A. (2020). tidystats: Save output of statistical
            tests (Version 0.5) [Computer software].
            https://doi.org/10.5281/zenodo.4041859
          </p>
          <div className="d-flex gap-3">
            <LearnMoreButton to="citation" />
            <CitationButton />
          </div>
        </div>
      </Section>
    </>
  )
}

export default Home

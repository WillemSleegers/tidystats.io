import { Link } from "react-router-dom"
import Section from "../components/Section"

import logo from "../images/word.svg"
import screenshot from "../images/screenshot.png"
import video from "../videos/example.mp4"

export default function Word() {
  return (
    <>
      <Section background="bg-light">
        <div className="py-2 text-center">
          <img src={logo} width="160" height="160" alt="Microsoft Word logo" />
        </div>
      </Section>

      <div className="container-md my-md-4">
        <h2 className="text-center py-3">Word Add-in</h2>

        <p>
          The tidystats Word add-in can be used to report statistics in a
          Microsoft Word document, using a file created with the tidystats R
          package.
        </p>

        <h3>Main features</h3>

        <ul>
          <li>
            A user-friendly point-and-click interface to insert statistics in
            APA-style
          </li>
          <li>Insert multiple statistics with a single click</li>
          <li>
            Customize which statistics to include when inserting multiple
            statistics
          </li>
          <li>Update reported statistics with new statistics</li>
        </ul>

        <h3>Installation</h3>

        <p>
          The tidystats Word add-in is available in the Office Add-in store. You
          can find this store in your Word document by going to the Add-in
          section of the Insert tab. Simply search for 'tidystats' and you
          should find the add-in.
        </p>

        <p>
          Once installed, a button saying 'Insert Statistics' will be added to
          the Insert tab of your Word document.
        </p>

        <h3>Usage</h3>

        <p>
          Using the tidystats add-in is relatively straightforward. You open the
          tidystats add-in by clicking on the 'Insert Statistics' button found
          in the Insert pane of your Word document. After tidystats opens, click
          on 'Upload statistics' to select the file created with the tidystats R
          package. This will reveal a list of analyses. Click on the dropdown
          arrows to reveal the statistics of each analysis.
        </p>

        <img
          className="container"
          src={screenshot}
          alt="tidystats add-in screenshot"
        />

        <p>
          You can click on an individual statistic or on a list of statistics
          (by clicking on 'Statistics:') to insert statistics into your
          document, at the location of your cursor.
        </p>

        <p>
          It is possible to customize exactly which statistics will be reported
          when inserting multiple statistics. Click on the gear icon next to
          'Statistics:' to reveal checkboxes next to each statistic. By default,
          all checkboxes are checked. Unchecking a checkbox will prevent that
          statistic from being inserted when inserting multiple statistics at
          once.
        </p>

        <p>
          You can update reported statistics by uploading a new file and
          clicking on the 'Update statistics' button. This will automatically
          update all reported statistics with the statistics from the new file.
          Note: This requires that the identifier of each analysis is kept the
          same.
        </p>

        <h3>An example</h3>

        <p>
          Below is an example of how to use several features of the tidystats
          add-in.
        </p>

        <video className="mw-100 rounded" controls>
          <source src={video} type="video/mp4" />
        </video>

        <div className="mt-3">
          <h3>Support</h3>

          <p>
            Do you have a question or comment, such as a feature request, about
            tidystats? Check out the <Link to="/support">support</Link> page for
            ways to contact me.
          </p>
        </div>
      </div>
    </>
  )
}

import avatar from "../images/avatar.png"

export default function Me() {
  return (
    <div className="container-md d-flex flex-column align-items-center my-5 text-center">
      <img
        src={avatar}
        className="rounded-circle my-5"
        width="250"
        height="250"
        alt="avatar"
      />
      <h2>Hi, I'm Willem</h2>
      <p className="mt-3">
        I'm a Senior Behavioral Scientist at{" "}
        <a href="http://rethinkpriorities.org">Rethink Priorities</a>. Rethink
        Priorities is a research organization that conducts research to inform
        policymakers and major foundations about how to best help people and
        animals in both the present and the long-term future.
      </p>

      <p>
        Before joining Rethink Prorities, I worked as an Assistant Professor in
        the Social Psychology department of{" "}
        <a href="https://www.tilburguniversity.edu/staff/w-w-a-sleegers">
          Tilburg University
        </a>
        .
      </p>

      <p>
        I love all aspects of doing research, including figuring out ways how to
        do better research. That is why I developed <code>tidystats</code>.
      </p>

      <p>
        If you want to get in touch, please send me an{" "}
        <a href="mailto:w.sleegers@me.com">e-mail</a> or contact me on
        <a href="https://twitter.com/willemsleegers">Twitter</a>.
      </p>
    </div>
  )
}

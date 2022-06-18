import avatar from "../../assets/images/avatar.png"

export default function Me() {
  return (
    <div className="container-md my-5">
      <div className="d-flex flex-column align-items-center">
        <img
          src={avatar}
          className="rounded-circle my-5"
          width="250"
          height="250"
          alt="avatar"
        />
        <h1>Hi, I'm Willem</h1>
      </div>
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
        do better research. That is why I developed tidystats.
      </p>

      <p>
        If you want to get in touch, please send me an{" "}
        <a href="mailto:w.sleegers@me.com">e-mail</a> or contact me on
        <a href="https://twitter.com/willemsleegers">Twitter</a>.
      </p>
    </div>
  )
}

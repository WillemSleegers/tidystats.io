export const Support = () => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-12">
      <div className="mx-5 text-center hover:scale-105">
        <a href="/support/FAQ/">
          <img
            src="/assets/images/question.svg"
            alt="FAQ icon"
            style={{ width: 80, height: 80 }}
          />
        </a>
        <h3 className="my-4 font-medium text-gray-900">FAQ</h3>
      </div>
      <div className="mx-5 text-center hover:scale-105">
        <a href="/support/tips/">
          <img
            src="/assets/images/lightbulb.svg"
            alt="tips icon"
            style={{ width: 80, height: 80 }}
          />
        </a>
        <h5 className="my-4 font-medium text-gray-900">Tips</h5>
      </div>
      <div className="mx-5 text-center hover:scale-105">
        <a href="https://twitter.com/tidystats">
          <img
            src="/assets/images/twitter.svg"
            alt="Twitter logo"
            style={{ width: 80, height: 80 }}
          />
        </a>
        <h5 className="my-4 font-medium text-gray-900">Twitter</h5>
      </div>
      <div className="mx-5 text-center hover:scale-105">
        <a href="mailto:tidystats@gmail.com">
          <img
            src="/assets/images/email.svg"
            alt="email icon"
            style={{ width: 80, height: 80 }}
          />
        </a>
        <h5 className="my-4 font-medium text-gray-900">E-mail</h5>
      </div>
    </div>
  );
};

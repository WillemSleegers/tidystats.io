const data = [
  {
    id: "FAQ",
    name: "FAQ",
    image: "/assets/images/question.svg",
    image_alt: "FAQ icon",
    url: "/FAQ/",
  },
  {
    id: "tips",
    name: "Tips",
    image: "/assets/images/lightbulb.svg",
    image_alt: "Tips icon",
    url: "/tips/",
  },
  {
    id: "x",
    name: "X",
    image: "/assets/images/x-black.png",
    image_alt: "X icon",
    url: "https://twitter.com/tidystats",
  },
  {
    id: "email",
    name: "E-mail",
    image: "/assets/images/email.svg",
    image_alt: "E-mail icon",
    url: "mailto:tidystats@gmail.com",
  },
];

export default () => {
  return (
    <div id="content">
      <h1 className="text-center">Support</h1>
      <p>
        Do you have a question about tidystats or is something not working?
        Please check the Frequently Asked Questions (FAQ), tips & tricks, or
        contact me via Twitter or e-mail.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-12">
        {data.map((x) => {
          return (
            <div>
              <div className="rounded  p-3 text-center ">
                <a href={x.url}>
                  <img
                    src={x.image}
                    alt={x.image_alt}
                    style={{ width: 80, height: 80 }}
                  />
                  <h3 className="my-4 text-center font-semibold">{x.name}</h3>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

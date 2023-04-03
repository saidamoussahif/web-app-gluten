import React from "react";

function CategoryCard() {
  return (
    <>
      <section>
        <div className="flex justify-center items-center gap-12">
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
            <a href="/">
              <img
                className="rounded-lg"
                src="https://img.freepik.com/free-photo/basket-bread-lavash-table-with-egg-flour_114579-40585.jpg?size=626&ext=jpg&ga=GA1.1.1065634067.1658138070&semt=ais"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption>
          </figure>
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
            <a href="/">
              <img
                className="rounded-lg"
                src="https://img.freepik.com/free-photo/chocolate-nuts-wood_176420-7435.jpg?size=626&ext=jpg&ga=GA1.2.1065634067.1658138070&semt=ais"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption>
          </figure>
          <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter">
            <a href="/">
              <img
                className="rounded-lg"
                src="https://img.freepik.com/free-photo/delicious-food-groups-arrangement-top-view_23-2149235819.jpg?size=626&ext=jpg&ga=GA1.2.1065634067.1658138070&semt=ais"
                alt="image description"
              />
            </a>
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default CategoryCard;

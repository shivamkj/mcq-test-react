export function NotFound() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Not Found
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Sorry, the test you were looking for is not available, please check
            the link
          </p>
        </div>
      </div>
    </section>
  );
}

// https://tailgrids.com/components/

type DashletProps = {
  imageSrc?: string;
  title: string;
  href?: string;
  children?: React.ReactNode;
};

export const Dashlet = ({
  imageSrc = "https://picsum.photos/600/400",
  title,
  href,
  children,
}: DashletProps) => {
  return (
    <>
      <div className="shadow-1 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 mb-10 overflow-hidden rounded-lg bg-white duration-300">
        <img src={imageSrc} alt="" className="h-72 w-full object-cover" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={href ? href : "/#"}
              className="text-dark hover:text-primary mb-4 block text-xl font-semibold dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {title}
            </a>
          </h3>
          <p className="text-body-color dark:text-dark-6 mb-7 text-base leading-relaxed">
            {children}
          </p>
          <button className="border-gray-3 text-body-color hover:border-primary hover:bg-primary dark:border-dark-3 dark:text-dark-6 inline-block rounded-full border px-7 py-2 text-base font-medium transition hover:text-white">
            Button
          </button>
        </div>
      </div>
    </>
  );
};

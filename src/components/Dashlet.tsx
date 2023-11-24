type DashletProps = {
  imageSrc?: string;
  title: string;
  href?: string;
  children?: React.ReactNode;
};

export const Dashlet = ({
  imageSrc = "https://picsum.photos/600/400",
  title,
  children,
}: DashletProps) => {
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={imageSrc}
            alt="Dahslet Image"
            className="h-72 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {children}
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">Button</button>
          </div>
        </div>
      </div>
    </>
  );
};

const IconHoverDetail = ({
  icon,
  name,
  className,
}: {
  icon: React.ReactNode;
  name: string;
  className?: string;
}) => {
  return (
    <div className={`p-1 relative group ${className}`}>
      {icon}
      <div className="absolute px-2 -top-10 -right-5 bg-white rounded border bg-slate-100 z-10 p-1 hidden group-hover:block transition-all duration-300 ease-in-out">
        <p className="text-sm text-neutral-600">{name}</p>
      </div>
    </div>
  );
};

export default IconHoverDetail;

const IconHoverDetail = ({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) => {
  return (
    <div className="p-1 relative group">
      {icon}
      <div className="absolute -top-10 -right-5 bg-white rounded border bg-slate-100 z-10 p-1 hidden group-hover:block transition-all duration-300 ease-in-out">
        {name}
      </div>
    </div>
  );
};

export default IconHoverDetail;

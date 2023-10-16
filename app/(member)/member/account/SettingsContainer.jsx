export default function SettingContainer({
  title,
  descrition,
  onClickFunction,
  icon,
  children,
}) {
  return (
    <div
      className="main-green-bg hover-zoom mx-auto my-10 flex w-5/6 max-w-xl cursor-pointer items-center gap-6 rounded-3xl bg-gradient-to-br px-6 py-7 backdrop-blur-2xl"
      onClick={onClickFunction}
    >
      <div className="m-2 text-5xl text-green-700 dark:text-green-200">
        {icon}
      </div>
      <div className="flex flex-col text-left">
        <h3 className="pb-2 ">{title}</h3>
        <h5>{descrition}</h5>
      </div>

      {children}
    </div>
  );
}

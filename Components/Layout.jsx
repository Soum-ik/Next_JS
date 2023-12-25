export default function Layout({ children }) {
  return (
    <div className="sm:px-16 px-6  flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">{children}</div>
    </div>
  );
}

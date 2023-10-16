export default function Loading({ sizes, center, circle }) {
  return (
    <div
      className={`${sizes} ${center && "mx-auto"} animate-pulse rounded-${
        circle ? "full" : "3xl"
      } bg-gradient-to-br from-green-600/30 to-green-700/40`}
    />
  );
}

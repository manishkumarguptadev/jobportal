type Props = {
  resultsCount: number;
};

export default function ResultsCount({ resultsCount }: Props) {
  return (
    <>
      <p className="font-bold">{resultsCount}</p>
      <p className="text-xs font-medium opacity-80">results</p>
    </>
  );
}

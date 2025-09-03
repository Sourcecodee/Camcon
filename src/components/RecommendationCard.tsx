
interface RecommendationCardProps {
  gigTitle: string;
  matchPercent: number;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ gigTitle, matchPercent }) => (
  <div className="p-4 bg-white rounded shadow flex flex-col items-start mb-4">
    <div className="font-semibold text-lg">{gigTitle}</div>
    <div className="text-sm text-gray-500">Match: {matchPercent}%</div>
  </div>
);

export default RecommendationCard;


interface StatCardProps {
  label: string;
  value: number;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => (
  <div className="p-4 bg-blue-100 rounded shadow flex flex-col items-center mb-4">
    <div className="font-bold text-xl">{value}</div>
    <div className="text-sm text-gray-700">{label}</div>
  </div>
);

export default StatCard;

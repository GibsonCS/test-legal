import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface User {
  name: string;
  description: string;
  affinityLevel: string; // precisa virar número ou ser convertido
}

interface UserListProps {
  users: User[];
}

export default function Graph({ users }: UserListProps) {
  const chartData = users.map((user) => ({
    name: user.name,
    value: parseFloat(user.affinityLevel),
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="flex justify-center">
      <PieChart width={600} height={600}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={200}
          label
        >
          {chartData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

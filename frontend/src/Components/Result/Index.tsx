import { HeartHandshake } from "lucide-react";
import Graph from "../Graph/Index";

interface User {
  name: string;
  description: string;
  affinityLevel: string;
}

interface UserListProps {
  users: User[];
}
export const Result = ({ users }: UserListProps) => {
  return (
    <section className="flex flex-col h-full ">
      <h1 className="text-3xl p-4 items-center flex flex-col gap-2">
        Lista das três últimas pessoas que tem mais afinidade com você!
        <HeartHandshake className="size-14" />
      </h1>
      <table className="border flex flex-co w-full justify-around flex-wrap">
        <tr className="flex border w-full justify-around">
          <th className="p-2 text-xl w-full border">Nome</th>
          <th className="p-2 text-xl w-full border">Descrição</th>
          <th className="p-2 text-xl w-full border">Nivel de afinidade</th>
        </tr>
        {users.map((user: User, index: number) => (
          <tr
            className="flex w-full justify-around text-center border"
            key={index}
          >
            <td className="border w-full p-2">{user.name}</td>
            <td className="border w-full p-2">{user.description}</td>
            <td className="border w-full p-2">{user.affinityLevel}</td>
          </tr>
        ))}
      </table>
      <Graph users={users} />
    </section>
  );
};

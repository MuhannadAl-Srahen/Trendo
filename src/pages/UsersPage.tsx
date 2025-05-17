import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Search } from "lucide-react";
import { useState } from "react";

export default function UsersPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    { username: "alice.johnson", name: "Alice Johnson" },
    { username: "bobsmith", name: "Bob Smith" },
    { username: "charlied", name: "Charlie Davis" },
    { username: "diana_e", name: "Diana Evans" },
    { username: "ethanbrown", name: "Ethan Brown" },
    { username: "fiona.clark", name: "Fiona Clark" },
    { username: "george_m", name: "George Miller" },
    { username: "hannahmoore", name: "Hannah Moore" },
    { username: "ian.w", name: "Ian Wilson" },
    { username: "jasminelee", name: "Jasmine Lee" },
    { username: "kevinhall", name: "Kevin Hall" },
    { username: "laura.s", name: "Laura Scott" },
    { username: "mike_a", name: "Mike Adams" },
    { username: "nina.turner", name: "Nina Turner" },
    { username: "oscar_y", name: "Oscar Young" },
    { username: "paulagreen", name: "Paula Green" },
    { username: "quinn.h", name: "Quinn Harris" },
    { username: "rachbaker", name: "Rachel Baker" },
  ];

const filteredUsers = users.filter(
  (user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <div className="p-16 pt-6">
      <h2 className="text-primary text-center text-2xl font-bold mb-6">User Search</h2>

      <div className="relative w-full mb-6">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search..."
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="m-8 mb-4 flex flex-row justify-between">
        <h5 className="text-primary">All users</h5>
        <DropdownMenu>All</DropdownMenu>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 pt-6 pb-8 border rounded-4xl shadow-sm"
          >
            <Avatar
              className="border-primary h-16 w-16 cursor-pointer border-2"
              onClick={() => navigate("/profile")}
            >
              <AvatarFallback className="from-primary/20 to-primary/10 text-primary bg-gradient-to-br">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="text-sm text-gray-400">@{user.username}</div>
            <div className="font-bold">{user.name}</div>
            <Button className="font-bold text-white mt-2 w-1/3 border-white border-2">Follow</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

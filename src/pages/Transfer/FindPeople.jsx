import { useState } from "react";

import {
  FiSearch,
  FiStar,
  FiGrid,
  FiSend,
  FiClock,
  FiPlusCircle,
  FiUser,
} from "react-icons/fi";

//dummy data
const contacts = [
  { id: 1, name: "Ghaluh 1", phone: "0815-555-0108" },
  { id: 2, name: "Albert Flores", phone: "0812-555-0108" },
  { id: 3, name: "Bessie Cooper", phone: "0896-555-0108" },
  { id: 4, name: "Jacob Jones", phone: "0871-555-0108" },
  { id: 5, name: "Leslie Alexander", phone: "0830-555-0108" },
  { id: 6, name: "Cody Fisher", phone: "0877-555-0108" },
  { id: 7, name: "Ralph Edwards", phone: "0855-555-0108" },
];

const navigation = [
  { name: "Dashboard", icon: FiGrid },
  { name: "Transfer", icon: FiSend },
  { name: "History", icon: FiClock },
  { name: "Top Up", icon: FiPlusCircle },
  { name: "Profile", icon: FiUser },
];

function FindPeople() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const filteredContacts = contacts.filter((contact) =>
    `${contact.name} ${contact.phone}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const toggleFavorites = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const selectContact = (contact) => {
    setSelectedId(contact.id);
  };

  return (
    <div className="mx-auto flex h-dvh w-full flex-col">
      <header className="bg-brand-primary p-3 text-white h-14 flex items-center">
        Transfer
      </header>

      <main className="overflow-y-auto bg-white p-4 flex-1 min-h-0">
        <h3 className="mb-3 font-bold">Find People</h3>
        <div className="flex mb-4 rounded-md border border-gray-300 items-center">
          <input
            type="text"
            placeholder="Enter Number Or Full Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-full text-xs p-3 text-brand-secondary outline-none placeholder:text-gray-400"
          />

          <FiSearch size={25} className="mr-3" />
        </div>

        <div className="flex flex-col gap-2">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between rounded-md px-3 py-3 hover:bg-brand-primary/5"
            >
              <button
                type="button"
                onClick={() => selectContact(contact)}
                className="flex flex-1 items-center gap-5 text-left"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-100 text-sm font-semibold text-brand-primary lg:grid lg:grid-cols-[60px_1fr_1fr] lg:gap-6">
                  {contact.name.charAt(0)}
                </div>
                <div>
                  <p>{contact.name}</p>
                  <p>{contact.phone}</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => toggleFavorites(contact.id)}
                className="cursor-pointer"
              >
                <FiStar
                  size={25}
                  className={
                    favorites.includes(contact.id)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-400"
                  }
                />
              </button>
            </div>
          ))}
        </div>
      </main>

      <nav className="mt-auto grid grid-cols-5 border-t border-gray-100 bg-white px-2 py-3">
        {navigation.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className={`flex flex-col items-center justify-center gap-1 ${
              name === "Transfer" ? "text-brand-primary" : "text-gray-400"
            }`}
          >
            <Icon size={19} />
            <span className="text-[10px]">{name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default FindPeople;

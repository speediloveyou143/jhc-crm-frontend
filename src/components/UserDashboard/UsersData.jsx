import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedUsers } from '../../redux/userSlice';

const UsersData = () => {
  const dispatch = useDispatch();

  const users = [
    { name: "Hart Hagerty", email: "hart@gmail.com", group: "Night Watch", role: "Front End" },
    { name: "Alice Johnson", email: "alice.johnson@example.com", group: "Day Shift", role: "Back End" },
    { name: "Marcus Lee", email: "marcus.lee@example.com", group: "Night Watch", role: "DevOps" },
    { name: "Sarah Kim", email: "sarah.kim@example.com", group: "Design Team", role: "UI/UX" },
    { name: "Daniel Rivera", email: "daniel.r@example.com", group: "Day Shift", role: "QA" },
    { name: "Laura Smith", email: "laura.smith@example.com", group: "Marketing", role: "Content" },
    { name: "Kevin Brown", email: "kevin.brown@example.com", group: "Night Watch", role: "Front End" },
    { name: "Emily Davis", email: "emily.davis@example.com", group: "Day Shift", role: "Product" },
    { name: "Nina Patel", email: "nina.patel@example.com", group: "Day Shift", role: "Front End" },
    { name: "James O'Connor", email: "james.oconnor@example.com", group: "Night Watch", role: "Back End" },
    { name: "Amara Johnson", email: "amara.j@example.com", group: "Design Team", role: "UI/UX" },
    { name: "Ethan Zhang", email: "ethan.zhang@example.com", group: "Night Watch", role: "DevOps" },
    { name: "Sophia Lee", email: "sophia.lee@example.com", group: "Day Shift", role: "QA" },
    { name: "Carlos Medina", email: "carlos.medina@example.com", group: "Marketing", role: "SEO Specialist" },
    { name: "Ava Thompson", email: "ava.thompson@example.com", group: "Product Team", role: "Product Manager" },
    { name: "Liam Wright", email: "liam.wright@example.com", group: "Day Shift", role: "Front End" },
    { name: "Isabella Chen", email: "isabella.chen@example.com", group: "Design Team", role: "Graphic Designer" },
    { name: "Noah Kim", email: "noah.kim@example.com", group: "Night Watch", role: "System Admin" }
  ];

  const [checkedItems, setCheckedItems] = useState(Array(users.length).fill(false));

  useEffect(() => {
    const selected = users.filter((_, idx) => checkedItems[idx]);
    dispatch(setSelectedUsers(selected));
  }, [checkedItems]);

  const allChecked = checkedItems.every(Boolean);

  const toggleAll = () => {
    setCheckedItems(Array(users.length).fill(!allChecked));
  };

  const toggleOne = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  return (
    <div className="carousel carousel-vertical h-[625px] w-full overflow-x-auto">
      <table className="table w-full bg-[#E5E7EB]">
        <thead className="text-[blue]">
          <tr>
            <th>
              <input
                type="checkbox"
                className="checkbox text-[lime] border-[blue]"
                checked={allChecked}
                onChange={toggleAll}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>User Group</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>
                <input
                  type="checkbox"
                  className="checkbox text-[lime] border-[blue]"
                  checked={checkedItems[index]}
                  onChange={() => toggleOne(index)}
                />
              </th>
              <td className='font-bold'>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.group}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="text-[blue]">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>User Group</th>
            <th>Role</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UsersData;

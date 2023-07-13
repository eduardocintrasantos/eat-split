import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({children, clickEvent}) {
  return <button onClick={clickEvent} className="button">{children}</button>
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show)=> !show);
  }

  return <div className="app">
    <div className="sidebar">
      <FriendList />
      {showAddFriend && <FormAddFriend />}
      <Button clickEvent={handleShowAddFriend}>Add Friend</Button>
    </div>
    <FormSplitBill />
  </div>
}

function FriendList() {
  const friend = initialFriends;
  return (
    <ul>
      {friend.map((friend=>(
        <Friend friend={friend} key={friend.id}/>
      )))}
    </ul>
  )
}

function Friend({friend}) {
  return (
    <li>
      <img src={friend.image} alt={friend.name}/>
      <h3>{friend.name}</h3>

      {friend.balance < 0 && <p className="red">You 
      owe {friend.name} {Math.abs(friend.balance)}$</p>}

      {friend.balance > 0 && <p className="green">
      {friend.name} owes you {Math.abs(friend.balance)}$</p>}

      {friend.balance === 0 && <p>You 
      and {friend.name} are even.</p>}
    
      <Button>Select</Button>
    </li>
  )
}

function FormAddFriend() {
  return <form className="form-add-friend">
    <label>🧍‍♂️ Friend name</label>
    <input type="text"></input>

    <label>📸 Image URL</label>
    <input type="text"></input>

    <Button>Add</Button>
  </form>
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💵 Bill Value</label>
      <input type="text"></input>

      <label>🧍‍♂️ Your expense</label>
      <input type="text"></input>

      <label>👨🏼‍🤝‍👨🏻 X's expense</label>
      <input type="text" disabled></input>

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}
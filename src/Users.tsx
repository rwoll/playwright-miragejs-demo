import React, { useState, useEffect } from "react"

export function Users() {
  const [users, setUsers] = useState<{ name: string, id: string; }[]>([]);
  const [error, setError] = useState("");


  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch(() => setError("network error"))
  }, [])

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
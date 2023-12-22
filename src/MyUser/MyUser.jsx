export const MyUser = ({ user }) => {
  return (
    <div>
      <h1> My User: </h1>
      <dl>
        <dt>Name</dt>
        <dd style={{ marginBottom: 20 }}>{user.name}</dd>
        <dt>Surname</dt>
        <dd style={{ marginBottom: 20 }}>{user.surname}</dd>
        <dt>Age</dt>
        <dd style={{ marginBottom: 20 }}>{user.age}</dd>
      </dl>
    </div>
  );
};
